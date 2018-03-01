import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'favicon'
})
export class FaviconPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        let url = value.split('/')[2];
        return `//${url}/favicon.ico`;
    }
}
