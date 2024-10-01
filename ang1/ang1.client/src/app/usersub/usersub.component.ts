import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';

@Component({
  selector: 'app-usersub',
  templateUrl: './usersub.component.html',
  styleUrl: './usersub.component.css'
})
export class UsersubComponent {
  ngOnInit() {
  }

  data: any

  constructor(private _ser: URLService) { }

  addnewUser(data: any) {
    this._ser.addUser(data).subscribe(() => {

    })
  }
}
