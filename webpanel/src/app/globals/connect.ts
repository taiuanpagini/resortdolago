/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Servico global de conexão


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';

/***********************************************************
SERVICES
***********************************************************/

declare var $: any;
@Injectable()
export class ConnectService {

    configConnect = {
        
        // dbConfig:{
        //     host: "resortdo_db.mysql.dbaas.com.br",
        //     user: "resortdo_db",
        //     password: "R123!@#321#@!",
        //     database: "resortdo_db",
        // },
        dbConfig:{
            host: "159.89.42.245",
            user: "resortdo_novo",
            password: "resortdonovo",
            database: "resortdo_db",
        },
        
        ftpConfig:{
            host: "159.89.42.245",
            user: "resortdo",
            password: "@A123mudar",

        },
        
        mailConfig: {
            connect: {
                host: "smtp.gmail.com",
                user: "taiuan.pagini@gmail.com",
                password: "030312Tm",
                ssl: true
            },
            extras: {
                fromName: "Atendimento Personalizado Via Site",
                fromEmail: "contato@resortdolago.com.br",
                toName: "Atendimento Personalizado Via Site",
                toEmail: "comercial.hotel@resortdolago.com.br"
            } 
        },
        
        tokenTable: "usuarios",
        tokenFieldName: "token",
        token: null,

        idFieldName: "hashID",

        stsFieldName: "sts",
        stsValue: "A",

        createFieldName: 'created',
        updateFieldName: 'updated',

        deleteFieldName: "deleted",
        deleteValue: "N"
    }

    constructor() { }

}