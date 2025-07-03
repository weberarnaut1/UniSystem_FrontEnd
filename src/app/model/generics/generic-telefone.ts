import { genericLists } from "./generic-lists";

export class genericTelefone {
  public numeroCompleto!: number;
  public ddd!: number;
  public numero!: number;
  public tipoTelefone!: genericLists[];
  public tipoTelefoneSelected!: number;

  constructor() {
  }
}