import { Component, OnInit, Output } from '@angular/core';

import { HomeService } from './services/home.service';
import { Estados } from './models/estados';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})  
export class HomeComponent implements OnInit {
  public title: string;
  public faStar = faStar;
  public listaEstados: Estados[]; 

  constructor(private api: HomeService) { }

  ngOnInit() {
    this.title = 'This is my country';
    this.buscarEstados();
  }

  public buscarEstados(): void{
    this.api.getEstados()
    .subscribe(res => {
      this.listaEstados = res;
    })
  }
}
