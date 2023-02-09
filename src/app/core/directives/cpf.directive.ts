import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.value = this.cpfMask(this.el.nativeElement.value);
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.value = this.unMask(this.el.nativeElement.value);
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target.value;
    this.el.nativeElement.value = this.cpfMask(input);
  }

  cpfMask(value: string): string {
    let maskedValue = '';
    let index = 0;

    for (const char of value) {
      if (!isNaN(parseInt(char, 10))) {
        if (index === 3 || index === 6) {
          maskedValue += '.';
        } else if (index === 9) {
          maskedValue += '-';
        }
        maskedValue += char;
        index++;
      }
    }
    return maskedValue;
  }

  unMask(value: string): string {
    let unmaskedValue = '';
    
    for (const char of value) {
      if (!isNaN(parseInt(char, 10))) {
        unmaskedValue += char;
      }
    }
    return unmaskedValue;
  }

}