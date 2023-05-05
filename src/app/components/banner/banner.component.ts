import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  bannerList:any;
  constructor(private datosPortfolio:PortfolioService){}
  ngOnInit(): void {
    this.datosPortfolio.obteberDatos().subscribe(data => {
      this.bannerList = data.banner
    })
  }

}
