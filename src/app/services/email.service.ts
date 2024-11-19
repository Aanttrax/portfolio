import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '@envs/environment';
import { from, Observable } from 'rxjs';

interface IData {
  name: string;
  email: string;
  message: string;
}

const { TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY, NG_APP_USER_NAME } = environment;
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private TEMPLATE_ID = TEMPLATE_ID;
  private SERVICE_ID = SERVICE_ID;
  private PUBLIC_KEY = PUBLIC_KEY;
  private USER_NAME = NG_APP_USER_NAME;

  public sendEmail(data: IData): Observable<EmailJSResponseStatus> {
    const body = {
      from_name: data.name,
      to_name: this.USER_NAME,
      email: data.email,
      message: data.message,
    };

    const emailJsPromise = emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, body, {
      publicKey: this.PUBLIC_KEY,
    });

    return from(emailJsPromise);
  }
}
