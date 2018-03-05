/**
 * Created by Lukasz on 20/05/2017.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgFilter'
})

export class imgFilterPipe implements PipeTransform{
  transform(objects:any[]): Object[] {
    if (objects) {
      return objects.filter(object => {
        return object.show.image != null && object.show.summary != "";
      })
    }
  }
}
