import { EmployeesService } from './../employees.service';
import { EmployeeListComponent } from './../employee-list/employee-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails:Employee={
    id:0,
    name:'',
    email:'',
    phone:0,
    designation:'',
    salary:0,
  }

  constructor(private route:ActivatedRoute,private EmployeesService:EmployeesService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id = params.get('id');
        if (id){
          this.EmployeesService.getEmployee(id)
          .subscribe({
            next:(response)=>{
              this.employeeDetails= response;

            }
          })

        }
      }
    })
  }
  updateEmployee(){
    this.EmployeesService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['employees']);
      }
    });


  }

  deleteEmployee(id:number){
    this.EmployeesService.deleteEmployee(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['employees']);
      }
    });
  }

}
