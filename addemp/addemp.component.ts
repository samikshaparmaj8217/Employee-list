import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CookieService } from '../service/cookie.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  data: any;
  employee: any;
  emp_id : string | null = "0";
  emp_name : string = "";
  emp_salary : string = "";
  emp_joining_date: string = ""

  constructor(private http:ApiService,private cookie:CookieService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employee = new FormGroup({
      emp_id: new FormControl(this.emp_id == "0" ? "" : this.emp_id),
      emp_name: new FormControl(this.emp_name, Validators.compose([Validators.required])),
      emp_salary: new FormControl(this.emp_salary, Validators.compose([Validators.required])),
      emp_joining_date: new FormControl(this.emp_joining_date, Validators.compose([Validators.required])),

    });
    this.emp_id = this.route.snapshot.paramMap.get("emp_id");
    if(this.emp_id == null)
      this.emp_id = "0";
    if(this.emp_id != "0"){
      this.http.post("employee/register", {data: {id:this.emp_id} }).subscribe((data:any) =>{
        this.data = data.data;
        console.log(this.data);
        this.emp_id = data.data.emp_id;
        this.emp_name = data.data.emp_name;
        this.emp_salary = data.data.emp_salary;
        this.emp_joining_date = data.data.emp_joining_date;
        
      });
    }

  }
  submit(employee : any){
    console.log(employee)
    
    let data = {id:0, emp_name: employee.emp_name, emp_salary: employee.emp_salary, emp_joining_date: employee.emp_joining_date }
    console.log({data});
    
    this.http.post("employee/register", {data : data}).subscribe((data:any) =>{
      
      console.log(data);
      
      
      window.location.href = "/emppage"
    
    })
    
  }

}
