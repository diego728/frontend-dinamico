import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit{

  hardList:any;
  softList:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obteberDatos().subscribe(data => {
    this.hardList = data.hskill;
    this.softList = data.sskill;
    })
  }

}
