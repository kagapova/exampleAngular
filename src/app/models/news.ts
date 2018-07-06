export class News {
    constructor(public readonly title: string,
                public readonly text: string,
                public readonly publishedAt: Date,
                public readonly url: string,
                public readonly imageUrl: string,
                public readonly source: string,
                public readonly analyticalURL: string) {
    }

    get humanDate(): string {
        const now = new Date();

        const diffHours = Math.ceil( (now.getTime() - this.publishedAt.getTime()) / (3600 * 1000));

        if (diffHours < 1) {
            return 'Just now';
        }

        if (diffHours < 2) {
            return diffHours + ' hour ago';
        }

        if (diffHours < 24) {
            return diffHours + ' hours ago';
        }

        return d3.time.format('%B %d')(this.publishedAt);
    }
}
