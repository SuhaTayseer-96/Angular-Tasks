import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit() {
    this.getServices(); 
  }
  constructor(private _ser: URLService) {
    
  }
  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data :any) => {
      this.servicesArray = data
      console.log(this.servicesArray,"thisServicesArray")
    })
  }
}
