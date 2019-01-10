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
  selector: 'app-atracoes-list',
  templateUrl: './list.html'
})
export class AtracoesListComponent implements OnInit {

  itens: Array<any> = [];
  headers: any;
  model: any;
  qtdItens: any = 0;
  idItem: any;

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
    // this.HttpService.JSON_GET(`/data/banners,imagens/id/asc/imagens.idItem=banners.hashID,imagens.ref=banners/banners.id,banners.hashID,imagens.ref,banners.sts,banners.titulo,banners.primeiraLinha,banners.segundaLinha,banners.inicio,banners.fim,imagens.pathThumb as midia/*`, headerConfig, true)
    this.HttpService.JSON_GET(`/data/atracoes,imagens/ordem/asc/imagens.idItem=atracoes.hashID,imagens.ref=logo-atracoes/atracoes.id,atracoes.hashID,imagens.ref,atracoes.sts,atracoes.titulo,atracoes.descricao,imagens.pathMedium as midia,atracoes.updated/*`, headerConfig, true)
      .then(
        (res) => {
          this.HttpService.JSON_GET(`/data/atracoes,imagens/id/asc/imagens.idItem=atracoes.hashID,imagens.ref=principal-atracoes/atracoes.id,atracoes.hashID,imagens.ref,atracoes.sts,atracoes.titulo,atracoes.descricao,imagens.pathMedium as midia2/*`, headerConfig, true)
            .then(
              (res2) => {
                // console.log(res2.json().data);
                this.AlertService.alertLoadingClose();
                if (res2.json().length === 0) {
                  this.itens = [];
                  this.GlobalService.notItens = true;
                } else {
                  this.itens = [
                    {
                      hashID: res.json().data[0].hashID,
                      titulo: res.json().data[0].titulo,
                      descricao: res.json().data[0].descricao,
                      midia1: res.json().data[0].midia,
                      midia2: res2.json().data[0].midia2,
                      updated: res.json().data[0].updated
                    },
                    {
                      hashID: res.json().data[1].hashID,
                      titulo: res.json().data[1].titulo,
                      descricao: res.json().data[1].descricao,
                      midia1: res.json().data[1].midia,
                      midia2: res2.json().data[1].midia2,
                      updated: res.json().data[1].updated
                    },
                    {
                      hashID: res.json().data[2].hashID,
                      titulo: res.json().data[2].titulo,
                      descricao: res.json().data[2].descricao,
                      midia1: res.json().data[2].midia,
                      midia2: res2.json().data[2].midia2,
                      updated: res.json().data[2].updated
                    },
                    {
                      hashID: res.json().data[3].hashID,
                      titulo: res.json().data[3].titulo,
                      descricao: res.json().data[3].descricao,
                      midia1: res.json().data[3].midia,
                      midia2: res2.json().data[3].midia2,
                      updated: res.json().data[3].updated
                    },
                    {
                      hashID: res.json().data[4].hashID,
                      titulo: res.json().data[4].titulo,
                      descricao: res.json().data[4].descricao,
                      midia1: res.json().data[4].midia,
                      midia2: res2.json().data[4].midia2,
                      updated: res.json().data[4].updated
                    },
                    {
                      hashID: res.json().data[5].hashID,
                      titulo: res.json().data[5].titulo,
                      descricao: res.json().data[5].descricao,
                      midia1: res.json().data[5].midia,
                      midia2: res2.json().data[5].midia2,
                      updated: res.json().data[5].updated
                    }
                  ]

                  console.log(this.itens);
                  this.GlobalService.notItens = false;
                  if (this.itens[0])
                    this.headers = Object.keys(this.itens[0]);
                }
              }
            )
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
  editItem(item) {
    this.Router.navigate([`/atracao/${item}`]);
  }

  /************
  EDIT
  *************/
  uploadItem(item) {
    this.Router.navigate([`/atracao/${item}/upload-imagem`]);
  }

  /************
  EDIT
  *************/
  EditImageItem(item) {
    this.Router.navigate([`/atracao/${item}/editar-imagem`]);
  }

  /************
  DETELE
  *************/
  deleteItem(item) {
    return Promise.resolve(
      this.AlertService.alertConfirm('Excluir item?', 'Tem certeza que deseja excluir o item?')
    )
      .then(res => {

        if (res == true) {

          this.AlertService.alertLoadingShow();
          this.HttpService.JSON_DELETE(`/data/item/atracoes/${item}/*/id/S`, true, true)
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
      this.AlertService.alertConfirm('Desativar atracao?', 'Tem certeza que deseja desativar o atracao?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_DELETE(`/data/item/atracoes/${event.id}/*/titulo/N`, true, headerConfig)
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
      this.AlertService.alertConfirm('Ativar atracao?', 'Tem certeza que deseja ativar o atracao?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_PUT(`/data/status/activate/atracoes/${event.id}`, headerConfig, this.model, true)
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
