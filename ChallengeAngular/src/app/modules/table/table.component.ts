import { Component } from '@angular/core';
import { Doctor } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public Doctores: Doctor[] = [];
}
