import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generater-reports',
  templateUrl: './generater-reports.component.html',
  styleUrls: ['./generater-reports.component.css']
})
export class GeneraterReportsComponent implements OnInit {
  techReportForm:any=FormControl;

  status=['New','Inprogress','Closed'];
  constructor(private formBuilder:FormBuilder) {
    this.techReportForm = this.formBuilder.group({
      fromDate:new FormControl(''),
      toDate : new FormControl(''),
      status : new FormControl('')
    });
   }
   

  ngOnInit(): void {
  }

  generateTechReport(techReportForm)
  {
   
  }

  resetTechReportForm(techReportForm:FormControl){
    techReportForm.reset();
  }



}
