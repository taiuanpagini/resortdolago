/*--------------
V 0.0.1 - Criado por Larner Diogo

DESCRICAO:
Serviço de Guarda de Rotas Admin


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

/**********************************************************
SERVICES
***********************************************************/
import { SessionService } from './session';
import { StorageService } from '../globals/storage';
import { GlobalService } from './../globals/global';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private GlobalService: GlobalService,
    private SessionService: SessionService,
    private StorageService: StorageService,
    private Router: Router
  ) { }

  /************
  GUARDA DE ROTAS
  *************/
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    //VERIFICANDO TOKEN DO USUARIO
    return new Promise((resolve) => {

      //se nao existir no storage o admin, redireciona para login
      if(
        this.StorageService.getItem('dataUser') === null
      ){
        this.Router.navigate(['/login']);
        resolve(false)

      //se existir faz verificaca do token      
      }else{
        this.SessionService.getValidaToken()
        .then(
          (res) => {
            console.log(res.json());
            if(this.GlobalService.isLock === true){
              this.Router.navigate(['/lock']);
              resolve(false)
            }
            else if(res.json() === true){ resolve(true) }
            else{
              this.Router.navigate(['/login']);
              resolve(false)
            }
          },
          (error) => {
            this.Router.navigate(['/login']);
            resolve(false)
          }
        )
      }
    })

  }

}