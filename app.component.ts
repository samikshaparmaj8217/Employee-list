import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't-emp-task';
  constructor(private router: Router){}
  ngOnInit(){
    // console.log(this.router.url);
    // console.log(window.location.href);
  }
}
