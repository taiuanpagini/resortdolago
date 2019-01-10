/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Serviço global de retornos (erros e sucessos) em requisições


COMPONENTS
***********************************************************/
import { Injectable } from '@angular/core';

@Injectable()
export class SuccessErrorsServices {

    others = {
        1001: 'Sucesso!',
        1002: 'Erro!',
        1003: 'Atenção!',
        1004: 'Sim',
        1005: 'Não',
        1006: 'Excluir item?',
        1007: 'Tem certeza que deseja encerrar sua sessão?',
        1008: 'Tem certeza que deseja excluir o item?'
    }

    errors = {
        1001: 'Preencha todos os campos!',
        1002: 'Usuário ou senha inválidos!',
        1003: 'Informe o que deseja pesquisar',
    }

    success = {
        1001: 'Login efetuado com sucesso!',
    }

    /************
	SHOW OTHERS
	*************/
    showOthers(code: number) { return this.others[code]; }

	/************
	SHOW ERROR
	*************/
    showError(code: number) { return this.errors[code]; }

	/************
	SHOW SUCCESS
	*************/
    showSuccess(code: number) { return this.success[code]; }

}