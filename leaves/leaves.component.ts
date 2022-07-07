import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaves : any ;
  leaves_id : string = "";

  constructor(private http:ApiService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.http.post("leave/list", { data: {} }).subscribe((mydata: any) => {
      this.leaves = mydata.data.data;
      console.log(mydata);

    });
  }

}
