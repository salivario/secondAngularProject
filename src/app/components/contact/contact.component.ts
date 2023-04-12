import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormSubmitService } from '../../services/form-submit.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myForm: FormGroup;
  constructor(private FormSubmitService: FormSubmitService, private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      message: ['', Validators.maxLength(200),]
    });

  }
  name!: string;
  address!: string;
  email!: string;
  phoneNumber!: string;
  message!: string;
  showPopup = false;
  showForm = true;
  onSubmit() {
    const formData = {
      name: this.name,
      address: this.address,
      email: this.email,
      phone: this.phoneNumber,
      message: this.message
    };
    if (this.myForm.valid) {
      this.FormSubmitService.submitForm(formData).subscribe(
        response => console.log('Form submitted successfully!', response),
        error => console.error('Error submitting form:', error)
        );
        this.name ='';
        this.address ='';
        this.email ='';
        this.phoneNumber = '';
        this.message ='';
        this.showPopup = true;
        this.showForm = false
    }
    
}
}
