import { Component, inject } from '@angular/core';
import { AuthCustomService } from '../../../../core/auth/auth-custom.service';
import { RegisterUserDto } from '../../../../core/models/users';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private customService = inject(AuthCustomService);
  private fb = inject(NonNullableFormBuilder);
  private router = inject(Router);

  readonly registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const user: RegisterUserDto = this.registerForm.getRawValue();

    this.customService.addUser(user).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => console.error(err)
    });
  }
}