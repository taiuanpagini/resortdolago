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
  selector: 'app-resort-upload',
  templateUrl: './upload.html'
})
export class ResortUploadComponent implements OnInit {

  itemCarregado: any = null;
  itemFotoProduto: any = null;
  imgsSelecionadas: FileList = null;
  itemCarregado2: any = null;
  itemFotoProduto2: any = null;
  imgsSelecionadas2: FileList = null;
  itemCarregado3: any = null;
  itemFotoProduto3: any = null;
  imgsSelecionadas3: FileList = null;
  itemCarregado4: any = null;
  itemFotoProduto4: any = null;
  imgsSelecionadas4: FileList = null;
  itemCarregado5: any = null;
  itemFotoProduto5: any = null;
  imgsSelecionadas5: FileList = null;

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

  selectImgs3(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgsSelecionadas3 = <FileList>event.target.files;
      console.log(this.imgsSelecionadas3);
    }
  }

  selectImgs4(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgsSelecionadas4 = <FileList>event.target.files;
      console.log(this.imgsSelecionadas4);
    }
  }

  selectImgs5(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.imgsSelecionadas5 = <FileList>event.target.files;
      console.log(this.imgsSelecionadas5);
    }
  }

  uploadImgs() {

    this.ActivatedRoute.params.subscribe(params => {
      console.log(this.imgsSelecionadas);

      if (this.imgsSelecionadas === undefined || this.imgsSelecionadas === null) {
        return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

      } else {

        let formDataParque = new FormData();

        for (let i = 0; i < this.imgsSelecionadas.length; i++) {
          formDataParque.append('imgsList[0]', this.imgsSelecionadas[i], this.imgsSelecionadas[i].name);
        }

        formDataParque.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
        formDataParque.append('pathRelative', 'public_html');//PASTA LARGE
        formDataParque.append('pathLarge', 'images/large');//PASTA LARGE
        formDataParque.append('pathMedium', 'images/medium');//PASTA MEDIUM
        formDataParque.append('pathThumb', 'images/thumb');//PASTA THUMB
        formDataParque.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
        formDataParque.append('ref', 'parque-aquatico-resort');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

        //ENVIADO DADOS
        this.GlobalService.inProcessForm = true;
        this.AlertService.alertLoadingShow(true);

        let headerConfig = {
          stsValue: "A",
          deleteValue: "N"
        }
        this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/1920/700/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataParque)
          .then(
            (res) => {

              console.log(res.json());
              this.imgsSelecionadas = null;

              //ENVIANDO A SEGUNDA IMAGEM
              console.log(this.imgsSelecionadas2);

              if (this.imgsSelecionadas2 === undefined || this.imgsSelecionadas2 === null) {
                return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

              } else {

                let formDataAcomodacoes = new FormData();

                for (let i = 0; i < this.imgsSelecionadas2.length; i++) {
                  formDataAcomodacoes.append('imgsList[1]', this.imgsSelecionadas2[i], this.imgsSelecionadas2[i].name);
                }

                formDataAcomodacoes.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
                formDataAcomodacoes.append('pathRelative', 'public_html');//PASTA LARGE
                formDataAcomodacoes.append('pathLarge', 'images/large');//PASTA LARGE
                formDataAcomodacoes.append('pathMedium', 'images/medium');//PASTA MEDIUM
                formDataAcomodacoes.append('pathThumb', 'images/thumb');//PASTA THUMB
                formDataAcomodacoes.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
                formDataAcomodacoes.append('ref', 'acomodacoes-resort');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

                //ENVIADO DADOS
                this.GlobalService.inProcessForm = true;
                this.AlertService.alertLoadingShow(true);

                let headerConfig = {
                  stsValue: "A",
                  deleteValue: "N"
                }
                this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/716/500/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataAcomodacoes)
                  .then(
                    (res) => {

                      console.log(res.json());
                      this.imgsSelecionadas2 = null;

                      //ENVIANDO A TERCEIRA IMAGEM
                      console.log(this.imgsSelecionadas3);

                      if (this.imgsSelecionadas3 === undefined || this.imgsSelecionadas3 === null) {
                        return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

                      } else {

                        let formDataGastronomia = new FormData();

                        for (let i = 0; i < this.imgsSelecionadas3.length; i++) {
                          formDataGastronomia.append('imgsList[2]', this.imgsSelecionadas3[i], this.imgsSelecionadas3[i].name);
                        }

                        formDataGastronomia.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
                        formDataGastronomia.append('pathRelative', 'public_html');//PASTA LARGE
                        formDataGastronomia.append('pathLarge', 'images/large');//PASTA LARGE
                        formDataGastronomia.append('pathMedium', 'images/medium');//PASTA MEDIUM
                        formDataGastronomia.append('pathThumb', 'images/thumb');//PASTA THUMB
                        formDataGastronomia.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
                        formDataGastronomia.append('ref', 'gastronomia-resort');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

                        //ENVIADO DADOS
                        this.GlobalService.inProcessForm = true;
                        this.AlertService.alertLoadingShow(true);

                        let headerConfig = {
                          stsValue: "A",
                          deleteValue: "N"
                        }
                        this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/716/500/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataGastronomia)
                          .then(
                            (res) => {

                              console.log(res.json());
                              this.imgsSelecionadas3 = null;

                              //ENVIANDO A QUARTA IMAGEM
                              console.log(this.imgsSelecionadas4);

                              if (this.imgsSelecionadas4 === undefined || this.imgsSelecionadas4 === null) {
                                return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

                              } else {

                                let formDataLago = new FormData();

                                for (let i = 0; i < this.imgsSelecionadas4.length; i++) {
                                  formDataLago.append('imgsList[3]', this.imgsSelecionadas4[i], this.imgsSelecionadas4[i].name);
                                }

                                formDataLago.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
                                formDataLago.append('pathRelative', 'public_html');//PASTA LARGE
                                formDataLago.append('pathLarge', 'images/large');//PASTA LARGE
                                formDataLago.append('pathMedium', 'images/medium');//PASTA MEDIUM
                                formDataLago.append('pathThumb', 'images/thumb');//PASTA THUMB
                                formDataLago.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
                                formDataLago.append('ref', 'lago-resort');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

                                //ENVIADO DADOS
                                this.GlobalService.inProcessForm = true;
                                this.AlertService.alertLoadingShow(true);

                                let headerConfig = {
                                  stsValue: "A",
                                  deleteValue: "N"
                                }
                                this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/1920/500/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataLago)
                                  .then(
                                    (res) => {

                                      console.log(res.json());
                                      this.imgsSelecionadas4 = null;

                                      //ENVIANDO A QUINTA IMAGEM
                                      console.log(this.imgsSelecionadas5);

                                      if (this.imgsSelecionadas5 === undefined || this.imgsSelecionadas5 === null) {
                                        return this.AlertService.alertInfo(this.SuccessErrorsServices.showError(1005));

                                      } else {

                                        let formDataGaleria = new FormData();

                                        for (let i = 0; i < this.imgsSelecionadas5.length; i++) {
                                          formDataGaleria.append('imgsList[4]', this.imgsSelecionadas5[i], this.imgsSelecionadas5[i].name);
                                        }

                                        formDataGaleria.append('domainUrl', 'http://resortdolago.com.br');//PASTA LARGE
                                        formDataGaleria.append('pathRelative', 'public_html');//PASTA LARGE
                                        formDataGaleria.append('pathLarge', 'images/large');//PASTA LARGE
                                        formDataGaleria.append('pathMedium', 'images/medium');//PASTA MEDIUM
                                        formDataGaleria.append('pathThumb', 'images/thumb');//PASTA THUMB
                                        formDataGaleria.append('idItem', `${params.id}`);//ID A QUAL A IMAGEM PERTENCE (000 PARA GERAL)
                                        formDataGaleria.append('ref', 'galeria-resort');//REF DA IMAGEM (geral, blog, noticias, eventos, galeria...)

                                        //ENVIADO DADOS
                                        this.GlobalService.inProcessForm = true;
                                        this.AlertService.alertLoadingShow(true);

                                        let headerConfig = {
                                          stsValue: "A",
                                          deleteValue: "N"
                                        }
                                        this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/1000/500/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formDataGaleria)
                                          .then(
                                            (res) => {

                                              console.log(res.json());
                                              this.imgsSelecionadas5 = null;

                                              Promise.resolve(this.AlertService.alertLoadingClose(true))
                                                .then(() => {

                                                  Promise.resolve(this.AlertService.alertInfo(res.json().msg))
                                                    .then(() => { this.Router.navigate(['/resort/lista']); })

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
  selectFoto3(event3) {
    let fileList3: FileList = event3.target.files;

    if (fileList3.length > 0) {
      let file: File = fileList3[0];
      this.itemFotoProduto3 = file;
    }
  }
  selectFoto4(event4) {
    let fileList4: FileList = event4.target.files;

    if (fileList4.length > 0) {
      let file: File = fileList4[0];
      this.itemFotoProduto4 = file;
    }
  }
  selectFoto5(event5) {
    let fileList5: FileList = event5.target.files;

    if (fileList5.length > 0) {
      let file: File = fileList5[0];
      this.itemFotoProduto5 = file;
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
