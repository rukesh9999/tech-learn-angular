import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any=FormGroup;
  constructor(private formBuilder:FormBuilder,
    private techlearnservice:TechLearnServiceService,
    private toastr: ToastrService) {
    this.registerForm = this.formBuilder.group({
        firstName:new FormControl('',[Validators.required,
          Validators.compose([Validators.pattern('[a-zA-Z]*'),
          Validators.minLength(3)])]),
        lastName:new FormControl('',[Validators.required,
          Validators.compose([Validators.pattern('[a-zA-Z]*'),
          Validators.minLength(3)])]),
        email:new FormControl('',[Validators.required,
          Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'),
          Validators.minLength(3)])])
    });
   }

  ngOnInit(): void {
    
  }


  register(registerForm:FormGroup){
    
     if(registerForm.valid)
     {
       this.techlearnservice.register(registerForm.value).subscribe((response)=>{
         console.log(response);
         this.toastr.success('Registered successfully');
       },(error)=>{
         this.toastr.error('Fail to Register');
       });   
     }else
     {
        this.validateFormFields(registerForm);
     }
  }


  validateFormFields(registerForm:FormGroup)
  {
    Object.keys(registerForm.controls).forEach((field)=>{
      const control =   registerForm.get(field);
      if(control instanceof FormControl)
      {
         control.markAsTouched({
           onlySelf:true
         });
      }else if(control instanceof FormGroup){
          this.validateFormFields(control);
      }
    })
  }


}
