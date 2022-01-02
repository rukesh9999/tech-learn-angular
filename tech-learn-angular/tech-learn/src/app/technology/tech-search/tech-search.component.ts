import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule  } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(private formBuilder:FormBuilder) {

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
    
  }
  
  searchTechnology(searchTechForm:FormControl)
  {

  }

  resetTechnology(searchTechForm:FormControl){
    searchTechForm.reset();
  }
  

 
}
