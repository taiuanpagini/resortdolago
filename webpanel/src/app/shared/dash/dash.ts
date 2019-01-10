/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component compartilhado Dashboard (tela inicial) da aplicacao


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
import { StorageService } from '../../globals/storage';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-dash',
  templateUrl: './dash.html'
})
export class DashComponent implements OnInit {

  dadosUser: any;
  images: any;

  dataHoje: Date = new Date();

  //CARDS
  usuariosAtivos: any = [];
  bannersAtivos: any = [];
  depoimentosAtivos: any = [];

  //CARDS
  dataCards: any = [];

  //GRAFICO PEDIDOS
  dataPedidos: any = [];
  labelPedidos: any = [];

  //GRAFICO FATURAMENTO
  dataFaturamento: any = [];
  labelFaturamento: any = [];

  //GRAFICO CAIXA
  dataCaixa: any = [];
  labelCaixa: any = [];

  //GRAFICO VENCIMENTOS
  dataVencimentos: any = [];
  labelVencimentos: any = [];

  constructor(
    private Router: Router,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService,
  ) { }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    //CARREGANDO ITENS INICIAIS
    // this.getCards();
    this.getUsuariosAtivos();
    this.getBannersAtivos();
    this.getDepoimentosAtivos();
    this.GlobalService.getSaudacao();
    this.dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
  }

  /************
  GET BANNERS ATIVOS
  *************/
  getUsuariosAtivos() {
    this.AlertService.alertLoadingShow();

    let headerConfig = {
      stsValue: "A",
      deleteValue: "N"
    }
    this.HttpService.JSON_GET(`/data/usuarios/nome/asc/*/id,hashID,sts,nome,email/*`, headerConfig, true)
      .then(
        (res) => {
          console.log(res.json());
          this.usuariosAtivos = res.json().data.length;
        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        }
      )
  }

  getBannersAtivos() {
    this.AlertService.alertLoadingShow();

    let headerConfig = {
      stsValue: "A",
      deleteValue: "N"
    }
    this.HttpService.JSON_GET(`/data/banners,imagens/id/asc/imagens.idItem=banners.hashID,imagens.ref=banners,banners.sts=A/banners.id,banners.hashID,imagens.ref,banners.sts,banners.titulo,banners.primeiraLinha,banners.segundaLinha,imagens.pathMedium as midia/*`, headerConfig, true)
      .then(
        (res) => {
          console.log(res.json());
          this.bannersAtivos = res.json().data.length;
          this.images = res.json().data;
        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        }
      )
  }

  getDepoimentosAtivos() {
    this.AlertService.alertLoadingShow();

    let headerConfig = {
      stsValue: "A",
      deleteValue: "N"
    }
    this.HttpService.JSON_GET(`/data/depoimentos/nomePessoa/asc/*/id,hashID,sts,nomePessoa,depoimento/*`, headerConfig, true)
      .then(
        (res) => {
          console.log(res.json());
          this.depoimentosAtivos = res.json().data.length;
          this.AlertService.alertLoadingClose();
        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        }
      )
  }

}
