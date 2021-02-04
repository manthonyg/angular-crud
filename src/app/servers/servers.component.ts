import { Component, OnInit } from '@angular/core';

// needs either templateUrl or template- one or the other and it is required

// template will just be inline (same file) while templateUrl will just use that template (separation of concerns)
@Component({
  selector: 'app-servers',
  template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
