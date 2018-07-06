import {Component, Input, OnInit} from '@angular/core';
import {CompanyRoadmapStage} from '@app/models/company';
import {AnalyticsService} from '@app/services/analytics/analytics.service';

@Component({
    selector: 'app-roadmap',
    templateUrl: './roadmap.component.html',
    styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
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

        this.analytics.view('roadmap');
    }

    showAllRoadmap() {
        this.showedStages = this.roadmap;
        this.showedAllRoadmap = true;
        this.analytics.click('roadmap', 'show-all');
    }
}
