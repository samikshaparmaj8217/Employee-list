import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-addleaves',
  templateUrl: './addleaves.component.html',
  styleUrls: ['./addleaves.component.css']
})
export class AddleavesComponent implements OnInit {
  data: any;
  leave: any;
  emp_name: string | null = "0";
  leave_id: string | null = "0";
  leave_type: string = "";
  leave_form: string = "";
  leave_to: string = "";
  reason: string = "";
  
  name : any;
  constructor(private http: ApiService, private cookie: CookieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leave = new FormGroup({
      emp_name: new FormControl(this.emp_name, Validators.compose([Validators.required])),
      leave_id: new FormControl(this.leave_id == "0" ? "" : this.leave_id),
      leave_type: new FormControl(this.leave_type, Validators.compose([Validators.required])),
      leave_form: new FormControl(this.leave_form, Validators.compose([Validators.required])),
      leave_to: new FormControl(this.leave_to, Validators.compose([Validators.required])),
      reason: new FormControl(this.reason, Validators.compose([Validators.required])),


    });

    this.leave_id = this.route.snapshot.paramMap.get("leave_id");
    if (this.leave_id == null)
      this.leave_id = "0";
    if (this.leave_id != "0") {
      this.http.post("leave/register", { data: { id: this.leave_id } }).subscribe((data: any) => {
        this.data = data.data;
        console.log(this.data);
        this.emp_name = data.data.emp_name;
        this.leave_id = data.data.leave_id;
        this.leave_type = data.data.leave_type;
        this.leave_form = data.data.leave_form;
        this.leave_to = data.data.leave_to;
        this.reason = data.data.reason;

      });
    }
    this.list();
  }

  submit(leave: any) {
    console.log(leave)

    let data = { leave_id: 0, emp_name: leave.emp_name, leave_type: leave.leave_type, leave_form: leave.leave_form, leave_to: leave.leave_to, reason: leave.reason }
    console.log({ data });

    this.http.post("leave/register", { data: data }).subscribe((data: any) => {

      console.log(data);


      window.location.href = "/leaves"

    })
  }
  list() {
    this.http.post("employee/list", { data: {} }).subscribe((mydata: any) => {
      console.log(mydata.data.data);
      
      this.name = mydata.data.data;
      ;console.log(this.name);
      
      // console.log(this.emp_name?.length);
      // console.log(mydata.data.data.length);
      // console.log(mydata.data.data[0]);

      // for(let i = 0; i<= mydata.data.data.length; i++ ){
      //   // console.log(mydata.data.data[i]);
      //    this.name = mydata.data.data[i];
         
      
      // }

    });

   
  }
}
