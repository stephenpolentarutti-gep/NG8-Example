import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  objArray:TestObject[];
  selectedObject:TestObject;
  selectedComponent:string;
  constructor() {
    this.objArray = [{name: 'Textbox', value: 1}, {name: 'Checkbox', value: 2}];
    this.selectedObject = this.objArray[1]; 

   }

  ngOnInit() { 

  }

  @Input() ddlConfig = {
    styles: {      
      width: '150px',
      height: '25px',
      background:'#eee'
    }
  };

  updateSelectedValue(value): void{
    console.log(value);    
    this.selectedComponent = value;
  }

}

interface TestObject {
  name:string;
  value:number;
}
