import { Pipe, PipeTransform } from "@angular/core";

Array.prototype['reIndexOf'] = function (rx) {
      for (var i in this) {
          if (this[i].toString().match(rx)) {
              return i;
          }
      }
      return -1;
  };

/**
 * filters an array based on searctext
 */
@Pipe({
  name: "filterByLetter"
})
export class ArrayFilterLetterPipe implements PipeTransform {
  public transform(array: any[], searchText?: string, keyName?: string) {
    if (!array || !searchText || !Array.isArray(array)) {
      return array;
    }
    if (typeof array[0] === 'string') {

      // return array.filter((item) => false);
    }
    // filter array, items which match and return true will be
    // kept, false will be filtered out
    if (!keyName) {
      return array.filter((item: any) => {
        for (const key in item) {
          if (typeof item[key] !== "object" && item[key].toString().match(/^B/)!=null) {
            return true;
          }
        }
        return false;
      });
    } else {
      return array.filter((item: any) => {
        if (typeof item[keyName] !== "object" && item[keyName].toString().toLowerCase().match(new RegExp(searchText))!=null) {
          return true;
        }
        return false;
      });
    }

  }



}
