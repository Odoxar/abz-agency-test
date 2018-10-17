import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
  public items;
  public dropdownState: boolean = false;
  public inputValue: string = "";
  constructor() {}

  ngOnInit() {
    this.items = dropdownList;
  }

  dropdownToggle(): void {
    this.dropdownState = !this.dropdownState;
  }

  selectedItem(item): void {
    this.inputValue = item.value;
  }

  highlightItem(item): boolean {
    return this.inputValue === item.value;
  }

  dropdownOutside() {
    this.dropdownState = false;

  };
}

const dropdownList = [
  {
    key: "item1",
    value: "Banana"
  },
  {
    key: "item2",
    value: "Mango"
  },
  {
    key: "item3",
    value: "Kiwi"
  }
];
