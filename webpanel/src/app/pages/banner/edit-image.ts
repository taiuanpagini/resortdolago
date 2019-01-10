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
import { StorageService } from '../../globals/storage';
import { SuccessErrorsServices } from '../../globals/sucess.errors';
import { PARAMETERS } from '@angular/core/src/util/decorators';

declare var $: any;
@Component({
  selector: 'app-banner-edit-image',
  templateUrl: './edit-image.html'
})
export class BannerEditImageComponent implements OnInit {

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
  ) { 
    //CARREGANDO DADOS INICIAIS
    this.getItem();
  }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    $(".selectpicker").selectpicker();
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
      this.HttpService.JSON_GET(`/data/banners,imagens/*/*/imagens.idItem=banners.hashID,imagens.ref=banners,banners.hashId=${params.id}/banners.id,banners.hashID,imagens.ref,banners.sts,banners.titulo,banners.primeiraLinha,banners.segundaLinha,imagens.pathMedium as midia/1`, headerConfig, true)
        .then(
          (res) => {
            console.log(res.json());
            this.AlertService.alertLoadingClose();
            if (res.json().length === 0) {
              this.GlobalService.notItens = true;
            } else {
              console.log(this.itemCarregado = res.json().data[0]);
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
        this.HttpService.JSON_DELETE(`/file/ftp/delete/imagens/nome/idItem`, headerConfig, formData)
          .then(
            (res) => {

              console.log(res.json());

              this.HttpService.JSON_UPLOAD_POST(`/file/ftp/images/662/300/100/imagens/nome/idItem/ref/pathLarge/pathMedium/pathThumb`, headerConfig, formData)
              .then(
                (res) => {
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
                  this.AlertService.alertError(JSON.parse(error._body));    
                }
              )              
            },
            (error) => {
              this.GlobalService.inProcessForm = false;
              this.AlertService.alertError(JSON.parse(error._body));
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
