import {Component, Input, OnInit} from '@angular/core';
import {TokenResult} from '../../../models/search-result';

@Component({
    selector: 'app-search-result-token',
    templateUrl: './search-result-token.component.html',
    styleUrls: ['./search-result-token.component.scss']
})
export class SearchResultTokenComponent implements OnInit {
    @Input() result: TokenResult;
    options;
    data;

    constructor() {
    }

    ngOnInit() {
        this.options = {
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
                        date.setTime(timestamp*1000);
                        return d3.time.format('%b %d')(date);
                    },
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
            }
        };

        this.data = [
            {
                color: '#6091f0',
                strokeWidth: 2,
                tickPadding: 200,
                values: this.result.chartValues,
            }
        ];
    }

}
