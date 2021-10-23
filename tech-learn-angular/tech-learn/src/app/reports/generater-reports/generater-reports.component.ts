import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generater-reports',
  templateUrl: './generater-reports.component.html',
  styleUrls: ['./generater-reports.component.css']
})
export class GeneraterReportsComponent implements OnInit {
 
  status=['New','Inprogress','Closed'];
  constructor() { }

  ngOnInit(): void {
  }

}
