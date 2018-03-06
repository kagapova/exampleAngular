import {Component, Input, OnInit} from '@angular/core';
import {CompanyRoadmapStage} from '../../../models/company';

@Component({
    selector: 'app-search-block-roadmap',
    templateUrl: './search-block-roadmap.component.html',
    styleUrls: ['./search-block-roadmap.component.scss']
})
export class SearchBlockRoadmapComponent implements OnInit {
    @Input() roadmap: CompanyRoadmapStage[];
    @Input() sourceUrl: string;
    showedStages: CompanyRoadmapStage[];
    showedAllRoadmap: boolean;

    constructor() {
    }

    ngOnInit() {
        if (this.roadmap.length > 4) {
            this.showedStages = this.roadmap.slice(0, 2);
            this.showedAllRoadmap = false;
        }
    }

    showAllRoadmap() {
        this.showedStages = this.roadmap;
        this.showedAllRoadmap = true;
    }
}
