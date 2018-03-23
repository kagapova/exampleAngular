export class Company {
    public readonly type: string = 'company';

    constructor(public readonly title: string,
                public readonly description: string,
                public readonly image: string,
                public readonly country: string,
                public readonly category: string,
                public readonly chain: string,
                public readonly rating: string,
                public readonly icoType: string,
                public readonly preIcoStart: string,
                public readonly preIcoEnd: string,
                public readonly icoStart: string,
                public readonly icoEnd: string,
                public readonly links: CompanyLink[],
                public readonly team: CompanyMember[],
                public readonly roadmap: CompanyRoadmapStage[],
                public readonly url: string,
                public readonly analyticalURL: string) {
    }
}


export class CompanyLink {
    constructor(public readonly type: string,
                public readonly url: string) {
    }
}


export class CompanyMember {
    constructor(public readonly name: string,
                public readonly role: string,
                public readonly linkedinURL: string,
                public readonly twitterURL: string,
                public readonly facebookURL: string) {
    }
}


export class CompanyRoadmapStage {
    constructor(public readonly name: string,
                public readonly description: string) {
    }
}
