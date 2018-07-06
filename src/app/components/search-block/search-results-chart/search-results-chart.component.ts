import { Component, Input, OnInit } from '@angular/core';

import { ChartValue, Currency } from '@app/models/currency';
import { AnalyticsService } from '@app/services/analytics/analytics.service';
import { chartTimePeriods } from './chart-time-periods';


@Component({
    selector: 'app-search-results-chart',
    templateUrl: './search-results-chart.component.html',
    styleUrls: ['./search-results-chart.component.scss']
})
export class SearchResultsChartComponent implements OnInit {
    @Input() values: Map<string, ChartValue[]>;

    timePeriods: any[];
    chartDirection = 'success';
    chartTimePeriod: string;
    chartOptions;
    chartData;

    deltaValue: number;
    deltaPercent: number;

    deltaStartDate: Date;
    deltaStartValue: number;

    deltaEndDate: Date;
    deltaEndValue: number;

    deltaMinValue: number;
    deltaMaxValue: number;

    constructor(private analytics: AnalyticsService) {
        const time = chartTimePeriods.filter(period => period.isDefault === true);
        this.timePeriods = chartTimePeriods;
        this.chartTimePeriod = time[0].label;
    }

    public ngOnInit() {
        this.updateChartData();
        this.updateDeltaData();
        this.analytics.view('search-results-chart');
    }

    public selectChartTimePeriod(period: string) {
        this.chartTimePeriod = period;
        this.updateChartData();
        this.updateDeltaData();
        this.analytics.click('search-results-chart', period);
    }

    private updateChartData() {
        const chartTimePeriod = this.chartTimePeriod;

        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 300,
                x: (d) => d.x,
                y: (d) => d.y,
                useInteractiveGuideline: true,
                showLegend: false,
                xAxis: {
                    tickFormat: function (timestamp) {
                        const date = new Date();
                        date.setTime(timestamp * 1000);

                        switch (chartTimePeriod) {
                            case '1d':
                                return d3.time.format('%H:00')(date);
                            case '1w':
                            case '1m':
                            case '3m':
                                return d3.time.format('%b %d')(date);
                            case '1y':
                            case '5y':
                                return d3.time.format('%b %Y')(date);
                            default:
                                throw new Error();
                        }
                    },
                    showMaxMin: false,
                },
                yAxis: {
                    tickFormat: function (d) {
                        if (d > 1) {
                            return d3.format('$.02f')(d);
                        } else {
                            return d3.format('$.04f')(d);
                        }
                    },
                    showMaxMin: false,
                },
                interactiveLayer: {
                    tooltip: {
                        enabled: true,
                        headerFormatter: function (timestamp) {
                            const date = new Date();
                            date.setTime(timestamp * 1000);

                            switch (chartTimePeriod) {
                                case '1d':
                                    return d3.time.format('%H:%M')(date);
                                case '1w':
                                    return d3.time.format('%b %d %H:%M')(date);
                                case '1m':
                                case '3m':
                                    return d3.time.format('%b %d %H:%M')(date);
                                case '1y':
                                case '5y':
                                    return d3.time.format('%b %d')(date);
                                default:
                                    throw new Error();
                            }
                        }
                    },
                }
            }
        };

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.chartOptions.chart.interactiveLayer.tooltip.enabled = false;
        }

        this.chartData = [
            {
                color: '#6091f0',
                strokeWidth: 2,
                tickPadding: 200,
                values: this.values[this.chartTimePeriod],
            }
        ];
    }

    private updateDeltaData() {
        const values = this.values[this.chartTimePeriod];
        if (!values.length) {
            return;
        }

        for (const value of values) {
            if (value.y > 0) {
                this.deltaStartValue = value.y;
                this.deltaStartDate = this.getDate(value.x);
                break;
            }
        }

        this.deltaEndValue = values[values.length - 1].y;
        this.deltaEndDate = this.getDate(values[values.length - 1].x);
        this.deltaValue = this.deltaEndValue - this.deltaStartValue;
        this.updateChartDirection(this.deltaValue);
        const deltaPercent = this.deltaValue / (this.deltaStartValue / 100);
        this.deltaPercent = Math.round(100 * deltaPercent) / 100;
        let minValue = 999999999999;
        let maxValue = 0;
        for (const value of values) {
            if (value.y < minValue && value.y > 0) {
                minValue = value.y;
            }
            if (value.y > maxValue) {
                maxValue = value.y;
            }
        }
        this.deltaMinValue = minValue;
        this.deltaMaxValue = maxValue;
    }

    private updateChartDirection(delta: number): void {
        this.chartDirection = delta > 0 ? 'success' : 'danger';
    }

    private getDate(timestamp: number): Date {
        const date = new Date();
        date.setTime(timestamp * 1000);

        return date;
    }

}
