import { Employee } from './employee-list/models/employee.model';
import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  
  constructor(private http: HttpClient) { }
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:7168/api/employees');

  }
  addEmployeeDetails( addEmployeeRequest:Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>('https://localhost:7168/api/employees',addEmployeeRequest);
  }
  getEmployee(id :string): Observable<Employee>{
    return this.http.get<Employee>('https://localhost:7168/api/employees/'+ id);
  }
  updateEmployee(id:number,updateEmployeeRequest:Employee): Observable <Employee>{
    return this.http.put<Employee>('https://localhost:7168/api/employees/'+ id,updateEmployeeRequest);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:7168/api/employees/'+ id);
  }
}
