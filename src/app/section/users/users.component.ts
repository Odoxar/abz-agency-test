import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor() { }

  ngOnInit() {
    this.users = users;
  }

}

interface User {
  photo: string,
  name: string,
  position: string,
  email: string,
  phone: string,
}

const users = [
  {
    photo: "user-noah-2x.jpg",
    name: "Noah",
    position: "Leading specialist of the Control Department",
    email: "noah.controldepartment@gmail.com",
    phone: '+38(050) 678 03 24'
  },
  {
    photo: "user-adolph-2x.png",
    name: "Adolph Blaine Charles David Earl",
    position: "Adolph Blaine Charles David Earl",
    email: "adolph.blainecharles-davidearl@example.com",
    phone: '+38 (095) 556 08 45'
  },
  {
    photo: "user-liam-2x.jpg",
    name: "Liamgrievescasey Smith Wiam",
    position: "Lead designer",
    email: "liamgrievescasey@example.com",
    phone: '+38 (050) 273 93 32'
  }
];
