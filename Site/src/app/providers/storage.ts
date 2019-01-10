/*--------------

DESCIÇÃO:
Servico global de storage


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  setItem(campo, valor) {
    return localStorage.setItem(campo, valor);
  }
  getItem(campo) {
    return localStorage.getItem(campo)
  }
  deleteItem(campo) {
    return localStorage.removeItem(campo);
  }
  clear() {
    return localStorage.clear();
  }

}