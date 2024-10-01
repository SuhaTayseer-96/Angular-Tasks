import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  ngOnInit() {
    this.getleen()
  }

  constructor(private _ser: URLService) {

  }

  subscriptionArry: any
  getleen() {
    this._ser.getsubSubscriptions().subscribe((data) => {
      this.subscriptionArry = data
    })
  }

  data = {
   "userId": 1,
   "subscriptionId": 0,
   "subServiceId": 1
 }

 addusersuc(id: any) {
   this.data.subscriptionId=id
   this._ser.addusersub(this.data).subscribe(() => {
     alert("user subscription added successfilly")
   })
 }
}
