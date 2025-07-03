import { Injectable } from '@angular/core';
import { ModelCriarConta } from '../../model/conta/model-criar-conta';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  armazenarConta(modelCriarConta: ModelCriarConta): void {
    this.removeItem('CadastroConta');
    this.removeItem('PrimeiroNomeCadastro');
    this.setItem('CadastroConta', JSON.stringify(modelCriarConta));
    this.setItem('PrimeiroNomeCadastro', JSON.stringify(modelCriarConta.nomeCompleto.split(' ')[0]));
  }
}