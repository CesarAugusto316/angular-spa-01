import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {
    // When the component first loads like http request
    console.log('first time load');
  }

  onToggleTask() {
    console.log('toggle from header');
  }
}
