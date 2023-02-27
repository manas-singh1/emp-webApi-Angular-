import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/models/employee.model';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  
  employees: Employee[] = [];
  employeesToDisplay: Employee[] = [];
  
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
  search(event: any) {
    let filteredEmployees: Employee[] = [];
    if (event === '') {
      
      this.employeesToDisplay;


    }
    else {
      filteredEmployees = this.employees.filter((val, index) => {
        
        let targetKey = (val.name.toLowerCase());
        
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }


}
