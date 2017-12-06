import { Component, OnInit } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})



export class TdFormComponent implements OnInit {

  result: String
  display: boolean = false 
  
  model = new User("","","")
  

  constructor(
    
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    return this.result = JSON.stringify(this.model)
  }
  displaySubmit(){
    this.display=true
  }

}
