import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FechaPage } from '../fecha/fecha.page';
import { MesaPage } from '../mesa/mesa.page';
import { ClientePage } from '../cliente/cliente.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule,FechaPage,MesaPage,ClientePage],
})
export class HomePage {
  constructor() {}
}
