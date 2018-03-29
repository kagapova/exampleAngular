import {Component, Input, OnInit} from '@angular/core';
import {CompanyRoadmapStage} from '../../../models/company';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-search-block-roadmap',
    templateUrl: './search-block-roadmap.component.html',
    styleUrls: ['./search-block-roadmap.component.scss']
})
export class SearchBlockRoadmapComponent implements OnInit {
    @Input() roadmap: CompanyRoadmapStage[];
    @Input() sourceUrl: string;
    @Input() analyticalURL: string;
    showedStages: CompanyRoadmapStage[];
    showedAllRoadmap: boolean;

    constructor(private analytics: AnalyticsService) {
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
        this.analytics.click('search-block-roadmap', 'show-all');
    }
}
