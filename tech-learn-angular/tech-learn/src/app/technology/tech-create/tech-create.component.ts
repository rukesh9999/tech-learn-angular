import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-tech-create',
  templateUrl: './tech-create.component.html',
  styleUrls: ['./tech-create.component.css']
})
export class TechCreateComponent implements OnInit {

  createTechForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private technology_service:TechLearnServiceService,
    private toaster_service:ToastrService,
    private route:Router) { }

  ngOnInit(): void {
   
    this.createTechForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required,
      Validators.compose([Validators.pattern('[a-zA-Z]*'),Validators.minLength(3)])]),
      description:new FormControl('',[Validators.required]),
      expectedCompletionDate:new FormControl('',[Validators.required])
    });

  }


 saveTechForm(createTechForm:FormGroup)
 {
     if(createTechForm.valid)
     {
       const technology:any = createTechForm.value;
       this.technology_service.saveTechnology(technology).subscribe((response)=>{
         if(response!=null && response!='')
         {
           this.toaster_service.success('Technology saved success');
         }else{
          this.toaster_service.success('Fail to save Technology');
         }
         this.route.navigate(['technology/tech-search']);
       })
     }else{
       this.validateFormFields(createTechForm)
     }
 }

 resetTechForm(createTechForm:FormGroup)
 {
   createTechForm.reset();
 }

  
 validateFormFields(createTechForm:FormGroup)
 {
    Object.keys(createTechForm.controls).forEach((field)=>{
      const control =  createTechForm.get(field);
      if(control instanceof FormControl){
        control.markAsTouched({
          onlySelf:true
        });
      }else if(control instanceof FormGroup)
      {
           this.validateFormFields(control);
      }
      
    });
 }

}
