import { Component, OnInit, Input } from '@angular/core';
import { DropdownItemModel, DropdownModel } from '../dropdown.model'
import { DropdownService } from '../dropdown.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  dropdownModel: DropdownModel;
  dropdownItems: DropdownItemModel[];

  constructor(private dropdownService : DropdownService) {
    // This initialization is only for demo purpose
    this.dropdownModel = new DropdownModel();
    this.dropdownItems = [];
    this.dropdownModel.displayLabel = 'Select Control To Be Displayed:';
    this.dropdownItems.push(new DropdownItemModel('Textbox', 'textbox'));
    this.dropdownItems.push(new DropdownItemModel('Checkbox', 'checkbox'));
    this.dropdownItems.push(new DropdownItemModel('Table', 'table'));
    this.dropdownModel.dropdownItems = this.dropdownItems;
    this.dropdownService.$selectionValue = new BehaviorSubject<DropdownItemModel>(this.dropdownItems[0]);
  }

  ngOnInit(): void {
  }

  onValueChange(selection: DropdownItemModel) {
    
    this.dropdownService.$selectionValue.next(selection);
  }

}
