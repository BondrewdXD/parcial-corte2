import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule]
})
export class ClientePage implements OnInit {
  form!: FormGroup;

  campos = [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'contacto', label: 'Contacto', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      contacto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
