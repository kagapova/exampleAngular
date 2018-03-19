import {Component, Input, OnInit} from '@angular/core';
import {ChartValue, Currency} from '../../../models/currency';

@Component({
    selector: 'app-search-block-chart-rate',
    templateUrl: './search-block-chart-rate.component.html',
    styleUrls: ['./search-block-chart-rate.component.scss']
})
export class SearchBlockChartRateComponent implements OnInit {
    @Input() values: Map<string, ChartValue[]>;

    chartTimePeriod: string = Currency.TimePeriod1w;
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

    constructor() {
    }

    public ngOnInit() {
        this.updateChartData();
        this.updateDeltaData();
    }

    public selectChartTimePeriod(period: string) {
        this.chartTimePeriod = period;
        this.updateChartData();
        this.updateDeltaData();
    }

    private updateChartData() {
        let chartTimePeriod = this.chartTimePeriod;

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
                        let date = new Date();
                        date.setTime(timestamp * 1000);

                        switch (chartTimePeriod) {
                            case Currency.TimePeriod1d:
                                return d3.time.format('%H:00')(date);

                            case Currency.TimePeriod1w:
                            case Currency.TimePeriod1m:
                            case Currency.TimePeriod3m:
                                return d3.time.format('%b %d')(date);

                            case Currency.TimePeriod1y:
                            case Currency.TimePeriod5y:
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
                            let date = new Date();
                            date.setTime(timestamp * 1000);

                            switch (chartTimePeriod) {
                                case Currency.TimePeriod1d:
                                    return d3.time.format('%H:%M')(date);

                                case Currency.TimePeriod1w:
                                    return d3.time.format('%b %d %H:%M')(date);

                                case Currency.TimePeriod1m:
                                case Currency.TimePeriod3m:
                                    return d3.time.format('%b %d %H:%M')(date);

                                case Currency.TimePeriod1y:
                                case Currency.TimePeriod5y:
                                    return d3.time.format('%b %d')(date);

                                default:
                                    throw new Error();
                            }
                        }
                    },
                }
            }
        };

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
        let values = this.values[this.chartTimePeriod];
        if (!values.length) {
            return;
        }

        for (let value of values) {
            if (value.y > 0) {
                this.deltaStartValue = value.y;
                this.deltaStartDate = this.getDate(value.x);
                break;
            }
        }

        this.deltaEndValue = values[values.length - 1].y;
        this.deltaEndDate = this.getDate(values[values.length - 1].x);

        this.deltaValue = this.deltaEndValue - this.deltaStartValue;

        let deltaPercent = this.deltaValue / (this.deltaStartValue / 100);
        this.deltaPercent = Math.round(100 * deltaPercent) / 100;

        let minValue = 999999999999;
        let maxValue = 0;
        for (let value of values) {
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

    private getDate(timestamp: number): Date {
        let date = new Date();
        date.setTime(timestamp * 1000);

        return date;
    }

}
