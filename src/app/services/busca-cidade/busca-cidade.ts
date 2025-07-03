import { HttpClient } from "@angular/common/http";
import { genericLists } from "../../model/generics/generic-lists";
import { genericListCidade } from "../../model/generics/generic-list-cidade";

export class buscaCidade{
  constructor(private httpClient : HttpClient){

  }

  getCidade(): genericListCidade[] {
      let lista: genericListCidade[] = [];
            
            this.httpClient.get<{ lista: genericListCidade[]}>("http://localhost:3000/cidades").subscribe((data : { lista: genericListCidade[]}) => {
              lista = data.lista; 
            });
            return lista;
          }
}