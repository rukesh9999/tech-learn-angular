import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';
import { confirmpasswordvalidator } from './confirmpasswordvalidator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
   forgotPasswordForm:any=FormGroup;
   existEmail:boolean;
   token:string;
  constructor(private fb:FormBuilder,
    private techlearnservice:TechLearnServiceService,
    private toaster: ToastrService,
    private act_route: ActivatedRoute,
    private route:Router) {  
   }

  ngOnInit(): void {
    this.forgotPasswordForm=this.fb.group({
      password:new FormControl('',[Validators.required,
        Validators.compose([Validators.minLength(9)])]),
      confirmpassword:new FormControl('',[Validators.required])
    },{Validator:[confirmpasswordvalidator]});


      this.act_route.queryParams.subscribe((params)=>{
        this.token=params.token;
        
      })
  }


  // validateEmail()
  // {
  //    const email = this.forgotPasswordForm.get('email').value;
  //    this.techlearnservice.verifyUserExistsORNot(email).subscribe((response)=>{
  //     if(response=='exists')
  //     {
  //       this.forgotPasswordForm=true;
  //     }else{
  //       this.existEmail=false;
  //     }
  //      console.log(response);
  //    });
  // }


  changepassword(forgotPasswordForm:FormGroup)
  {

    if(forgotPasswordForm.valid)
    {
      const email:string = forgotPasswordForm.get('confirmpassword').value;
      this.techlearnservice.changepassword(email,this.token).subscribe((response)=>{

        if(response!=null){
        this.toaster.success('Password Updated Successfully');
        this.route.navigate(['login']);
        }
        else{
        this.toaster.error('Fail to Update Password');
         }
      })
    }else{
      this.validateFormFields(forgotPasswordForm);
    }
  }



  validateFormFields(forgotPasswordForm:FormGroup)
  {
      Object.keys(forgotPasswordForm.controls).forEach((field)=>{
         const control =   forgotPasswordForm.get(field);
         if(control instanceof FormControl)
         {
           control.markAsTouched({
             onlySelf:true
           });
         }else if(control instanceof FormGroup){
           this.validateFormFields(control);
         }
      });
  }


}
