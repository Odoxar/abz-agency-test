import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})
export class RelationshipsComponent implements OnInit {
  public items: Relationships[];

  constructor() {

   }

  ngOnInit() {
    this.items = relationships;
  }

}

interface Relationships {
  title: string,
  image: string,
  description: string
}

const relationships: Relationships[] = [
  {
    title: "I'm in love with HTML",
    image: "html",
    description:
      "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."
  },
  {
    title: "CSS is my best friend",
    image: "css",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
  },
  {
    title: "JavaScript is my passion ",
    image: "javascript",
    description:
      "JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
  }
];
