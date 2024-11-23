import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  AfterViewInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailService } from '@services/email.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('textVariant', [
      state(
        'hidden',
        style({
          transform: 'translateY(-50px)',
          opacity: 0,
        })
      ),
      state(
        'show',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('hidden => show', [animate('1.25s ease-out')]),
    ]),
  ],
})
export class ContactComponent implements OnInit, AfterViewInit {
  contact = viewChild.required<ElementRef>('contact');
  loading = signal<boolean>(false);
  inView = signal<boolean>(false);
  send = signal<boolean>(false);

  public contactForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private emailService = inject(EmailService);

  ngOnInit(): void {
    this.contactForm = this.createContactForm();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        this.inView.set(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(this.contact().nativeElement);
  }

  private createContactForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.loading.set(true);
    this.emailService.sendEmail(this.contactForm.value).subscribe({
      next: (response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.loading.set(false);
        this.send.set(true);
        this.name?.setValue('');
        this.email?.setValue('');
        this.message?.setValue('');
        this.contactForm.markAsUntouched();
      },
      error: (error: EmailJSResponseStatus) => {
        console.error('FAILED...', error.text);
      },
    });
  }

  closeMessage() {
    this.send.set(false);
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
