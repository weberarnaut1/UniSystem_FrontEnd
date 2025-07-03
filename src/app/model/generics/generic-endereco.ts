import { genericListCidade } from './generic-list-cidade';
import { genericLists } from './generic-lists';

export class genericEndereco {
  public cep!: string;
  public logradouro!: string;
  public numero!: number;
  public complemento!: string;
  public bairro!: string;
  public estado!: genericLists[];
  public estadoSelected!: number;
  public cidade!: genericListCidade[];
  public cidadeSelected!: number;

  constructor() {
  }
}