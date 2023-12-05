import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  successAlertVisible = false;
  failAlertVisible = false;

  showSuceessAlert(){
    this.successAlertVisible = true;
  }
  showFailAlert(){
    this.failAlertVisible = true;
  }


  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_nntpdjf', 'template_q40xd6a', e.target as HTMLFormElement, 'b3PshBJFx5weElKmE')
      .then((result: EmailJSResponseStatus) => {
        this.showSuceessAlert();
      }, (error) => {
        console.log(error.text);
        this.showFailAlert()
        
        
      });
  }
 
}
