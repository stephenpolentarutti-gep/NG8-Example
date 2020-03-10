import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Input() textConfig = {
    styles: {      
      backgroundColor: '#eee',
      color: '#aaa',
      fontFamily: 'sans-serif',
      fontSize: '20px',
      borderRadius: '10px'
    },
    text: 'Text box',
    maxlength : 10,
    textClick: 'onClickEventReceived();'
  };

  

  onClickEventReceived() {
    console.log('dfg');
  }

}
