import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
    name : 'countClosed'
})
export class CountClosedPipe implements PipeTransform {

    transform(data : any[]) : number {
        return data.reduce<number>((prevResult:number, bug:IBug) => bug.isClosed ? ++prevResult : prevResult, 0);
    }
}