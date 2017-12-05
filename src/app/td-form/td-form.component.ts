import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  name: String =""
  email: String = ""
  phone: String = ""
  pass: String = ""

  constructor() { }

  ngOnInit() {
  }

}
