import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from "../chart/lineChart/components/linechart";
import { HeatMapComponent } from '../chart/heatmap/components/heatmap';
import { candleChartComponent } from '../chart/candel/components/candle';
import { BasicChartComponent } from '../chart/basic/components/basic';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [LineChartComponent,HeatMapComponent,candleChartComponent,BasicChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {
  role:string|null=null
  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.role=this.authService.getRole()
  }


}
