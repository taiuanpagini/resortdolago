/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Serviço global de armazenamento de storage


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class StorageService {

    /************
    GET STORAGE
    *************/
    getItem(item) { return sessionStorage.getItem(item); }

    /************
    SET STORAGE
    *************/
    setItem(item, valor) { return sessionStorage.setItem(item, valor); }

    /************
    DELETE STORAGE
    *************/
    removeItem(item) { return sessionStorage.removeItem(item); }

    /************
    CLEAR STORAGE
    *************/
    clearStorage() { return sessionStorage.clear(); }

}