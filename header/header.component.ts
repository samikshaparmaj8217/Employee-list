import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adminloggedin = false;

  constructor(private cookie:CookieService , private route:Router) { }

  ngOnInit(): void {
    if(this.cookie.getcookie("usertype") == "admin")
    {
      this.adminloggedin = true;
    }
  }


  logout(){
    this.cookie.delete("usertype");
    this.cookie.delete("username"),
    // this.cookie.delete("emp_id");
    this.route.navigate([""])
    
  }
}
