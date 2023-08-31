import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-angularjs';
  private url: string = "http://localhost:4001/hello"

  ngOnInit(): void {
    fetch(this.url)
      .then(res => res.json())
      .then(jsonObj => this.title = jsonObj.message);
  }
}
