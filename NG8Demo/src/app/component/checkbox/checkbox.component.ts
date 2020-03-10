import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() chkConfig = {
    styles: {      
      width: '25px',
      height: '25px'
    },
    id:'HTMLCompoents',
    text:'Checkbox'
  };
}
