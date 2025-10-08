import { ErrorHandler, Injectable, NgZone } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(private zone:NgZone){}
    handleError(error: any): void {
        console.log("error",error)
        this.zone.run(()=>{
            alert("خطا !")
        })
      
    }
}