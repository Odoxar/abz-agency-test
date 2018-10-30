import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public item;
  public queryLogin: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    this.queryLogin = breakpointObserver.isMatched("(max-width: 1023px)");
  }

  ngOnInit() {
    this.item = avatar;
  }
}

const avatar = {
  image: 'user-superstar-2x.jpg',
  name: "Superstar",
  email: "Superstar@gmail.com"
};
