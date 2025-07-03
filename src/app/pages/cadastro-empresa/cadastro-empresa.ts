import { LocalStorage } from '../../services/localStorage/local-storage';
import { Component } from '@angular/core';
import {TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'


@Component({
  selector: 'app-cadastro-empresa',
  imports: [TextBoxModule, CheckBoxModule, ButtonModule, ReactiveFormsModule, CommonModule, Menu, ComboBoxModule],
  templateUrl: './cadastro-empresa.html',
  styleUrl: './cadastro-empresa.scss'
})

export class CadastroEmpresa {

public cbxTipoEmpresa: { [key: string]: Object }[] = [ 
  { Id: '1', tipoEmpresa: 'Empresa Individual (EI)' },
  { Id: '2', tipoEmpresa: 'Microempreendedor Individual (MEI)' }, 
  { Id: '3', tipoEmpresa: 'Sociedade Limitada (LTDA)' }, 
  { Id: '4', tipoEmpresa: 'Sociedade Limitada Unipessoal (SLU)' }, 
  { Id: '5', tipoEmpresa: 'Sociedade Simples (SS)' }, 
  { Id: '6', tipoEmpresa: 'Sociedade Anônima (S/A)' }, 
  { Id: '7', tipoEmpresa: 'Microempresa (ME)' }, 
  { Id: '8', tipoEmpresa: 'Empresa de Pequeno Porte (EPP)' }, 
  { Id: '9', tipoEmpresa: 'Empresa de médio e grande porte' }
];
    protected cbxfields: Object = { text: 'tipoEmpresa', value: 'Id' };

    protected cbxTipoEmpresaSelected: string = '';

    protected testeSelecao(){
      console.log(this.cbxTipoEmpresa);
      console.log(this.cbxTipoEmpresaSelected);
      console.log(this.cbxfields);
      
    }

  criarConta = {nomeCompleto: '', email: '', senha: '', confirmarSenha: '', termoUso: false};

  constructor(private router:Router, private LocalStorage: LocalStorage){};

  primeiroNome: string = '';

  public form : FormGroup = new FormGroup({
      nomeCompleto: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      termoUso: new FormControl(false, Validators.requiredTrue)
    });


  protected salvarConta(){

if(this.criarConta.senha !== this.criarConta.confirmarSenha){
  alert("As senhas digitadas são divergentes!");
}
else{
  this.LocalStorage.removeItem('CadastroConta');
  this.LocalStorage.removeItem('PrimeiroNomeCadastro');
  this.LocalStorage.setItem('CadastroConta', JSON.stringify(this.criarConta));
  this.primeiroNome = this.criarConta.nomeCompleto.split(' ')[0];
  this.LocalStorage.setItem('PrimeiroNomeCadastro', JSON.stringify(this.primeiroNome));  
  this.router.navigate(['/boas-vindas']);
}
     

  }
}


