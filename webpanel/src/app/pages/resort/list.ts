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
  selector: 'app-resort-list',
  templateUrl: './list.html'
})
export class ResortListComponent implements OnInit {

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
    this.HttpService.JSON_GET(`/data/resort/id/asc/*/*/*`, headerConfig, true)
      .then(
        (res) => {
          this.HttpService.JSON_GET(`/data/imagens/id/asc/imagens.ref=parque-aquatico-resort/imagens.ref,imagens.pathLarge as midia/*`, headerConfig, true)
            .then(
              (parque) => {
                this.HttpService.JSON_GET(`/data/imagens/id/asc/imagens.ref=acomodacoes-resort/imagens.ref,imagens.pathLarge as midia/*`, headerConfig, true)
                  .then(
                    (acomodacoes) => {
                      this.HttpService.JSON_GET(`/data/imagens/id/asc/imagens.ref=gastronomia-resort/imagens.ref,imagens.pathLarge as midia/*`, headerConfig, true)
                        .then(
                          (gastronomia) => {
                            this.HttpService.JSON_GET(`/data/imagens/id/asc/imagens.ref=lago-resort/imagens.ref,imagens.pathLarge as midia/*`, headerConfig, true)
                              .then(
                                (lago) => {
                                  this.HttpService.JSON_GET(`/data/imagens/id/asc/imagens.ref=galeria-resort/imagens.ref,imagens.pathLarge as midia/*`, headerConfig, true)
                                    .then(
                                      (galeria) => {
                                        this.AlertService.alertLoadingClose();
                                        if (res.json().length === 0) {
                                          this.itens = [];
                                          this.GlobalService.notItens = true;
                                          console.log("valor: " + this.GlobalService.notItens);
                                        } else {
                                          this.itens = [
                                            {
                                              dados: res.json().data,
                                              imagens: {
                                                parque: parque.json().data,
                                                acomodacoes: acomodacoes.json().data,
                                                gastronomia: gastronomia.json().data,
                                                lago: lago.json().data,
                                                galeria: galeria.json().data
                                              }
                                            }
                                          ];
                                          console.log(this.itens);
                                          this.GlobalService.notItens = false;
                                          if (this.itens[0])
                                            this.headers = Object.keys(this.itens[0]);
                                        }
                                      }
                                    )
                                }
                              )
                          }
                        )
                    }
                  )
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
    this.Router.navigate([`/resort/${item}`]);
  }

  /************
  UPLOAD MAIS IMAGENS
  *************/
  uploadImagem(item) {
    this.Router.navigate([`/resort/${item}/upload-imagem`]);
  }

  /************
  EDIT
  *************/
  EditImageItem(item) {
    this.Router.navigate([`/resort/${item}/editar-imagem`]);
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
          this.HttpService.JSON_DELETE(`/data/item/caldas/${event.id}/*/id/S`, true, true)
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
      this.AlertService.alertConfirm('Desativar item?', 'Tem certeza que deseja desativar o item?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_DELETE(`/data/item/caldas/${event.id}/*/titulo/N`, true, headerConfig)
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
      this.AlertService.alertConfirm('Ativar item?', 'Tem certeza que deseja ativar o item?')
    )
      .then(res => {

        if (res == true) {
          this.AlertService.alertLoadingShow();
          let headerConfig = {
            stsValue: "A",
            deleteValue: "N"
          }
          this.HttpService.JSON_PUT(`/data/status/activate/caldas/${event.id}`, headerConfig, this.model, true)
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
