export class CompanyBookmark {
    constructor(public readonly id: number,
                public readonly slug: string,
                public readonly readonlycreatedAt: Date) {
    }
}
