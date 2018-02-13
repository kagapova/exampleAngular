import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-blocks-blockchain',
    templateUrl: './blocks-blockchain.component.html',
    styleUrls: ['./blocks-blockchain.component.scss']
})
export class BlocksBlockchainComponent implements OnInit {
    result;
    options;
    data;

    constructor() {
    }

    ngOnInit() {
        this.result = {
            name: 'Bitcoin',
            code: 'BTC',
            description: 'Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator. The network is peer-to-peer and transactions take place between users directly, without an intermediary. These transactions are verified by network nodes through the use of cryptography and recorded in a public distributed ledger called a blockchain. Bitcoin was invented by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009.',
            website: 'https://bitcoin.org/',
            announcements: [
                "https://bitcoin.org/",
            ],
            explorers: [
                'https://blockchain.info/',
                'https://live.blockcypher.com/btc/',
                'https://blockchair.com/bitcoin/blocks',
            ],
            messageBoards: [
                'https://bitcointalk.org/',
                'https://forum.bitcoin.com/',
            ],
            chats: [],
            sourceCode: 'https://github.com/bitcoin/',
            currentCourse: 8511.35,
            marketCap: 144212303661,
            volume24h: 6022670000,
            circulatingSupply: 16862212,
            maxSupply: 21000000,
        };

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
                        return d3.format('$.04f')(d);
                    },
                    showMaxMin: false,
                },
            }
        };

        this.data = [
            {
                color: "#6091f0",
                strokeWidth: 2,
                tickPadding: 200,
                values: [
                    {x: 1517875200, y: 6394.88},
                    {x: 1517886000, y: 6480.93},
                    {x: 1517896800, y: 6138.06},
                    {x: 1517907600, y: 6502.51},
                    {x: 1517918400, y: 7189.91},
                    {x: 1517929200, y: 7007.21},
                    {x: 1517940000, y: 7525.34},
                    {x: 1517950800, y: 7701.25},
                    {x: 1517961600, y: 7360.75},
                    {x: 1517972400, y: 7456.57},
                    {x: 1517983200, y: 7669.61},
                    {x: 1517994000, y: 8227.78},
                    {x: 1518004800, y: 8253.88},
                    {x: 1518015600, y: 8336.02},
                    {x: 1518026400, y: 8169.92},
                    {x: 1518037200, y: 7592.72},
                    {x: 1518048000, y: 8049.8},
                    {x: 1518058800, y: 7999.02},
                    {x: 1518069600, y: 8247.58},
                    {x: 1518080400, y: 8492.97},
                    {x: 1518091200, y: 8440.3},
                    {x: 1518102000, y: 8210.57},
                    {x: 1518112800, y: 8330.51},
                    {x: 1518123600, y: 8260.69},
                    {x: 1518134400, y: 8150.35},
                    {x: 1518145200, y: 7897},
                    {x: 1518156000, y: 8088.98},
                    {x: 1518166800, y: 8281.58},
                    {x: 1518177600, y: 8432.19},
                    {x: 1518188400, y: 8633.11},
                    {x: 1518199200, y: 8571.7},
                    {x: 1518210000, y: 8696.83},
                    {x: 1518220800, y: 8947.07},
                    {x: 1518231600, y: 8881.85},
                    {x: 1518242400, y: 8687.57},
                    {x: 1518253200, y: 8663.98},
                    {x: 1518264000, y: 8630.56},
                    {x: 1518274800, y: 8453.53},
                    {x: 1518285600, y: 8216.07},
                    {x: 1518296400, y: 8569.29},
                    {x: 1518307200, y: 8267.21},
                    {x: 1518318000, y: 8122.75},
                    {x: 1518328800, y: 7936.71},
                    {x: 1518339600, y: 8196.25},
                    {x: 1518350400, y: 8463.57},
                    {x: 1518361200, y: 8226.18},
                    {x: 1518372000, y: 8249.71},
                    {x: 1518382800, y: 8084.61},
                    {x: 1518393600, y: 8545.88},
                    {x: 1518404400, y: 8396.4},
                    {x: 1518415200, y: 8777.94},
                    {x: 1518426000, y: 8671.74},
                    {x: 1518436800, y: 8566.43},
                    {x: 1518447600, y: 8780.85},
                    {x: 1518458400, y: 8874.46},
                    {x: 1518469200, y: 8911.27},
                    {x: 1518480000, y: 8737.02},
                    {x: 1518490800, y: 8632.26},
                    {x: 1518501600, y: 8554.06},
                    {x: 1518512400, y: 8535.7},
                    {x: 1518523200, y: 8625.47},
                ],
            },
        ]
    }
}
