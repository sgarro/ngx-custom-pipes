import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "replaceLast"
})
export class StringReplaceLastPipe implements PipeTransform {
  transform(value: String,replaceChar: string, replaceWith?: string) {
    const re = new RegExp("[" + replaceChar + "]$", "g");
    return value.replace(re, replaceWith ? replaceWith: "");
  }
}