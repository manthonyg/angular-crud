import { Component, OnInit } from '@angular/core';

// needs either templateUrl or template- one or the other and it is required

// template will just be inline (same file) while templateUrl will just use that template (separation of concerns)
@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = true;
  serverCreationStatus: String = 'No server has been created.';
  serverName: any = 'Test Server';
  servers: Array<String> = ['Testserver', 'Testserver 2']


  // constructor is like useEffect for the component itself
  constructor() { 
    setTimeout(() => {
    this.allowNewServer = false
  } , 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    // Change server status
    this.serverCreationStatus = `Server was created. Serve name is ${this.serverName}`;
    // Add the server to servers array
    this.servers.push(this.serverName)
    // Reset server name
    this.serverName = ''
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
