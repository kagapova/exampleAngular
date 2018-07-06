import { Pipe, PipeTransform } from '@angular/core';
import { getFaviconUrl } from '@app/services/search/categories/web';

@Pipe({
    name: 'favicon'
})
export class FaviconPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        return getFaviconUrl(value);
    }
}
