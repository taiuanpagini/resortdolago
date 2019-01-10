/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Serviço global de requisicoes http


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

/***********************************************************
SERVICES
***********************************************************/
import { StorageService } from './storage';
import { ConnectService } from './connect';
import { GlobalsService } from './globals';

@Injectable()
export class HttpService {

    URL_api: string;
    URL_REQUEST: string;
    inProcessForm: boolean;

    constructor(
        public http: Http,
        public GlobalService: GlobalsService,
        private StorageService: StorageService,
        // public AlertService: AlertService,
        private ConnectService: ConnectService
    ) {
        this.URL_api = this.GlobalService.urlApi;
    }

    /************
    CONVERSOR HEADER (JSON > STRING)
    *************/
    replace(obj) {
        return _.cloneDeepWith(obj, val => val.toString());
    }

    /************
    HEADER
    *************/
    getHeader(headerConfig, isUpload?: boolean) {
        let headers = new Headers();

        if(isUpload){
            headers.delete('Content-Type');
        }

        //HEADER COM AUTHORIZATION
        (headerConfig.tokenTable) ? this.ConnectService.configConnect['tokenTable'] = headerConfig.tokenTable : null;
        (headerConfig.tokenFieldName) ? this.ConnectService.configConnect['tokenFieldName'] = headerConfig.tokenFieldName : null;
        
        //CARREGANDO DADOS DO USUARIO
        if(this.StorageService.getItem('dataUser')){
            let dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
            this.ConnectService.configConnect['token'] = dadosUser.t;
        }

        //HEADER OBJETO
        (headerConfig.stsValue) ? this.ConnectService.configConnect['stsValue'] = headerConfig.stsValue : null;
        (headerConfig.deleteValue) ? this.ConnectService.configConnect['deleteValue'] = headerConfig.deleteValue : null;

        //CARREGANDO DADOS NO HEADER
        // console.log(JSON.stringify(this.ConnectService.configConnect));
        headers.append('Authorization', JSON.stringify(this.ConnectService.configConnect));
        return headers;
    }

    /************
    POST
    *************/
    JSON_POST(url, header: any, fields, use_url_api?: boolean): Promise<any> {
        
        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        return this.http.post(this.URL_REQUEST, fields, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    GET
    *************/
    JSON_GET(url, header: any, use_url_api?: boolean): Promise<any> {
        
        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        return this.http.get(this.URL_REQUEST, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    PUT
    *************/
    JSON_PUT(url, header: any, fields, use_url_api?: boolean): Promise<any> {
        
        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        return this.http.put(this.URL_REQUEST, fields, { headers: this.getHeader(header) }).toPromise()
    }

    /************
    DELETE
    *************/
    JSON_DELETE(url, header: any, fields?: any, use_url_api?: boolean): Promise<any> {

        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        if(fields){
            return this.http.delete(this.URL_REQUEST, { headers: this.getHeader(header), body: fields}).toPromise()
        }else{
            return this.http.delete(this.URL_REQUEST, { headers: this.getHeader(header) }).toPromise()
        }
    }

    /************
    UPLOAD
    *************/
    JSON_UPLOAD_POST(url, header: any, fields, use_url_api?: boolean): Promise<any> {

        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        return this.http.post(this.URL_REQUEST, fields, { headers: this.getHeader(header, true) }).toPromise()
    }

    JSON_UPLOAD_PUT(url, header: any, fields, use_url_api?: boolean): Promise<any> {
        
        if(use_url_api){
            if (use_url_api === true) { this.URL_REQUEST = this.URL_api + url } else { this.URL_REQUEST = url }
        }else{
            this.URL_REQUEST = this.URL_api + url;
        }

        return this.http.put(this.URL_REQUEST, fields, { headers: this.getHeader(header, true) }).toPromise()
    }

}
