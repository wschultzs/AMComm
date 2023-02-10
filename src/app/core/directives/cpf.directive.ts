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
    this.el.nativeElement.value = this.removerMascara(this.el.nativeElement.value);
  }

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target.value;
    this.el.nativeElement.value = this.cpfMask(input);
  }

  public cpfMask(value: string): string {
    let mascara = '';
    let index = 0;

    for (const char of value) {
      if (!isNaN(parseInt(char, 10))) {
        if (index === 3 || index === 6) {
          mascara += '.';
        } else if (index === 9) {
          mascara += '-';
        }
        mascara += char;
        index++;
      }
    }
    return mascara;
  }

  private removerMascara(value: string): string {
    let valorSemMascara = '';
    
    for (const char of value) {
      if (!isNaN(parseInt(char, 10))) {
        valorSemMascara += char;
      }
    }
    return valorSemMascara;
  }

}