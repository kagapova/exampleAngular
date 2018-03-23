export class WebResult {
    public readonly type: string = 'web';

    constructor(public readonly title: string,
                public readonly description: string,
                public readonly imageURL: string,
                public readonly url: string,
                public readonly analyticalURL: string) {
    }
}
