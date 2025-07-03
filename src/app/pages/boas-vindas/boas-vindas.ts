import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Router } from '@angular/router';
import { LocalStorage } from '../../services/localStorage/local-storage';

@Component({
  selector: 'app-boas-vindas',
  imports: [Menu, ButtonModule],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.scss'
})
export class BoasVindas {
    constructor(private router:Router){};

    private localStorage: LocalStorage = new LocalStorage();
    primeiroNome =  JSON.parse(this.localStorage.getItem('PrimeiroNomeCadastro'));

    protected configEmpresa() {
      this.router.navigate(['/cadastro-empresa']);
    }
}
