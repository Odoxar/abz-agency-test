import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Link } from '../../model/models.model';
import { MenuService } from '../../service/menu.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  public menu: Link[];
  public query: boolean;

  constructor(private menuService: MenuService, breakpointObserver: BreakpointObserver) {
    this.query = breakpointObserver.isMatched("(max-width: 1023px)");
  }

  ngOnInit() {
    this.menu = menuLinks;
  }

  sidenavClosed() {
    this.menuService.close();
  }
}

const menuLinks: Link[] = [
  { name: "About me", link: "#" },
  { name: "Relationships", link: "#" },
  { name: "Requirements", link: "#" },
  { name: "Users", link: "#" },
  { name: "Sign Up", link: "#" }

];
