import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batchjobsettings-search',
  templateUrl: './batchjobsettings-search.component.html',
  styleUrls: ['./batchjobsettings-search.component.css']
})
export class BatchjobsettingsSearchComponent implements OnInit {
  status=['New','Inprogress','Closed'];

  batchjobsettingsearchForm:any=FormGroup;

  constructor(private formbuilder:FormBuilder) {
    this.batchjobsettingsearchForm = this.formbuilder.group({
      portnumber:new FormControl(''),
      protocal:new FormControl(''),
      host:new FormControl(''),
      username:new FormControl(''),
      password:new FormControl(''),
      enableAutoConvertToTechnology:new FormControl('')
    });
   }

  ngOnInit(): void {

  }

saveBatchJobSettings(batchjobsettingsearchForm:FormGroup)
{
   
}

resetBatchJobSettings(batchjobsettingsearchForm:FormGroup)
{
    batchjobsettingsearchForm.reset();
}

}
