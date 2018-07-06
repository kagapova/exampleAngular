import { cloneDeep, filter, toArray } from 'lodash-es';
import {
    Company,
    CompanyMember,
    CompanyRoadmapStage,
    ICompanyLinks,
    CompanyLinksTemplate,
    ICompanyLink,
} from '@app/models/company';

export function parseCompany(company: CompanyServer): Company {
    if (company.source !== 'trackico') {
        return null;
    }

    return new Company(
        company.data.title,
        company.data.description,
        company.data.image,
        company.data.country,
        company.data.category,
        company.data.chain,
        getRating(company),
        company.data.icoType,
        company.data.preIcoStart,
        company.data.preIcoEnd,
        company.data.icoStart,
        company.data.icoEnd,
        getLinks(company),
        getTeam(company),
        getRoadmap(company),
        company.data.url,
        company.slug,
        company.bookmarkId,
        company.click,
    );
}

function getRating(company: CompanyServer): string {
    const rating = Number(company.data.rating);
    const outOf = 5;
    return isNaN(rating) ? '0%' : `${(rating / outOf) * 100}%`;
}

function getLinks(company: CompanyServer): ICompanyLink[] {
    const companyLinks: ICompanyLinks = cloneDeep(CompanyLinksTemplate);
    company.data.links.forEach(link => {
        if (companyLinks[link.linkType]) {
            companyLinks[link.linkType].url = link.url;
        }
    });

    return toArray(filter(companyLinks, 'url'));
}

function getTeam(company: CompanyServer): CompanyMember[] {
    if (company.data.title === 'BitClave') {
        return getTeamBitClave(company);
    }
    return company.data.team.map(member => {
        return new CompanyMember(
            member.name,
            member.role,
            member.photo,
            member.linkedinUrl,
            member.twitterUrl,
            member.facebookUrl
        );
    });
}

function getTeamBitClave(company: CompanyServer): CompanyMember[] {
    const team: any = filter(company.data.team, member => {
        if (member.role === 'CEO' ||
            member.role === 'CTO' ||
            member.role === 'Data Scientist') {
            return member;
        }
    });

    const b = team[2];
    team[2] = team[1];
    team[1] = b;

    return team.map(member => {
        return new CompanyMember(
            member.name,
            member.role,
            member.photo,
            member.linkedinUrl,
            member.twitterUrl,
            member.facebookUrl
        );
    });
}

function getRoadmap(company: CompanyServer): CompanyRoadmapStage[] {
    return company.data.roadmap.map(stage => {
        const description = stage.description.replace('\r\n', '<br />');
        return new CompanyRoadmapStage(stage.name, description);
    });
}
