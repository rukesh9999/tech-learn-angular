import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchjobsettings-search',
  templateUrl: './batchjobsettings-search.component.html',
  styleUrls: ['./batchjobsettings-search.component.css']
})
export class BatchjobsettingsSearchComponent implements OnInit {
  status=['New','Inprogress','Closed'];
  constructor() { }

  ngOnInit(): void {
  }

}
