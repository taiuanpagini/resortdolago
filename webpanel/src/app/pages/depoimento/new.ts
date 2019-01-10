/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component administração de categorias da aplicação


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
  selector: 'app-depoimento-new',
  templateUrl: './new.html'
})
export class DepoimentoNewComponent implements OnInit {

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

    //CARREGANDO DADOS INICIAIS
    // this.combodepoimentos();

    $(".selectpicker").selectpicker();
  }

  /************
  POST
  *************/
  postItem(form) {

    if (form.status === 'INVALID') {
      return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1001));

    }else{

      //ENVIADO DADOS
      this.GlobalService.inProcessForm = true;
      this.AlertService.alertLoadingShow();

      let headerConfig = {
        stsValue: "A",
        deleteValue: "N"
      }
      this.HttpService.JSON_POST(`/data/depoimentos/nomePessoa`, headerConfig, form.value)//CADASTRO DE depoimentoS
      //this.HttpService.JSON_POST(`/data/distribuidor/nome`, headerConfig, form.value)//CADASTROS GERAIS
        .then(
        (res) => {
          
          Promise.resolve(this.AlertService.alertInfo(res.json().msg))
          .then(() => { this.Router.navigate(['/depoimento/lista']); })

          this.GlobalService.inProcessForm = false;
          form.reset();

        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        })

    }

  }

}
