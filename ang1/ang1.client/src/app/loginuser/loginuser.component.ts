import { Component } from '@angular/core';
import { URLService } from '../../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
  ngOnInit() {
  }

  data: any

  constructor(private _ser: URLService, private _router: Router) { }

  user(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.user(data).subscribe(() => {
      alert("Welcome Home");
      this._router.navigate(['/Home'])
    },
      (error) => {
        alert("Nope")
      }
    )
  }

}

