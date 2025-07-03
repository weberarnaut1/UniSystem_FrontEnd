import { LocalStorage } from '../../services/localStorage/local-storage';
import { Component, Input } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModelCriarConta } from '../../model/conta/model-criar-conta';

@Component({
  selector: 'app-criar-conta',
  imports: [TextBoxModule, CheckBoxModule, ButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './criar-conta.html',
  styleUrl: './criar-conta.scss'
})



export class CriarConta {
  
  constructor(private router: Router, private LocalStorage: LocalStorage) {
  };

  @Input() modelCriarConta: ModelCriarConta = new ModelCriarConta();

  primeiroNome: string = '';

  public form: FormGroup = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    termoUso: new FormControl(false, Validators.requiredTrue)
  });

  protected salvarConta() {

    if (this.modelCriarConta.senha !== this.modelCriarConta.confirmarSenha) {
      alert("As senhas digitadas são divergentes!");
    }
    else {
      this.LocalStorage.armazenarConta(this.modelCriarConta);
      this.router.navigate(['/boas-vindas']);
    }


  }
}
