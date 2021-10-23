import { Component, OnInit, ViewChild } from '@angular/core';
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


const ELEMENT_DATA: PeriodicElement[] = [
  {code: "wcd12r", name:'angular', description: 'angular', createdDate:new Date(),modifiedDate: new Date(), expectedCompletionDate:new Date(),totalTimeToComplete:'1 month',statusName:'new',CreatedBy:'rukesh'},
  {code: "cf6ss2", name:'rest api', description: 'rest api', createdDate:new Date(),modifiedDate: new Date(), expectedCompletionDate:new Date(),totalTimeToComplete:'3 month',statusName:'inprogress',CreatedBy:'rukesh'},
  {code: "edr2h6", name:'react js', description: 'react js', createdDate:new Date(),modifiedDate: new Date(), expectedCompletionDate:new Date(),totalTimeToComplete:'1 year 1 month',statusName:'new',CreatedBy:'rukesh'},
  {code: "mn3sd4", name:'node js', description: 'node js', createdDate:new Date(),modifiedDate: new Date(), expectedCompletionDate:new Date(),totalTimeToComplete:'10 days',statusName:'new',CreatedBy:'rukesh'},
  {code: "ml9j7g", name:'spring', description: 'spring', createdDate:new Date(),modifiedDate: new Date(), expectedCompletionDate:new Date(),totalTimeToComplete:'1 month',statusName:'closed',CreatedBy:'rukesh'},

];
@Component({
  selector: 'app-tech-search',
  templateUrl: './tech-search.component.html',
  styleUrls: ['./tech-search.component.css']
})
export class TechSearchComponent implements OnInit {
  title = 'angular-dataTable-Sorting';
  displayedColumns: string[] = ['code', 'name', 'description', 'createdDate','modifiedDate','expectedCompletionDate','totalTimeToComplete','statusName','CreatedBy'  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  status=['New','Inprogress','Closed'];

  constructor() { }
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  

  logData(row)
  {
    console.log(row);
  }
}
