import { Component } from "@angular/core";

@Component({
    selector: 'app-inputbox',
    templateUrl: './inputbox.component.html'
})

export class InputBoxComponent  {
    allowUsernameInput = false;
    usernameCreationStatus = 'No Username Input'
    userName = '';


onCreateUsername() {
    this.usernameCreationStatus = 'Your username is ' + this.userName
}
}