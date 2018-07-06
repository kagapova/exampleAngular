export class TokenBookmark {
    constructor(readonly id: number,
                readonly cmcSlug: string,
                readonly name: string,
                readonly imageUrl: string,
                readonly createdAt: Date) {
    }
}
