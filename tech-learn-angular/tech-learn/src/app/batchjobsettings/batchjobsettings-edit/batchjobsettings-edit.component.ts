import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batchjobsettings-edit',
  templateUrl: './batchjobsettings-edit.component.html',
  styleUrls: ['./batchjobsettings-edit.component.css']
})
export class BatchjobsettingsEditComponent implements OnInit {

  batchjobsettingseditForm:any=FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    this.batchjobsettingseditForm = this.formbuilder.group({
      portnumber:new FormControl(''),
      protocal:new FormControl(''),
      host:new FormControl(''),
      username:new FormControl(''),
      password:new FormControl(''),
      enableAutoConvertToTechnology:new FormControl('')
    });
  }

  
  ngOnInit(): void {
  }

 
}
