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

declare var $: any;
@Component({
  selector: 'app-banner-upload',
  templateUrl: './upload.html'
})
export class BannerUploadComponent implements OnInit {

  itemCarregado: any = null;
  itemFotoProduto: any = null;
  imgsSelecionadas: FileList = null;

  selectComboCategorias: any;
  selectComboStatus: any;
  selectComboUnidades: any;

  constructor(
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private SuccessErrorsServices: SuccessErrorsServices,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService,
    public StorageService: StorageService
  ) { }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    //CARREGANDO DADOS INICIAIS
    $(".selectpicker").selectpicker();
  }

  selectImgs(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgsSelecionadas = <FileList>event.target.files;
      console.log(this.imgsSelecionadas);
    }
  }

  uploadImgs() {

    this.ActivatedRoute.params.subscribe(params => {
      console.log(this.imgsSelecionadas);

      if (this.imgsSelecionadas === undefined || this.imgsSelecionadas === null) {
        return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

      } else {

        let formData = new FormData();

        for (let i = 0; i < this.imgsSelecionadas.length; i++) {
          formData.append('imgsList[]', this.imgsSelecionadas[i], this.imgsSelecionadas[i].name);
        }

        // formData.append('pathLarge', 'public_html/images/banners/large');//PASTA LARGE
        // formData.append('pathMedium', 'public_html/images/banners/medium');//PASTA MEDIUM
        // formData.append('pathThumb', 'public_html/images/banners/thumb');//PASTA THUMB
        // formData.append('idRefName', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
        // formData.append('refName', 'banners');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

        formData.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
        formData.append('pathRelative', 'public_html');//PASTA LARGE
        formData.append('pathLarge', 'images/large');//PASTA LARGE
        formData.append('pathMedium', 'images/medium');//PASTA MEDIUM
        formData.append('pathThumb', 'images/thumb');//PASTA THUMB
        formData.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
        formData.append('ref', 'banners');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

        //ENVIADO DADOS
        this.GlobalService.inProcessForm = true;
        this.AlertService.alertLoadingShow(true);

        let headerConfig = {
          stsValue: "A",
          deleteValue: "N"
        }
        // this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/662/300/100/imagens/nome/idRefName/refName`, headerConfig, formData)
        this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/662/300/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formData)
          .then(
            (res) => {

              console.log(res.json());
              this.imgsSelecionadas = null;

              Promise.resolve(this.AlertService.alertLoadingClose(true))
                .then(() => {

                  Promise.resolve(this.AlertService.alertInfo(res.json().msg))
                    .then(() => { this.Router.navigate(['/banner/lista']); })

                });

              this.GlobalService.inProcessForm = false;

            },
            (error) => {
              this.GlobalService.inProcessForm = false;
              this.AlertService.alertError("Nenhuma imagem enviada!");
            })

      }
    })

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

}
