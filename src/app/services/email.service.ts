import { Injectable } from '@angular/core';
import { environment } from '@envs/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private API_KEY = environment.API_KEY;
  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  public sendEmail(data: {
    name: string;
    email: string;
    message: string;
  }): Observable<HttpResponse<IResponse>> {
    console.log(data, 'body');
    //
    const body = JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['arielrt20@gmail.com'],
      subject: 'Contact Portfolio',
      html:
        '<strong>' +
        data.name +
        '</strong></br><p>' +
        data.message +
        '</p><p>' +
        data.email +
        '</p>',
    });
    //
    console.log(body, 'body');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.API_KEY}`,
    });
    return this.httpClient.post<IResponse>(this.API_URL, body, {
      headers: headers,
      observe: 'response',
    });
  }
}
