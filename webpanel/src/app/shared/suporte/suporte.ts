/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component suporte tecnico da aplicação


COMPONENTS
***********************************************************/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { HttpService } from '../../globals/http';
import { AlertService } from '../../globals/alert';
import { StorageService } from './../../globals/storage';
import { SuccessErrorsServices } from '../../globals/sucess.errors';
import { SessionService } from '../../globals/session';

declare var $: any;
@Component({
  selector: 'app-suporte-tecnico',
  templateUrl: './suporte.html'
})
export class SuporteTecnicoComponent implements OnInit {

  constructor(
    private Router: Router,
    private SuccessErrorsServices: SuccessErrorsServices,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService,
    public SessionService: SessionService
  ) {}

  ngOnInit() {
    this.GlobalService.setTituloPage();
    this.AlertService.alertLoadingClose();
  }

  /************
  POST
  *************/
  postItem(form) {

    if(form.value.empresa === null || form.value.empresa === ''){
      return this.AlertService.alertInfo('Informe o nome da empresa!');

    }else if(form.value.email === null || form.value.email === ''){
      return this.AlertService.alertInfo('Digite um e-mail para contato!');

    }else if(form.value.fone === null || form.value.fone === ''){
      return this.AlertService.alertInfo('Informe um número de telefone!');

    }else if(form.value.assunto === null || form.value.assunto === ''){
      return this.AlertService.alertInfo('Informe o assunto!');

    }else if(form.value.mensagem === null || form.value.mensagem === ''){
      return this.AlertService.alertInfo('Digite mais informações sobre o assunto!');

    }else{

      //ENVIADO DADOS
      this.GlobalService.inProcessForm = true;
      this.AlertService.alertLoadingShow();

      let headerConfig = {
        tokenTable: "usuarios",
        stsValue: "A",
        deleteValue: "N"
      }
      this.HttpService.JSON_POST(`/suporte/envia-mensagem/${this.StorageService.getItem('i')}`, headerConfig,form.value)
        .then(
        (res) => {
          
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertSuccess(res.json());
          
        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        })

    }

  }

}
