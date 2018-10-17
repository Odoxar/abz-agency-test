import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"]
})
export class IconComponent implements OnInit, AfterContentInit {
  @Input()
  content: string;
  @ViewChild("container")
  s: ElementRef;

  constructor() {}

  ngOnInit() {
    //console.log(this.content);
  }

  ngAfterContentInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.s.nativeElement.innerHTML = this.content;
  }
}
