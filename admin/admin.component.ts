import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: any = "";
  message = "";

  constructor(private http: ApiService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })

  }


  getdata(mydata: any) {
  
    let data = { data: mydata }
    console.log(data);
    this.http.getAdmin("admin/login", data).subscribe((result: any) => {        
      console.log(result.data[0].password )
      if (result.status == "success") {
         this.cookie.set("usertype", "admin");
         this.cookie.set("username", result.data[0].username);
        //  this.cookie.set("id", result.data.admin.id);
        window.location.href = "/dashboard";
      }
      else {
        this.message = '<div class="alert alert-danger" role="alert">Email or password is wrong.</div>';
      }
    })
    
  }
 
    
  
 
}
