import { LocalStorage } from '../../services/localStorage/local-storage';
import { Component, OnInit } from '@angular/core';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Menu } from '../menu/menu';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'
import { ModelCriarEmpresa } from '../../model/empresa/model-criar-empresa';
import { buscaTipoEmpresa } from '../../services/busca-tipo-empresa/busca-tipo-empresa';
import { buscaEstado } from '../../services/busca-estado/busca-estado';


@Component({
  selector: 'app-cadastro-empresa',
  imports: [TextBoxModule, CheckBoxModule, ButtonModule, ReactiveFormsModule, CommonModule, Menu, ComboBoxModule],
  templateUrl: './cadastro-empresa.html',
  styleUrl: './cadastro-empresa.scss'
})

export class CadastroEmpresa implements OnInit {

  constructor(
    private router: Router,
    private LocalStorage: LocalStorage
  ) {
  };

  ngOnInit(): void {
    this.preencherTipoEmpresa();
    this.preencherEstado();
  }

  modelCriarEmpresa = new ModelCriarEmpresa();
  private serviceTipoEmpresa: buscaTipoEmpresa = new buscaTipoEmpresa();
  private serviceBuscaEstado: buscaEstado = new buscaEstado();


  preencherTipoEmpresa() {    
    this.modelCriarEmpresa.tipoEmpresa = this.serviceTipoEmpresa.getTipoEmpresa();
  }

  preencherEstado() {
    this.modelCriarEmpresa.endereco.estado = this.serviceBuscaEstado.getEstados();
  }

  preencherCidade(idUF: number) {

  }

  protected testeSelecao() {

  }

  public form: FormGroup = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    termoUso: new FormControl(false, Validators.requiredTrue)
  });



}


