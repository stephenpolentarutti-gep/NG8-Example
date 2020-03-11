import { Directive, ViewContainerRef } from '@angular/core';
 
@Directive({
  selector: '[demo-host]',
})
export class DemoDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}