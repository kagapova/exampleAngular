import {Company, CompanyLink, CompanyMember, CompanyRoadmapStage} from '../../../models/company';

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
        company.data.rating,
        company.data.icoType,
        company.data.preIcoStart,
        company.data.preIcoEnd,
        company.data.icoStart,
        company.data.icoEnd,
        getLinks(company),
        getTeam(company),
        getRoadmap(company),
        company.data.url,
        company.click,
    );
}


function getLinks(company: CompanyServer): CompanyLink[] {
    return company.data.links.map(link => {
        return new CompanyLink(
            link.linkType,
            link.url
        );
    });
}


function getTeam(company: CompanyServer): CompanyMember[] {
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


function getRoadmap(company: CompanyServer): CompanyRoadmapStage[] {
    return company.data.roadmap.map(stage => {
        let description = stage.description.replace("\r\n", "<br />");
        return new CompanyRoadmapStage(
            stage.name,
            description
        );
    });
}
