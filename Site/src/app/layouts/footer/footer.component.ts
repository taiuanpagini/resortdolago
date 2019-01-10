import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  arContatos: Array<any>;
  arWhats: Array<any> = 
  [
    "(64) 99333-1186",
    "(64) 99337-2597",
    "(64) 99338-7207"
    //"(64) 99335-2587"
  ];
  randInBound = Math.floor(Math.random() * this.arWhats.length);

  constructor(
    private HttpService: HttpService
  ) { }
  
  ngOnInit() {
    this.getNumber();
  }

  getNumber () {
    return this.arWhats[this.randInBound];
  }

}
