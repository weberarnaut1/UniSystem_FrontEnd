import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { genericLists } from "../../model/generics/generic-lists";

export class buscaEstado{
  constructor(){

  }
  httpClient = new HttpClient(new HttpXhrBackend({ 
    build: () => new XMLHttpRequest() 
}));

  getEstados(): genericLists[] {
      let lista: genericLists[] = [];
      
      this.httpClient.get<{ lista: genericLists[]}>("http://localhost:3000/estados").subscribe((data : { lista: genericLists[]}) => {
        lista = data.lista; 
      });
      return lista;
    }
}