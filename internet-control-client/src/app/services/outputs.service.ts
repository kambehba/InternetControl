import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Output} from '../models/outputModel';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class OutputsService {

  private outputs:Output[]; 
  private output:Output;
  
  constructor(private http:Http) 
  { 
    this.output = new Output('','OFF') 

  }

   getOutput() {
        return this.http.get('http://localhost:3000/api/outputs')
            .map((response: Response) => {
                const outputs = response.json();
                let transformedoutputs: Output[] = [];
                for (let output of outputs) {
                    transformedoutputs.push(new Output(output._id,output.status));
                }
                this.outputs = transformedoutputs;
                return transformedoutputs;
                
            })
             .catch(this.handleError);
   }

   editOutput(output:Output){
     const body = JSON.stringify(output);
    
     const headers = new Headers({'Content-Type':'application/json', 'Accept': 'application/json'});
     return this.http.post('http://localhost:3000/api/outputs',body,{headers:headers})
     .map((response:Response)=>response.json())
     .catch(this.handleError);
     
   }

    private handleError(error:any){
     console.log(error);
     return Observable.throw(error);
   }



}
