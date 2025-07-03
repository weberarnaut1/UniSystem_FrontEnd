import { genericEndereco } from "../generics/generic-endereco";
import { genericLists } from "../generics/generic-lists";
import { genericPessoa } from "../generics/generic-pessoa";

export class ModelCriarEmpresa {
  public tipoEmpresa: genericLists[] = [];
  public tipoEmpresaSelected: number = 0;
  public nomeEmpresa: string = '';
  public cnpj: string = '';
  public endereco: genericEndereco = new genericEndereco();
  public dadosResponsavel: genericPessoa = new genericPessoa();

  constructor() {
  }

  getTipoEmpresa(): genericLists[] {
    let lista: genericLists[] = [
      { id: 1, descricao: 'Empresa Individual (EI)' },
      { id: 2, descricao: 'Microempreendedor Individual (MEI)' },
      { id: 3, descricao: 'Sociedade Limitada (LTDA)' },
      { id: 4, descricao: 'Sociedade Limitada Unipessoal (SLU)' },
      { id: 5, descricao: 'Sociedade Simples (SS)' },
      { id: 6, descricao: 'Sociedade Anônima (S/A)' },
      { id: 7, descricao: 'Microempresa (ME)' },
      { id: 8, descricao: 'Empresa de Pequeno Porte (EPP)' },
      { id: 9, descricao: 'Empresa de médio e grande porte' }
    ];
    return lista;

  }
}
