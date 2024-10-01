import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  ngOnInit() {
  }

  data: any

  constructor(private _ser: URLService, private _router: Router) { }

  addnewUser(data: any) {
    var form = new FormData();

    for (let key in data) {

      form.append(key, data[key])
    }

    this._ser.addUser(form).subscribe(() => {
      alert("user added");
      this._router.navigate(['/Login'])
    },
      (error) => {
        alert("aaaaaaaaaaaa")
      }
      )
}

}
