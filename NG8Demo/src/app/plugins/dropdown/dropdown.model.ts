export class DropdownItemModel {
    text: string;
    value: string;

    constructor(displayText: string, value: string) {
        this.text = displayText;
        this.value = value;
    }
}

export class DropdownModel {
    displayLabel : string;
    dropdownItems : DropdownItemModel [];

    constructor() {}
}
