interface CompanyServer {
    type: 'company';
    source: string;
    click: string;
    slug: string;
    bookmarkId: number;
    data: {
        title: string;
        icoType: string;
        url: string;
        description: string;
        image: string;
        preIcoStart: string;
        preIcoEnd: string;
        icoStart: string;
        icoEnd: string;
        chain: string;
        country: string;
        category: string;
        rating: string;
        links: CompanyLinkServer[];
        team: CompanyMemberServer[];
        roadmap: CompanyRoadmapStageServer[];
    };
}

interface CompanyLinkServer {
    linkType: string;
    url: string;
}

interface CompanyMemberServer {
    name: string;
    role: string;
    photo: string;
    linkedinUrl: string;
    twitterUrl: string;
    facebookUrl: string;
}

interface CompanyRoadmapStageServer {
    name: string;
    description: string;
}
