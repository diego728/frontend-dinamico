import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service'; 

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obteberDatos().subscribe(data => {
      this.miPortfolio = data;
    })
  }

}
