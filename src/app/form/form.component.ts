import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  username:any;
  phonenumber:any;
  Email:any;
  Address:any;
  submit(){
    alert("your order is placed successfully")
  }
}
