import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule as Tabla } from 'primeng/table';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, Tabla, TableRoutingModule],
})
export class TableModule {}
