import { Component } from '@angular/core';

@Component({
  selector: 'greet',
  template: `
    <div>
        <label>Enter your name:</label>
        <input type="text" #txtUserName>
        <input type="button" value="Greeting !" (click)="onButtonClick(txtUserName.value)">
        <h1>
            {{message}}
        
        </h1>
    </div>
  `
})
export class GreetComponent {
  greet = 'You are welcome here!';
  message = '';
  onButtonClick(username) {
   // let name = prompt('What is your name?');
    this.message = `Hi ${username}, ${this.greet}`;
  }
}