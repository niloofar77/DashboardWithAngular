import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[] ;
  
};

@Component({
  selector: "app-basic",
  templateUrl: "./basic.html",
  imports:[NgApexchartsModule],
  styleUrls: ["./basic.css"]
})
export class BasicChartComponent  implements AfterViewInit {
  @ViewChild("chart")
   chart!: ChartComponent;
  public chartOptions: ChartOptions;
  ngAfterViewInit() {
    // console.log(this.chart);
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
           
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "کره شمالی",
          "کانادا",
          "ایتالیا",
          "هلند",
          "ایتالیا",
          "فرانسه",
          "ژاپن",
          "امریکا",
          "چین",
          "المان"
        ],
        
      },
      colors: ["red"]
    
  }
}
}