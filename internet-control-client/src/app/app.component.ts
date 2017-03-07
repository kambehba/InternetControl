import { Component } from '@angular/core';
import {OutputsService} from './services/outputs.service'
import {Output} from './models/outputModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private outputs:Output[];
  constructor(private ts:OutputsService)
  {
       
       this.ts.getOutput().subscribe(
          (data:Output[]) => {this.outputs = data});
  }
  
    OnButtonClicked()
    {
      this.outputs[0].status = 'ON'
      this.ts.editOutput(this.outputs[0]).subscribe(
          data=>{console.log(data);},
          error => console.log(error)
          );
    }

    OFFButtonClicked()
    {
      this.outputs[0].status = 'OFF'
      this.ts.editOutput(this.outputs[0]).subscribe(
          data=>{console.log(data);},
          error => console.log(error)
          );
    }



}
