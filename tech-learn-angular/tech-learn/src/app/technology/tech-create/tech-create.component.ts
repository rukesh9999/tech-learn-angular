import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tech-create',
  templateUrl: './tech-create.component.html',
  styleUrls: ['./tech-create.component.css']
})
export class TechCreateComponent implements OnInit {

  createTechForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

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
