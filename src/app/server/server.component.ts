import { Component } from "@angular/core"


// Decorator part of angular
@Component({
selector: 'app-server',
templateUrl: "./server.component.html",
})

// Typescript class declaration;

export class ServerComponent {
id: Number = Math.floor(Math.random() * 9999) + 1  
isOnline: Boolean = false

getServerStatus(): Boolean {
  return this.isOnline
}

toggleStatus(): void {
  this.isOnline = ! this.isOnline
}

getColor(): String {
  if (this.isOnline) {
    return "green"
  }
  return "red"
  }
}