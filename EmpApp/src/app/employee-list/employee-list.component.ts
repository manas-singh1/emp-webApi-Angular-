import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  
  constructor(private EmployeesService: EmployeesService) { }

  ngOnInit(): void {
    this.EmployeesService.getAllEmployees()
      .subscribe({
        next: (employees) => { this.employees = employees },
        error: (response) => {
          console.log(response);
        }
      })
  }


}
