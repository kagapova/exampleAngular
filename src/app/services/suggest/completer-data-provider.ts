import {SuggestService} from './suggest.service';
import {Subject} from 'rxjs/Subject';
import { CompleterData, CompleterItem } from 'ng2-completer';


export class CompleterDataProvider extends Subject<CompleterItem[]> implements CompleterData  {
    constructor(private suggest: SuggestService) {
        super();

        suggest.suggestions.map(suggestions => {
            const matches: CompleterItem[] = suggestions.map(suggestion => {
                return this.convertToItem(suggestion);
            });

            this.next(matches);
        })
        .subscribe();
    }

    public search(term: string): void {
        this.suggest.updateSuggestions(term);
    }

    public cancel() {
    }

    public convertToItem(data: any): CompleterItem | null {
        if (!data) {
            return null;
        }

        return {
            title: data.text
        } as CompleterItem;
    }
}
