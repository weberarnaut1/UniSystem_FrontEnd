import { genericListCidade } from "./generic-list-cidade";
import { genericLists } from "./generic-lists";

export class genericEndereco {
  public cep: string = '';
  public logradouro: string = '';
  public numero: number = 0;
  public complemento: string = '';
  public bairro: string = '';
  public estado: genericLists[] = [];
  public estadoSelected: number = 0;
  public cidade: genericListCidade[] = [];
  public cidadeSelected: number = 0;

  constructor() {
  }

  preencherListaEstados(): genericLists[] {
    let lista: genericLists[] = [
      { descricao: "AC", id: 1 },
      { descricao: "AL", id: 2 },
      { descricao: "AP", id: 3 },
      { descricao: "AM", id: 4 },
      { descricao: "BA", id: 5 },
      { descricao: "CE", id: 6 },
      { descricao: "DF", id: 7 },
      { descricao: "ES", id: 8 },
      { descricao: "GO", id: 9 },
      { descricao: "MA", id: 10 },
      { descricao: "MT", id: 11 },
      { descricao: "MS", id: 12 },
      { descricao: "MG", id: 13 },
      { descricao: "PA", id: 14 },
      { descricao: "PB", id: 15 },
      { descricao: "PR", id: 16 },
      { descricao: "PE", id: 17 },
      { descricao: "PI", id: 18 },
      { descricao: "RJ", id: 19 },
      { descricao: "RN", id: 20 },
      { descricao: "RS", id: 21 },
      { descricao: "RO", id: 22 },
      { descricao: "RR", id: 23 },
      { descricao: "SC", id: 24 },
      { descricao: "SP", id: 25 },
      { descricao: "SE", id: 26 },
      { descricao: "TO", id: 27 }
    ];
    return lista;
  }

  preencherListaCidades(idUF: number): genericListCidade[]{
    return [];
  }
}