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
  selector: 'app-video-list',
  templateUrl: './list.html'
})
export class VideoListComponent implements OnInit {

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
    this.HttpService.JSON_GET(`/data/videos/titulo/asc/*/id,hashID,sts,titulo,idvideo/*`, headerConfig)
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
    this.Router.navigate([`/video/${event.id}`]);
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
          this.HttpService.JSON_DELETE(`/data/item/videos/${event.id}/*/nome/S`, true, true)
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
      this.AlertService.alertConfirm('Desativar video?', 'Tem certeza que deseja desativar o video?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_DELETE(`/data/item/videos/${event.id}/*/nomePessoa/N`, true, headerConfig)
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
      this.AlertService.alertConfirm('Ativar video?', 'Tem certeza que deseja ativar o video?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_PUT(`/data/status/activate/videos/${event.id}`,headerConfig, this.model, true)          
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
