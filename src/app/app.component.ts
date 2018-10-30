import { Component, ViewChild } from '@angular/core';
import { MenuService } from './shared/service/menu.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "abz-agency-test";

  @ViewChild("drawer") public sidenav: MatSidenav;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.setSidenav(this.sidenav);
  }
}

