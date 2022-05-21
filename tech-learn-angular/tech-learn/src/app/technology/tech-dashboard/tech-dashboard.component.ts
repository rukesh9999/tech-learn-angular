import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TechnologyStatusResponse } from 'src/app/models/TechnologyStatusResponse';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';
import { DASHBOARD_COUNT } from 'src/app/techlearn.const';

@Component({
  selector: 'app-tech-dashboard',
  templateUrl: './tech-dashboard.component.html',
  styleUrls: ['./tech-dashboard.component.css']
})
export class TechDashboardComponent implements OnInit {

  constructor(private techlearnservice:TechLearnServiceService) { }
  TechnologyStatusResponse:TechnologyStatusResponse = new TechnologyStatusResponse();
  ngOnInit(): void {
     this.getDashBoardCount();
  }

  getDashBoardCount()
  {
    const userId = parseInt(localStorage.getItem('userId'));
    this.techlearnservice.getDashBoardCount(userId).subscribe((response:any)=>{
       this.TechnologyStatusResponse.closedStatusCount=response.closedStatusCount;
       this.TechnologyStatusResponse.inProgressStatusCount=response.inProgressStatusCount;
       this.TechnologyStatusResponse.newStatusCount=response.newStatusCount;
    });
  }
  
}
