import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform {
    transform(data : any[], attrName : string, desc : boolean) : any[] {
        if(!attrName) return data;
        let comparer = getComaparerFor(attrName);
        data.sort(comparer);
        if(desc) data.reverse();
        return data;
    }
}

interface IComparer {
        (item1 : any, item2 : any) : number
    }

    function getComaparerFor(attrName : string) : IComparer {
        return function(item1 : any, item2 : any) : number {
            if(item1[attrName] < item2[attrName]) return -1;
            if(item1[attrName] > item2[attrName]) return 1;
            return 0;
        }
    }