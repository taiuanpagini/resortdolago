/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Component DataTable


COMPONENTS
***********************************************************/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { HttpService } from '../../globals/http';
import { AlertService } from '../../globals/alert';

@Component({
  selector: 'component-data-table',
  templateUrl: './component.html',
  styleUrls: ['style.scss']
})
export class DataTableComponent {

  @Input() titleTable: string;
  @Input() itens: Observable<Array<any>>;
  @Input() headers: Array<any>;
  @Input() itensFilter: Observable<Array<any>>;
  @Input() ordenar: string;
  @Input() totalRegistros: number = 0;

  @Input() fieldCheck: string;

  @Input() exibeFerramentas: boolean = true;
  @Input() exibeAcoes: boolean = true;
  @Input() exibeTitle: boolean = true;
  @Input() exibeCheck: boolean = false;
  @Input() exibeView: boolean = false;
  @Input() exibeEdit: boolean = true;
  @Input() exibeUpload: boolean = true;
  @Input() exibeEditImage: boolean = true;
  @Input() exibeDelete: boolean = true;
  @Input() exibeDesativa: boolean = true;
  @Input() exibeAtiva: boolean = true;

  itemsPerPage: number = 15;
  page: number;
  exibeFiltro: boolean;
  reverse: boolean = false;

  itensSelect: any = [];
  selectTodos: boolean = false;

  @Output() viewEvento = new EventEmitter();
  @Output() editEvento = new EventEmitter();
  @Output() uploadEvento = new EventEmitter();
  @Output() editImageEvento = new EventEmitter();
  @Output() deleteEvento = new EventEmitter();
  @Output() desativarEvento = new EventEmitter();
  @Output() ativarEvento = new EventEmitter();
  @Output() checkEvento = new EventEmitter();

  constructor(
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public AlertService: AlertService
  ) { }

  /************
  SORT VALORES
  *************/
  sortBy(value: string) {
    if (this.ordenar === value) {
      this.reverse = !this.reverse;
    }

    this.ordenar = value;
  }

  /************
  FILTRO
  *************/
  changeFiltro() {
    this.exibeFiltro = !this.exibeFiltro;
  }

  /************
  SEARCH
  *************/
  searchFilter(event) {
    let val = event.target.value.toLowerCase();

    if (val.length === 0) {
      this.itensFilter = this.itens;

    } else {
      let filtro = this.itens.filter(function (o) {
        return Object.keys(o).some(function (k) {
          return o[k].toString().toLowerCase().indexOf(val) != -1 || !val;
        })
      })

      this.itensFilter = filtro;
    }

  }

  /************
  SELECT CHECKBOX
  *************/
  selectCheckItem(event, nomeField) {
    if (event.target.checked === true) {
      let itemAdd = this.itensFilter.filter(itensFilter => itensFilter[nomeField] === event.target.value);
      this.itensSelect.push(itemAdd[0]);

    } else {
      let itemRemove = this.itensSelect.filter(itensFilter => itensFilter[nomeField] !== event.target.value);
      this.itensSelect = itemRemove;
    }
    return this.checkEvento.emit({ itensSelect: this.itensSelect })
  }

  selectAll(event) {
    if (event.target.checked === true) {
      this.itensSelect = this.itensFilter;
    } else {
      this.itensSelect = [];
    }
    return this.checkEvento.emit({ itensSelect: this.itensSelect })
  }

  importSelectBox() {
    if (this.itensSelect.length > 0) { return this.checkEvento.emit({ itensSelect: this.itensSelect }) }
    else {
      return this.AlertService.alertError('Não existem itens para importar!')
    }
  }

  /************
  VIEW
  *************/
  view(id) {
    this.viewEvento.emit({ id: id });
  }

  /************
  EDIT
  *************/
  edit(id) {
    this.editEvento.emit({ id: id });
  }

  /************
  EDIT
  *************/
  editImage(id) {
    this.editImageEvento.emit({ id: id });
  }

  /************
  UPLOAD
  *************/
  upload(id) {
    this.uploadEvento.emit({ id: id });
  }

  /************
  DELETE
  *************/
  delete(id) {
    this.deleteEvento.emit({ id: id });
  }

  /************
  DESATIVAR
  *************/
  desativar(id) {
    this.desativarEvento.emit({ id: id });
  }

  /************
  ATIVAR
  *************/
  ativar(id) {
    this.ativarEvento.emit({ id: id });
  }

}
