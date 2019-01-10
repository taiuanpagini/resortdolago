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
  selector: 'app-banner-list',
  templateUrl: './list.html'
})
export class BannerListComponent implements OnInit {

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
    this.HttpService.JSON_GET(`/data/banners,imagens/ordem/asc/imagens.idItem=banners.hashID,imagens.ref=banners/banners.id,banners.hashID,imagens.ref,banners.sts,banners.titulo,banners.primeiraLinha,banners.segundaLinha,banners.inicio,banners.fim,imagens.pathThumb as midia/*`, headerConfig, true)                    
      .then(
        (res) => {
          this.AlertService.alertLoadingClose();
          if (res.json().length === 0) {
            this.itens = [];
            this.GlobalService.notItens = true;
            console.log("valor: " + this.GlobalService.notItens);
          } else {
            this.itens = res.json().data;
            this.GlobalService.notItens = false;
            if (this.itens[0])
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
    this.Router.navigate([`/banner/${event.id}`]);
  }
  
  /************
  EDIT
  *************/
  uploadItem(event) {
    this.Router.navigate([`/banner/${event.id}/upload-imagem`]);
  }

  /************
  EDIT
  *************/
  EditImageItem(event) {
    this.Router.navigate([`/banner/${event.id}/editar-imagem`]);
  }

  /************
  DETELE
  *************/
  deleteItem(event) {
    return Promise.resolve(
      this.AlertService.alertConfirm('Excluir item?', 'Tem certeza que deseja excluir o item?')
    )
      .then(res => {

        if (res == true) {

          this.AlertService.alertLoadingShow();
          this.HttpService.JSON_DELETE(`/data/item/banners/${event.id}/*/id/S`, true, true)
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
      this.AlertService.alertConfirm('Desativar banner?', 'Tem certeza que deseja desativar o banner?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_DELETE(`/data/item/banners/${event.id}/*/titulo/N`, true, headerConfig)
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
      this.AlertService.alertConfirm('Ativar banner?', 'Tem certeza que deseja ativar o banner?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_PUT(`/data/status/activate/banners/${event.id}`, headerConfig, this.model, true)
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
