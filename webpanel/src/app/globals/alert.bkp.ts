/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Servico global de alert utilizando componente sweetalert2


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

/***********************************************************
SERVICES
***********************************************************/
import { SuccessErrorsServices } from './sucess.errors';


declare var $: any;
@Injectable()
export class AlertService {

    constructor(
        private SuccessErrorsServices: SuccessErrorsServices,
    ) { }

    /************
    LOADING
    *************/
    alertLoadingShow() {
        swal({
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: 'swal2-transparent',
            onOpen: () => {
                swal.showLoading()
            }
        })
    }
    alertLoadingClose() {
        Promise.resolve('xpto')
            .then(() => {
                swal({
                    timer: 10,
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    customClass: 'swal2-transparent',
                    onOpen: () => {
                        swal.close();
                    }
                })
            });
    }

    /************
    SUCESSO
    *************/
    alertSuccess(msg) {
        return swal({
            title: this.SuccessErrorsServices.showOthers(1001),
            text: msg,
            type: 'success',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
    }

    /************
    ERRO
    *************/
    alertError(msg) {
        return swal({
            title: this.SuccessErrorsServices.showOthers(1002),
            text: msg,
            type: 'error',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
    }

    /************
    INFO
    *************/
    alertInfo(msg) {
        return swal({
            title: this.SuccessErrorsServices.showOthers(1003),
            text: msg,
            type: 'info',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
    }

    /************
    QUESTION
    *************/
    alertQuestion(msg) {
        return swal({
            title: this.SuccessErrorsServices.showOthers(1003),
            text: msg,
            type: 'question',
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
        })
    }

    /************
    CONFIRM
    *************/
    alertConfirm(question, msg) {
        return swal({
            title: question,
            text: msg,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.SuccessErrorsServices.showOthers(1004),
            cancelButtonText: this.SuccessErrorsServices.showOthers(1005),
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(function () { return true },
            function () { return false })
    }

}