import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   loggedIn:boolean;
   fullName:string;
  constructor() { 
    
  }

  ngOnInit(): void {
    const token = localStorage.getItem('authenticationToken');
    if(token!=null && token!=''){
    this.loggedIn=true;
    this.fullName = localStorage.getItem('fullName');

    }
    else{
    this.loggedIn=false;
    }
  }
 
}
