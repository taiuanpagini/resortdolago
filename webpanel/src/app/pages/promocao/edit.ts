/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component administração de categorias da aplicação


COMPONENTS
***********************************************************/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { HttpService } from '../../globals/http';
import { AlertService } from '../../globals/alert';
import { StorageService } from './../../globals/storage';
import { SuccessErrorsServices } from '../../globals/sucess.errors';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

declare var $: any;
@Component({
  selector: 'app-promocao-edit',
  templateUrl: './edit.html'
})
export class PromocaoEditComponent implements OnInit {

  itemCarregado: any = null;
  itemFotoProduto: any = null;
  imgsSelecionadas: FileList = null;

  selectComboCategorias: any;
  selectComboStatus: any;
  selectComboUnidades: any;

  options: DatepickerOptions = {
    minYear: 2018,
    displayFormat: 'DD[/]MM[/]YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'ddd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: ptLocale,
    minDate: new Date(),
    barTitleIfEmpty: 'Selecione uma data'
  };

  constructor(
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private SuccessErrorsServices: SuccessErrorsServices,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService
  ) {
  }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    //CARREGANDO DADOS INICIAIS
    this.getItem();
    $(".selectpicker").selectpicker();
  }

  /************
  COMBO
  *************/
  comboCategorias() {

    this.AlertService.alertLoadingShow();
    this.GlobalService.inProcessForm = true;
    this.HttpService.JSON_GET(`/categorias/${this.StorageService.getItem('i')}`, true, true)
      .then(
        (res) => {
          this.selectComboCategorias = res.json();
          setTimeout(() => {
            $('.selectpicker').selectpicker('refresh');
          }, 150);
          this.GlobalService.inProcessForm = false;

          //CARREGANDO STATUS APOS CATEGORIAS
          this.getItem();
        },
        (error) => {
          this.GlobalService.inProcessForm = false;
          this.AlertService.alertError(JSON.parse(error._body));
        })

  }

  /************
  GET ITEM
  *************/
  getItem() {
    this.ActivatedRoute.params.subscribe(params => {

      let headerConfig = {
        stsValue: "A",
        deleteValue: "N"
      }
      this.HttpService.JSON_GET(`/data/item/banners/${params.id}/*/titulo`, headerConfig)
        .then(
          (res) => {

            console.log(res.json());
            this.AlertService.alertLoadingClose();
            if (res.json().length === 0) {
              this.GlobalService.notItens = true;
            } else {
              this.itemCarregado = res.json().data;
              setTimeout(() => {
                $('.selectpicker').selectpicker('refresh');
              }, 150);
            }
          },
          (error) => {
            this.GlobalService.notItens = true;
            this.AlertService.alertError(JSON.parse(error._body));
          })
    })
  }

  /************
  PUT
  *************/
  putItem(form) {
    this.ActivatedRoute.params.subscribe(params => {
      if (form.status === 'INVALID') {
        return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1001));

      } else {

        //ENVIADO DADOS
        this.GlobalService.inProcessForm = true;
        this.AlertService.alertLoadingShow();

        let headerConfig = {
          stsValue: "A",
          deleteValue: "N"
        }
        this.HttpService.JSON_PUT(`/data/item/banners/${params.id}/*/titulo`, headerConfig, form.value)//CADASTRO DE bannerS      
          .then(
            (res) => {

              Promise.resolve(this.AlertService.alertInfo(res.json().msg))
                .then(() => { this.Router.navigate(['/banner/lista']); })

              this.GlobalService.inProcessForm = false;
              form.reset();

            },
            (error) => {
              this.GlobalService.inProcessForm = false;
              this.AlertService.alertError(JSON.parse(error._body));
            })

      }
    })

  }

  /************
  DUPLICA PRODUTO
  *************/
  duplicaProduto() {

    return Promise.resolve(
      this.AlertService.alertConfirm('Duplicar produto?', 'Tem certeza que deseja duplicar este produto?')
    )
      .then(res => {

        if (res == true) {

          this.AlertService.alertLoadingShow();

          this.HttpService.JSON_POST(`/webservice/duplicate/item/produtos/${this.itemCarregado.id}/true`, this.itemCarregado, true, true)
            .then(
              (res) => {
                this.Router.navigate([`/administracao/produtos/${res.json().idItem}`]);
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

}
