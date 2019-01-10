/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Serviço global de autenticacao


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/***********************************************************
SERVICES
***********************************************************/
import { StorageService } from '../globals/storage';
import { AlertService } from '../globals/alert';
import { SuccessErrorsServices } from '../globals/sucess.errors';
import { GlobalService } from '../globals/global';
import { HttpService } from './../globals/http';

declare var $: any;

@Injectable()
export class SessionService {

  //isLogged: boolean = false;
  //dadosUser: any;

  constructor(
    private Router: Router,
    private AlertService: AlertService,
    private SuccessErrorsServices: SuccessErrorsServices,
    public GlobalService: GlobalService,
    private StorageService: StorageService,
    private HttpService: HttpService
  ) { }

  /************
  VALIDA TOKEN
  *************/
  getValidaToken() {
    let headerConfig = {
      tokenTable: "usuarios",
      stsValue: "A",
      deleteValue: "N"
    }
    return this.HttpService.JSON_GET(`/auth/login/token/usuarios`, headerConfig)
  }

  /************
  GET LOGIN
  *************/
  getLogin(form) {

    console.log(form.status);

    if (form.status === 'INVALID') {
      return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1001));

    } else {

      this.GlobalService.inProcessForm = true;

      let headerConfig = {
        stsValue: "A",
        deleteValue: "N"
      }
      this.HttpService.JSON_POST('/auth/login/user/usuarios/email/senha', headerConfig, form.value)
        .then(
          (res) => {
            this.GlobalService.inProcessForm = false;

            console.log(res.json());

            //CARREGANDO DADOS NO STORAGE
            Promise.resolve(
              this.StorageService.setItem('dataUser', JSON.stringify({
                i: res.json().data.hashID,
                n: res.json().data.nome,
                e: res.json().data.email,
                t: res.json().data.token
              }))
            ).then(() => {

              this.GlobalService.isLogged = true;
              this.GlobalService.isLock = false;
              this.StorageService.setItem('lastClick', Date.now());

              //redirecionando
              return this.Router.navigate(['/']);
            })

          },
          (error) => {
            this.GlobalService.inProcessForm = false;
            this.AlertService.alertError(JSON.parse(error._body));
          }
        )

    }

  }

  /************
  GET LOGIN
  *************/
  getLogout() {

    return Promise.resolve(
      this.AlertService.alertConfirm('Finalizar sessão?', this.SuccessErrorsServices.showOthers(1007))
    )
      .then(res => {

        if (res == true) {

          this.GlobalService.isLogged = false;

          //removendo valores no storage
          this.StorageService.clearStorage();

          //redirecionando
          this.Router.navigate(['/login']);
          return true;

        } else {
          return false;
        }
      })
  }

  /************
  GET LOGIN
  *************/
  getRecuperarSenha(form) {

    console.log(form.status);

    if (form.status === 'INVALID') {
      return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1001));

    } else {

      this.GlobalService.inProcessForm = true;

      let headerConfig = {
        stsValue: "A",
        deleteValue: "N"
      }
      this.HttpService.JSON_POST('/auth/reset/password/usuarios/email/nome/email/senha', headerConfig, form.value)
        .then(
          (res) => {
            console.log(res.json());

            this.AlertService.alertError(JSON.parse(res.json()));
            //redirecionando
            return this.Router.navigate(['/login']);

          },
          (error) => {
            this.AlertService.alertError(JSON.parse(error._body));
          }
        )

    }

  }

  /************
  NOTIFY
  *************/
  alertNotify(title, msg, type) {
    return $.notify({
      title: title,
      message: msg,
    }, {
        type: type,
        delay: Math.floor((Math.random() * 10000) + 7000),
        placement: {
          from: 'top',
          align: 'right'
        },
        animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
        },
        icon_type: 'class',
        template: `
          <div class="alert alert-{0} alert-with-icon">
              <button type="button" class="close" data-notify="dismiss">
                  <i class="material-icons">close</i>
              </button>
              <i class="material-icons" data-notify="icon">notifications_none</i>
              <span data-notify="message">
                  <b>{1}</b><br>{2}
              </span>
          </div>`,
      });
  }

}