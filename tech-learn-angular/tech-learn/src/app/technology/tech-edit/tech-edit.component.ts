import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Technology } from 'src/app/models/Technology';
import { TechLearnServiceService } from 'src/app/tech-learn-service.service';

@Component({
  selector: 'app-tech-edit',
  templateUrl: './tech-edit.component.html',
  styleUrls: ['./tech-edit.component.css']
})
export class TechEditComponent implements OnInit {

   editTechForm:FormGroup;
   technology:Technology = new Technology();
  constructor(private formBuilder:FormBuilder,
    private technology_service:TechLearnServiceService,
    private toaster_service:ToastrService,
    private router:Router,private activate_route:ActivatedRoute) { 

     this.editTechForm = this.formBuilder.group({
       technologyId:new FormControl(),
       name : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('[a-zA-z ]*'),Validators.minLength(3)])]),
       description:new FormControl('',[Validators.required,Validators.minLength(3)]),
       expectedCompletionDate:new FormControl('',Validators.required),
       comment:new FormControl('',[Validators.required,Validators.minLength(3)])
     });
     
  }

  ngOnInit(): void {
  const technologyId:number =  parseInt(this.activate_route.snapshot
                                  .paramMap.get('technologyId'));
       
       console.log('id ....'+technologyId);
       this.activate_route.queryParams.subscribe(()=>{
          this.editTechnology(technologyId);
       });
   

  }


  editTechnology(technologyId:number){

    this.technology_service.editTechnology(technologyId).subscribe((technology)=>{
              console.log(technology);
              this.editTechForm.controls.technologyId.setValue(technology.technologyId);
              this.editTechForm.controls.name.setValue(technology.name);
              this.editTechForm.controls.description.setValue(technology.description);
              this.editTechForm.controls.expectedCompletionDate.setValue(technology.expectedCompletionDate);
    });
  }


  updateTechForm(updateTechForm:FormGroup){
  
     if(updateTechForm.valid){

      const updateTechnology:any = updateTechForm.value;
      this.technology_service.updateTechnology(updateTechnology).subscribe((response)=>{
        if(response!=null && response!=''){
          this.toaster_service.success('Technology Updated Successfully !!');
        }else{
          this.toaster_service.error('Fail to Update Technology');
        }

        this.router.navigate(['technology/tech-search']);

      });

     }else{
       this.validateFormFields(updateTechForm);
     }

  }

  validateFormFields(updateTechForm){

    Object.keys(updateTechForm.controls).forEach((field)=>{
      const control = updateTechForm.get(field);  
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