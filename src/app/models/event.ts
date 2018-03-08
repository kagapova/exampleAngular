export class Event {
    constructor(public readonly company: string,
                public readonly date: string,
                public readonly title: string,
                public readonly description: string,
                public readonly proof: string,
                public readonly source: string,
                public readonly token: string) {
    }
}
