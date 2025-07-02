import { LocalStorage } from './../../services/local-storage';
import { Component } from '@angular/core';
import {TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';


@Component({
  selector: 'app-cadastro-empresa',
  imports: [TextBoxModule, CheckBoxModule, ButtonModule, ReactiveFormsModule, CommonModule, Menu],
  templateUrl: './cadastro-empresa.html',
  styleUrl: './cadastro-empresa.scss'
})
export class CadastroEmpresa {

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
//console.log(this.form.value);
console.log(this.criarConta);

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


