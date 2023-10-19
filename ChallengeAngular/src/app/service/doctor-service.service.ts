import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../modules';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private urlApi: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  public getAllDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.urlApi);
  }
}
