/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component Clientes da aplicação


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

declare var $: any;
@Component({
  selector: 'app-contato-list',
  templateUrl: './list.html'
})
export class ContatoListComponent implements OnInit {
  name = 'Angular 5';

  specialist = '<div id="test" class="test"> \n<h3>NAME SPECIALIST</h3>\n<p>random text</p></div>\n</div>';
  htmlSnippet: string = "<script>safeCode()</script>";

  itens: any;
  headers: any;
  model: any;

  constructor(
    private Router: Router,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService
  ) {

    //CARREGANDO ITENS INICIAIS
    this.getItens();
  }

  /************
  GET
  *************/
  getItens() {
    this.AlertService.alertLoadingShow();

    let headerConfig = {
      stsValue: "A",
      deleteValue: "N"
    }
    this.HttpService.JSON_GET(`/data/contatos/titulo/asc/*/id,hashID,sts,titulo,contato,endereco/*`, headerConfig)
      .then(
      (res) => {
        this.AlertService.alertLoadingClose();
        if (res.json().length === 0) {
          this.itens = [];
          this.GlobalService.notItens = true;
        } else {
          this.itens = res.json().data;
          this.GlobalService.notItens = false;
          if(this.itens[0])
            this.headers = Object.keys(this.itens[0]);
        }
      },
      (error) => {
        this.GlobalService.notItens = true;
        this.itens = [];
        this.AlertService.alertError(JSON.parse(error._body));
      })

  }

  /************
  EDIT
  *************/
  editItem(event) {
    this.Router.navigate([`/contato/${event.id}`]);
  }

  /************
  DETELE
  *************/
  deleteItem(event) {
    console.log(event);
    return Promise.resolve(
      this.AlertService.alertConfirm('Excluir item?', 'Tem certeza que deseja excluir o item?')
    )
      .then(res => {

        if (res == true) {

          this.AlertService.alertLoadingShow();
          this.HttpService.JSON_DELETE(`/data/item/contatos/${event.id}/*/nome/S`, true, true)
            .then(
            (res) => {
              this.getItens();
              return true;
            },
            (error) => {
              this.AlertService.alertError(JSON.parse(error._body));
              return false;
            })          

        } else {
          return false;
        }
      })
  }

  /************
  DESATIVAR
  *************/
  desativarItem(event) {
    console.log(event);
    return Promise.resolve(
      this.AlertService.alertConfirm('Desativar contato?', 'Tem certeza que deseja desativar o contato?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_DELETE(`/data/item/contatos/${event.id}/*/titulo/N`, true, headerConfig)
            .then(
            (res) => {
              this.getItens();
              return true;
            },
            (error) => {
              this.AlertService.alertError(JSON.parse(error._body));
              return false;
            })          

        } else {
          return false;
        }
      })
  }

  /************
  ATIVAR
  *************/
  ativarItem(event) {
    // console.log(event);

    this.model = {
      sts: "A",
      deleted: "N"
    }
    return Promise.resolve(
      this.AlertService.alertConfirm('Ativar contato?', 'Tem certeza que deseja ativar o contato?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_PUT(`/data/status/activate/contatos/${event.id}`,headerConfig, this.model, true)          
            .then(
            (res) => {
              this.getItens();
              return true;
            },
            (error) => {
              this.AlertService.alertError(JSON.parse(error._body));
              return false;
            })          

        } else {
          return false;
        }
      })
  }

  ngOnInit() {
    this.GlobalService.setTituloPage();
  }

}
