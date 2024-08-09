import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://your-api-endpoint/contact';

  constructor(private http: HttpClient) { }

  sendMessage(message: any): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
}
