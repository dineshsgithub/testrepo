import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DataFile } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularDemo';
  EmployeeForm: FormGroup;
  Data: DataFile;

  filteredListItem = [];
  displayAutocomplete: boolean;
  constructor(private fb: FormBuilder) {
    this.Data = new DataFile();
  }
  ngOnInit() {
    this.EmployeeForm = this.setupForm();
    this.EmployeeForm.controls["EmpName"].valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe(input => {
      debugger;
      if (this.displayAutocomplete) {
        this.filteredListItem = this.Data.EmployeeDetails.filter(a => a.EmpName.toLowerCase().includes(input.toLowerCase()));
      }
    });

  }
  showDropDown() {
    if (this.EmployeeForm.controls["EmpName"] && this.EmployeeForm.controls["EmpName"].value
      && this.EmployeeForm.controls["EmpName"].value.length >= 2) {
      this.displayAutocomplete = true;
    }
    else {
      this.displayAutocomplete = false;
    }
  }

  selectValue(item: any) {
    this.displayAutocomplete = false;
    let employeeDetails = this.Data.EmployeeDetails.find(emp => emp.EmpId === item.EmpId);
    this.EmployeeForm.patchValue(employeeDetails);
  }

  setupForm(): FormGroup {
    return this.fb.group({
      EmpName: '',
      Email: '',
      Mobile: '',
      Designation: '',
      Reporting: ''
    });
  }
}
