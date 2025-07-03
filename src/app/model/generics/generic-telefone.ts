import { genericLists } from "./generic-lists";

export class genericTelefone {
  public numeroCompleto: number = 0;
  public ddd: number = 0;
  public numero: number = 0;
  public tipoTelefone: genericLists[] = [];
  public tipoTelefoneSelected: number = 0;

  constructor() {
  }
}