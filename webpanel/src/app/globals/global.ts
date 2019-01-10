/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Serviço global de variaveis e funções gerais do sistema


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as screenfull from 'screenfull';
import * as moment from "moment";

/***********************************************************
SERVICES
***********************************************************/
import { StorageService } from './storage';
import { AlertService } from './alert';

declare var $: any;

@Injectable()
export class GlobalService {

  //URL GLOBAIS
  //urlApi: string = 'http://localhost:13579/api';
  urlApi: string = 'https://innsere-rest.herokuapp.com/api/mysql';

  //THEMA CSS
  theme: string = 'innsere';

  isLock: boolean = false;
  isLogged: boolean = false;

  inProcessForm: boolean = false;
  inProcessList: boolean = false;
  notItens: boolean = false;

  exibeMiniMenu: boolean = true;
  isDesktop: boolean;

  //IMG
  bannerReport: string = 'http://www.correiodasemana.com.br/wp-content/uploads/2018/07/Banner-Click-11-02.png';
  iconApp: string = '/assets/img/icon.png';
  logoApp: string = '/assets/img/icon-color.png';
  logoAppFooter: string = '/assets/img/icon-color.png';

  //VARIAVEIS EMPRESA
  nomeEmpresa: string = 'Painel Web';
  imgLogin: string = `/assets/img/bg-login.jpg`;
  imgLogoLogin: string = '/assets/img/logo.png';
  imgLogoNavBar: string = '/assets/img/logo.png';
  img404: string = `/assets/img/bg-404.jpg`;

  txtSaudacao = '';
  dadosUser: any;

  constructor(
    private Title: Title,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private StorageService: StorageService,
    public AlertService: AlertService
  ) { }

  /************
  TITULO PAGINAS
  *************/
  setTituloPage() {
    this.ActivatedRoute.children.forEach((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      this.Title.setTitle(`${this.nomeEmpresa} - ${route.snapshot.data.title}`);
    });
  }

  /************
  FULLSCREEN
  *************/
  fullScreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  /************
  STOP PROPAGATION
  *************/
  stopPropagation(event) {
    event.stopPropagation();
  }

  /************
  SCROLL TOP
  *************/
  scrollToTop() {
    this.Router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) { return; }
      $("#main-panel").animate({ scrollTop: 0 }, 500);
    });
  }

  verificaTop() {
    $("#main-panel").animate({ scrollTop: 0 }, 500);
  }

  /************
  SELECIONA PAGINA
  *************/
  selectPage(page) {
    this.StorageService.setItem('page', page);
  }

  /************
  MASCARA
  *************/
  loadMask(type) {
    if (type === 'CPF') { return '000.000.000-00' };
    if (type === 'CNPJ') { return '00.000.000/0000-00' };
    if (type === 'FONE') { return '(00) 0000-0000' };
    if (type === 'CEL') { return '(00) 0-0000-0000' };
    if (type === 'CEP') { return '00000-000' };
    if (type === 'DATA') { return '00/00/0000' };
    if (type === 'MAC') { return 'AA:AA:AA:AA:AA:AA' };

  }

  /************
  RETORNA SAUDACAO
  *************/
  getSaudacao() {
    let dateNow = new Date();
    let hora = dateNow.getHours();
    console.log(hora);

    if (hora >= 18) {
      this.txtSaudacao = 'Boa noite';

    } else if (hora >= 12) {
      this.txtSaudacao = 'Boa tarde';

    } else if (hora >= 6) {
      this.txtSaudacao = 'Bom dia';

    } else if (hora >= 2) {
      this.txtSaudacao = 'Boa madrugada';

    } else {
      this.txtSaudacao = 'Boa noite';
    }

  }

  /************
  PROXIMO CAMPO AUTOMATICO
  *************/
  goNext(event, maxLength, itemFocus) {
    if (event.target.value.length === maxLength) {
      itemFocus.setFocus();
    }
  }

  /************
  SCROLL ID
  *************/
  goToAncora(id) {
    let element = document.querySelector(`#${id}`);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 500);
    }
  }

  /************
  MOMENT
  *************/
  getMoment(format, date) {

    //DATA
    if (format === 'dmy') {
      return moment(date).format('DD/MM/YYYY');
    }
    if (format === 'dmyh') {
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    }
    if (format === 'ymd') {
      return moment(date).format('YYYY-MM-DD');
    }
    if (format === 'ymdh') {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }

    //HORA
    if (format === 'h') {
      return moment(date).format('HH');
    }
    if (format === 'hm') {
      return moment(date).format('HH:mm');
    }
    if (format === 'hms') {
      return moment(date).format('HH:mm:ss');
    }
  }

  /************
  EDIT PERFIL
  *************/
  editPerfil(id) {
    this.dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
    this.Router.navigate([`/usuario/${this.dadosUser.i}/editar-perfil`]);
  }

  /************
  ALTERAR SENHA
  *************/
  alterarSenha(id) {
    this.dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
    this.Router.navigate([`/usuario/${this.dadosUser.i}/alterar-senha`]);
  }

}