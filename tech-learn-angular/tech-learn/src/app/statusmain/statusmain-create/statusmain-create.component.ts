import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-statusmain-create',
  templateUrl: './statusmain-create.component.html',
  styleUrls: ['./statusmain-create.component.css']
})
export class StatusmainCreateComponent implements OnInit {

  statusmainCreateForm:any=FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.statusmainCreateForm=this.formBuilder.group({
      name:new FormControl(''),
      description:new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  saveStatusMain(statusmainCreateForm:FormGroup)
  {

  }

  resetStatusMain(statusmainCreateForm:FormGroup)
  {
    statusmainCreateForm.reset();
  }


}
