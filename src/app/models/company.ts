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
                public readonly links: ICompanyLink[],
                public readonly team: CompanyMember[],
                public readonly roadmap: CompanyRoadmapStage[],
                public readonly url: string,
                public readonly slug: string,
                public readonly bookmarkId: number,
                public readonly analyticalURL: string) {
    }
}

export enum CompanyLinkType {
    Bitcointalk = 'bitcointalk',
    Blog = 'blog',
    Bounty = 'bounty',
    Discord = 'discord',
    Facebook = 'facebook',
    Github = 'github',
    Instagram = 'instagram',
    Linkedin = 'linkedin',
    Reddit = 'reddit',
    Slack = 'slack',
    Steemit = 'steemit',
    Telegram = 'telegram',
    Twitter = 'twitter',
    Vimeo = 'vimeo',
    Website = 'website',
    Whitepaper = 'whitepaper',
    Youtube = 'youtube',
}

export interface ICompanyLink {
    type: CompanyLinkType;
    url: string;
    icon: string;
    text: string;
}

export interface ICompanyLinks {
    bitcointalk: ICompanyLink;
    blog: ICompanyLink;
    bounty: ICompanyLink;
    discord: ICompanyLink;
    facebook: ICompanyLink;
    github: ICompanyLink;
    instagram: ICompanyLink;
    linkedin: ICompanyLink;
    reddit: ICompanyLink;
    slack: ICompanyLink;
    steemit: ICompanyLink;
    telegram: ICompanyLink;
    twitter: ICompanyLink;
    vimeo: ICompanyLink;
    website: ICompanyLink;
    whitepaper: ICompanyLink;
    youtube: ICompanyLink;
}

export const CompanyLinksTemplate: ICompanyLinks = {
    website: {
        type: CompanyLinkType.Website,
        url: '',
        icon: '',
        text: 'Website',
    },
    whitepaper: {
        type: CompanyLinkType.Whitepaper,
        url: '',
        icon: '',
        text: 'Whitepaper',
    },
    blog: {
        type: CompanyLinkType.Blog,
        url: '',
        icon: 'comment',
        text: '',
    },
    slack: {
        type: CompanyLinkType.Slack,
        url: '',
        icon: 'slack',
        text: '',
    },
    facebook: {
        type: CompanyLinkType.Facebook,
        url: '',
        icon: 'facebook-square',
        text: '',
    },
    telegram: {
        type: CompanyLinkType.Telegram,
        url: '',
        icon: 'telegram',
        text: '',
    },
    twitter: {
        type: CompanyLinkType.Twitter,
        url: '',
        icon: 'twitter',
        text: '',
    },
    linkedin: {
        type: CompanyLinkType.Linkedin,
        url: '',
        icon: 'linkedin-square',
        text: '',
    },
    reddit: {
        type: CompanyLinkType.Reddit,
        url: '',
        icon: 'reddit-square',
        text: '',
    },
    github: {
        type: CompanyLinkType.Github,
        url: '',
        icon: 'github',
        text: '',
    },
    instagram: {
        type: CompanyLinkType.Instagram,
        url: '',
        icon: 'instagram',
        text: '',
    },
    bitcointalk: {
        type: CompanyLinkType.Bitcointalk,
        url: '',
        icon: 'btc',
        text: '',
    },
    bounty: {
        type: CompanyLinkType.Bounty,
        url: '',
        icon: '',
        text: 'Bounty',
    },
    discord: {
        type: CompanyLinkType.Discord,
        url: '',
        icon: 'discord',
        text: '',
    },
    steemit: {
        type: CompanyLinkType.Steemit,
        url: '',
        icon: '',
        text: 'Steemit',
    },
    vimeo: {
        type: CompanyLinkType.Vimeo,
        url: '',
        icon: 'vimeo',
        text: '',
    },
    youtube: {
        type: CompanyLinkType.Youtube,
        url: '',
        icon: 'youtube',
        text: '',
    },
};


export class CompanyMember {
    constructor(public readonly name: string,
                public readonly role: string,
                public readonly photo: string,
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
