import { Component, OnInit, ComponentFactoryResolver, ViewChild, ComponentFactory } from '@angular/core';
import { DemoDirective } from './demopage.directive';
import { TextboxComponent } from '../component/textbox/textbox.component';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';

 
@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent implements OnInit {
 
  @ViewChild(DemoDirective, {static: true}) demoHost: DemoDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
 
  ngOnInit() {
  }

  public updateSelectedValue (value) {

    console.log(value);
 
    if(value != '')
    {
      var componentToLoad = null;
      
      if (value == 'Textbox')
        {
          componentToLoad = TextboxComponent;
        }
        else if (value == 'Checkbox')
        {
          componentToLoad = CheckboxComponent;
        }
 
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
        const viewContainerRef = this.demoHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
    }
 }
 
}