import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statusmain-search',
  templateUrl: './statusmain-search.component.html',
  styleUrls: ['./statusmain-search.component.css']
})
export class StatusmainSearchComponent implements OnInit {
  
  status = ['Active','Inactive'];
  constructor() { }

  ngOnInit(): void {
  }

}
