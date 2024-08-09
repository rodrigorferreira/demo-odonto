import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private contactService: ContactService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.contactService.sendMessage(form.value).subscribe(response => {
        console.log('Message sent', response);
      });
    }
  }
}
