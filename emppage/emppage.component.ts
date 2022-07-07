import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CookieService } from '../service/cookie.service';


@Component({
  selector: 'app-emppage',
  templateUrl: './emppage.component.html',
  styleUrls: ['./emppage.component.css']
})
export class EmppageComponent implements OnInit {
  employees : any ;
  emp_id : string = "";

  constructor(private http:ApiService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.http.post("employee/list", { data: {} }).subscribe((mydata: any) => {
      this.employees = mydata.data.data;
      console.log(this.employees);

    });
  }

  delete(emp_id:string): void
  {
    if(confirm("Sure to delete?")){
      let data = { emp_id:emp_id};
      this.http.post("employee/remove",{ data:data}).subscribe((mydata: any) => {
        this.list();
      })
    }
  }
}
