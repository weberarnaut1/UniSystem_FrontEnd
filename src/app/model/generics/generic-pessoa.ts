
import { cp } from 'fs';
import { genericTelefone } from './generic-telefone';

export class genericPessoa {
  public nome!: string;
  public cpf!: string;
  public telefone!: genericTelefone;

  constructor() {
  }
}