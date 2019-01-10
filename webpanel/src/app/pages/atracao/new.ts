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
import { DatepickerOptions } from 'ng2-datepicker';
import * as ptLocale from 'date-fns/locale/pt';

declare var $: any;
@Component({
  selector: 'app-atracoes-new',
  templateUrl: './new.html'
})
export class AtracoesNewComponent implements OnInit {

  itemCarregado: any = null;
  itemFotoProduto: any = null;
  form: any;

  constructor(
    private Router: Router,
    private SuccessErrorsServices: SuccessErrorsServices,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService,
    public SessionService: SessionService
  ) { }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    //CARREGANDO DADOS INICIAIS

    $(".selectpicker").selectpicker();
  }

  /************
  POST
  *************/
  postItem(form) {

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
      this.HttpService.JSON_UPLOAD_POST(`/data/atracoes/titulo`, headerConfig, form.value, true)//CADASTRO DE ATRAÇÕES

        .then(
          (res) => {

            Promise.resolve(this.AlertService.alertInfo(res.json().msg))
              .then(() => { 
                this.Router.navigate([`atracao/${res.json().data[0].hashID}/upload-imagem`]); 
                console.log(res.json().data[0].hashID);
              })

            this.GlobalService.inProcessForm = false;
            form.reset();

          },
          (error) => {
            this.GlobalService.inProcessForm = false;
            this.AlertService.alertError(JSON.parse(error._body));
          })

    }

  }

  /************
  SELECIONA FOTO
  *************/
  selectFoto(event) {
    let fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.itemFotoProduto = file;
    }
  }

  /************
  REMOVE FOTO
  *************/
  removeFoto() {
    this.itemFotoProduto = null;
  }

  /************
  DELETE FOTO
  *************/
  deletePhoto(path, id, form) {
    return Promise.resolve(
      this.AlertService.alertConfirm('Excluir foto?', 'Tem certeza que deseja excluir a foto do produto?')
    )
      .then(res => {

        if (res == true) {

          this.AlertService.alertLoadingShow();

          this.HttpService.JSON_DELETE(`/webservice/delete-file/${path}/${id}/photo/produtos`, true, true)
            .then(
              (res) => {
                this.postItem(form);
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
