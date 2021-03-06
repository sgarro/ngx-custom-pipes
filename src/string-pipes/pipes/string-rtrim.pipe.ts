import { Pipe, PipeTransform } from '@angular/core';
/**
 * trims off the chars from right side
 */
@Pipe({
  name: "rtrim"
})
export class StringRtrimPipe implements PipeTransform {
  public transform(value: string, chars?: string) {
    if (!chars || chars.length === 0) {
      return value.trim();
    }
    const re = new RegExp("[" + chars + "]+$", "g");
    return value.replace(re, "").trim();
  }
}
