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
  selector: 'app-atracoes-upload',
  templateUrl: './upload.html'
})
export class AtracoesUploadComponent implements OnInit {

  itemCarregado: any = null;
  itemFotoProduto: any = null;
  imgsSelecionadas: FileList = null;
  itemCarregado2: any = null;
  itemFotoProduto2: any = null;
  imgsSelecionadas2: FileList = null;

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

  selectImgs2(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgsSelecionadas2 = <FileList>event.target.files;
      console.log(this.imgsSelecionadas2);
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
          formData.append('imgsList[0]', this.imgsSelecionadas[i], this.imgsSelecionadas[i].name);
        }

        formData.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
        formData.append('pathRelative', 'public_html');//PASTA LARGE
        formData.append('pathLarge', 'images/large');//PASTA LARGE
        formData.append('pathMedium', 'images/medium');//PASTA MEDIUM
        formData.append('pathThumb', 'images/thumb');//PASTA THUMB
        formData.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
        formData.append('ref', 'logo-atracoes');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

        //ENVIADO DADOS
        this.GlobalService.inProcessForm = true;
        this.AlertService.alertLoadingShow(true);

        let headerConfig = {
          stsValue: "A",
          deleteValue: "N"
        }
        this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/300/200/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formData)
          .then(
            (res) => {

              console.log(res.json());
              this.imgsSelecionadas = null;

              //ENVIANDO A SEGUNDA IMAGEM
                console.log(this.imgsSelecionadas2);
          
                if (this.imgsSelecionadas2 === undefined || this.imgsSelecionadas2 === null) {
                  return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));
          
                } else {
          
                  let formDataPrincipal = new FormData();
          
                  for (let i = 0; i < this.imgsSelecionadas2.length; i++) {
                    formDataPrincipal.append('imgsList[1]', this.imgsSelecionadas2[i], this.imgsSelecionadas2[i].name);
                  }
          
                  formDataPrincipal.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
                  formDataPrincipal.append('pathRelative', 'public_html');//PASTA LARGE
                  formDataPrincipal.append('pathLarge', 'images/large');//PASTA LARGE
                  formDataPrincipal.append('pathMedium', 'images/medium');//PASTA MEDIUM
                  formDataPrincipal.append('pathThumb', 'images/thumb');//PASTA THUMB
                  formDataPrincipal.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
                  formDataPrincipal.append('ref', 'principal-atracoes');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)
          
                  //ENVIADO DADOS
                  this.GlobalService.inProcessForm = true;
                  this.AlertService.alertLoadingShow(true);
          
                  let headerConfig = {
                    stsValue: "A",
                    deleteValue: "N"
                  }
                  this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/1145/500/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataPrincipal)
                    .then(
                      (res) => {
          
                        console.log(res.json());
                        this.imgsSelecionadas2 = null;
          
                        Promise.resolve(this.AlertService.alertLoadingClose(true))
                          .then(() => {
          
                            Promise.resolve(this.AlertService.alertInfo(res.json().msg))
                              .then(() => { this.Router.navigate(['/atracao/lista']); })
          
                          });
          
                      },
                      (error) => {
                        this.GlobalService.inProcessForm = false;
                        this.AlertService.alertError("Nenhuma imagem enviada!");
                      })
          
                  this.GlobalService.inProcessForm = false;
          
                }

            },
            (error) => {
              this.GlobalService.inProcessForm = false;
              this.AlertService.alertError("Nenhuma imagem enviada!");
            })

        this.GlobalService.inProcessForm = false;

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
  selectFoto2(event2) {
    let fileList2: FileList = event2.target.files;

    if (fileList2.length > 0) {
      let file: File = fileList2[0];
      this.itemFotoProduto2 = file;
    }
  }

  /************
  REMOVE FOTO
  *************/
  removeFoto() {
    this.itemFotoProduto = null;
  }
  removeFoto2() {
    this.itemFotoProduto2 = null;
  }

}
