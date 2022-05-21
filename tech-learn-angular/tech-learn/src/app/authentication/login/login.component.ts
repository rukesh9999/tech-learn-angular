import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any=FormGroup;
  forgotpasswordForm:any=FormGroup;
  existEmail:boolean;
  showspinner:boolean;
  showloginspinner:boolean;
  disabled:boolean;
  invalidlogin:boolean
  constructor(private formBuilder:FormBuilder,
    private techlearnservice:TechLearnServiceService,
    private route:Router,
    private toaster:ToastrService,
    ) { 
    this.loginForm=this.formBuilder.group({
      userName:new FormControl('',[Validators.required,
        Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),
        Validators.minLength(3)])]),
      password:new FormControl('',[Validators.required,
        Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),
        Validators.minLength(3)])])
    });

    this.forgotpasswordForm=this.formBuilder.group({
      email:new FormControl('',[Validators.required,
        Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),
        Validators.minLength(3)])])
     
    });
  }


  ngOnInit(): void {
    this.showspinner=false;
    this.showloginspinner=false;
    this.disabled=false;
  }


  login(loginForm:FormGroup){
   
     if(loginForm.valid)
     {
      this.showloginspinner=true;

        this.techlearnservice.login(loginForm.value).subscribe((response)=>{
          this.showspinner=false;
          console.log(response);
          localStorage.setItem('authenticationToken',response.authenticationToken);
          localStorage.setItem('refreshToken',response.refreshToken);
          localStorage.setItem('userName',response.userName);
          localStorage.setItem('fullName',response.fullName);
          localStorage.setItem('userId',response.userId);
          this.toaster.success('Login success')
          this.route.navigateByUrl('').then(() => {
            window.location.reload();
            })
          this.route.navigate(['technology/tech-dashboard']);
        },(error)=>{
          this.showloginspinner=false;
          this.invalidlogin=true;
             console.log(error);
             
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

  

  validateEmail()
   {
      const email = this.forgotpasswordForm.get('email').value;
      this.techlearnservice.verifyUserExistsORNot(email).subscribe((response)=>{
       if(response=='exists')
       {
         this.existEmail=false;
       }else{
         this.existEmail=true;
       }
        console.log(response);
      });
   }


   sendEmail(forgotpasswordForm:FormGroup)
   {
   
       if(forgotpasswordForm.valid && this.existEmail==false)
       {
        this.showspinner=true;
        this.disabled=true;
        const email = forgotpasswordForm.get('email').value;
        this.techlearnservice.forgotpassword(email).subscribe((response)=>{
          this.showspinner=false;
           document.getElementById('forgotpassword').click();
               if(response!=null){
                this.toaster.success('Email Sent successfully,Please check your Inbox to change password');
               }else{
                 this.toaster.error('Fail to sent Email');
               }

               this.disabled=false;
               this.forgotpasswordForm.controls['email'].setValue('');
         });
       }else{
        this.validateFormFields(forgotpasswordForm);
       }
   }

}
