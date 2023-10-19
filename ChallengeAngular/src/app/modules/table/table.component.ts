import { Component, OnInit } from '@angular/core';
import { Doctor } from './table';
import { DoctorService } from 'src/app/service/doctor-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public doctores: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}
  ngOnInit(): void {
    this.getAllDoctors();
  }

  public getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe({
      next: (dataBackend) => {
        this.doctores = dataBackend;
      },
      error: (error) => {
        console.log(error);
        alert('Error');
      },
    });
  }
}
