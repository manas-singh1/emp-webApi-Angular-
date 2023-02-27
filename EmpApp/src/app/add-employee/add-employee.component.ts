import { EmployeesService } from './../employees.service';
import { Employee } from './../employee-list/models/employee.model';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest:Employee={
    id:0,
    name:'',
    email:'',
    phone:0,
    designation:'',
    salary:0,
  }
 

  constructor(private EmployeesService:EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployeeDetails(){
    this.EmployeesService.addEmployeeDetails(this.addEmployeeRequest)
    .subscribe({
      next:(Employee)=>{this.router.navigate(['employees'])}
    });

  }

}
