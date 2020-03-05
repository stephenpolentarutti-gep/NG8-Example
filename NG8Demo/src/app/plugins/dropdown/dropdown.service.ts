import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DropdownItemModel } from './dropdown.model'

@Injectable({
    providedIn: 'root'
})
export class DropdownService {
    public $selectionValue : BehaviorSubject <DropdownItemModel>;

    constructor () {
        
    }
}