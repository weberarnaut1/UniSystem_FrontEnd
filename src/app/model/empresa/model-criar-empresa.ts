import { genericEndereco } from "../generics/generic-endereco";
import { genericLists } from "../generics/generic-lists";
import { genericPessoa } from "../generics/generic-pessoa";

export class ModelCriarEmpresa {
  public tipoEmpresa!: genericLists[];
  public tipoEmpresaSelected!: number;
  public nomeEmpresa!: string;
  public cnpj!: string;
  public endereco!: genericEndereco;
  public dadosResponsavel!: genericPessoa;

  constructor() {
  }  
}
