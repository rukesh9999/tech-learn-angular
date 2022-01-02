import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any=FormGroup;

  constructor(private formBuilder:FormBuilder,private techlearnservice:TechLearnServiceService) { 
    this.loginForm=this.formBuilder.group({
      username:new FormControl('',[Validators.required,
        Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),
        Validators.minLength(3)])]),
      password:new FormControl('',[Validators.required,
        Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),
        Validators.minLength(3)])])
    });
  }

  ngOnInit(): void {
  }


  login(loginForm:FormGroup){

     if(loginForm.valid)
     {
        this.techlearnservice.login(loginForm).subscribe((response)=>{
          console.log(response);
          
        });
     }else 
     {
       this.validateFormFields(loginForm);
     }

  }

  validateFormFields(loginForm:FormGroup)
  {
        Object.keys(loginForm.controls).forEach((field)=>{
          const control = loginForm.get(field);
               
          if(control instanceof FormControl)
          {
             control.markAsTouched({
               onlySelf:true
             })
          }else if(control instanceof FormGroup){
            this.validateFormFields(control);
          }

        });
  }



}
