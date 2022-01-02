import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-batchjobsettings-create',
  templateUrl: './batchjobsettings-create.component.html',
  styleUrls: ['./batchjobsettings-create.component.css']
})
export class BatchjobsettingsCreateComponent implements OnInit {
  batchjobsettingsCreateForm:any=FormGroup;
  constructor(private formbuilder:FormBuilder,private techlearnservice:TechLearnServiceService) {
    this.batchjobsettingsCreateForm = this.formbuilder.group({
      portnumber:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[0-9]*'),Validators.minLength(3)])]),
      protocal:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)])]),
      host:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)])]),
      username:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),Validators.minLength(3)])]),
      password:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[A-Za-z0-9_@.]*$'),Validators.minLength(3)])]),
      enableAutoConvertToTechnology:new FormControl('',Validators.required)
    });
   }
  
  ngOnInit(): void {
  }

  saveBatchjobsettings(batchjobsettingsForm:FormGroup)
  {
    if(batchjobsettingsForm.valid)
    {

    }else{
      this.validateFormFields(batchjobsettingsForm);
    }
  }

  ResetBatchjobsettings(batchjobsettingsForm:FormGroup)
  {
     batchjobsettingsForm.reset();
  }


  validateFormFields(batchjobsettings:FormGroup){
     Object.keys(batchjobsettings.controls).forEach((field)=>{
       const control = batchjobsettings.get(field);
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
