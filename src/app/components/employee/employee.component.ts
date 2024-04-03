import { Component,OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Employee } from '../../employee';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  // export class EmployeeComponent {
    employee = new Employee();

    employees:any;
    constructor(private dataService:DataService) { }
    ngOnInit(){
      this.getEmployeesdata();
    }
    getEmployeesdata() {
      this.dataService.getData().subscribe(res =>{
        this.employees = res;
      });
    }
    insertData(){
      this.dataService.insertData(this.employee).subscribe(res =>{
        this.getEmployeesdata();
      });
  }
  deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeesdata();
    })
  }
}
