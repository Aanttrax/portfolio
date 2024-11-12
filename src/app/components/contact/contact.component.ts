import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailService } from '@services/email.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => show', [animate('1s 0.2s ease-out')]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  loading = false;
  animationState = 'hidden';

  public contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.animationState = 'show';
    this.contactForm = this.createContactForm();
  }

  private createContactForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.loading = true;
    // this.emailService.sendEmail(this.contactForm.value).subscribe({next:(resp:any)=>console.log(resp,'***')})
  }

  get name(): AbstractControl | null {
    return this.contactForm.get('name');
  }
  get email(): AbstractControl | null {
    return this.contactForm.get('email');
  }
  get message(): AbstractControl | null {
    return this.contactForm.get('message');
  }
}
