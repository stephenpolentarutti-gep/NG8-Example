import { Component,ComponentFactoryResolver, OnInit,Input, ViewChild, ViewContainerRef, TemplateRef, ElementRef, Output, EventEmitter } from '@angular/core';
import {TextboxcomponentComponent} from '../../components/textbox/textboxcomponent/textboxcomponent.component';
import {TablecomponentComponent} from '../../components/table/tablecomponent/tablecomponent.component';

@Component({
  selector: 'app-demopagecomponent',
  templateUrl: './demopagecomponent.component.html',
  styleUrls: ['./demopagecomponent.component.css']
})
export class DemopagecomponentComponent implements OnInit {

  @ViewChild('TPRMContainer', { read: ViewContainerRef , static:true}) tprmContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public Type:any=[];
  ngOnInit() {
    this.Type = [{
      Id: 1,
      Value: 'text',
    },
    {
      Id: 2,
      Value: 'table',
    }]
  }
  setValues(type) {
          switch(type)
          {
            case "text":
              this.tprmContainerRef.clear();
              this.tprmContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(TextboxcomponentComponent));
              break;
              case "table":
                this.tprmContainerRef.clear();
                  this.tprmContainerRef.createComponent( this.componentFactoryResolver.resolveComponentFactory(TablecomponentComponent));
              break;
          }
            
      }
}
