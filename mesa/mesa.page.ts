import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MesaPage{
  mesasDisponibles = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4'];
  mesaSeleccionada = '';
}
