/**
 * Created by Lukasz on 20/05/2017.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getShow'
})

export class showPipe implements PipeTransform{
    transform(objects:any[], id: number): any {
        if (objects) {
            return objects.filter(object => {
                return object.show.id == id;
            })
        }
    }
}
