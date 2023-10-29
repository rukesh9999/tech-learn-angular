import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Technology } from 'src/app/models/Technology';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';
export interface PeriodicElement {
  code: string;
  name: string;
  description: String;
  createdDate: Date;
  modifiedDate: Date;
  expectedCompletionDate:Date;
  totalTimeToComplete: string;
  statusName:string;
  CreatedBy:string;
}



@Component({
  selector: 'app-tech-search',
  templateUrl: './tech-search.component.html',
  styleUrls: ['./tech-search.component.css']
})
export class TechSearchComponent implements OnInit {
  
  status=['New','Inprogress','Closed'];
  searchTechForm:any=FormGroup;
  technologies:Technology[]=[];
  constructor(private formBuilder:FormBuilder,
    private techlearnservice:TechLearnServiceService) {

    this.searchTechForm=this.formBuilder.group({
      name:new FormControl(''),
      code:new FormControl(''),
      fromdate:new FormControl(''),
      toDate:new FormControl(''),
      status:new FormControl(''),
      description:new FormControl(''),
    });
   }
  
  ngOnInit(): void {
    this.searchTechnology(this.searchTechForm);
  }
  
  searchTechnology(searchTechForm:FormControl)
  {
    const searchTechnology = searchTechForm.value;
    this.techlearnservice.searchTechnology(searchTechnology).subscribe((res)=>{
        console.log(res);
        this.technologies=res;
    });
  }

  resetTechnology(searchTechForm:FormControl){
    searchTechForm.reset();
  }
  

 
}
