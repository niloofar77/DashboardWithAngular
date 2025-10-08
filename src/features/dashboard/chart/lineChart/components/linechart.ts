import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
;
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
  ApexYAxis
} from "ng-apexcharts";
import { toPersianNumber } from "../../../../../app/shared/utils/number.utils";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip
};

@Component({
  selector: "app-linechart",
  templateUrl: "./linechart.html",
  imports:[NgApexchartsModule],
  styleUrls: ["./linechart.css"]
})
export class LineChartComponent implements AfterViewInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];

    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: data 
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: false },
      },
      dataLabels: {
        enabled: true,
        formatter: (val:any) => toPersianNumber(val) 
      },
      stroke: { curve: "straight" },
      title: { text: "نمودار فروش هر ماه", align: "center" },
      grid: {
        row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 },
      },
    yaxis : {
        labels: {
          formatter: (val) => toPersianNumber(val) ,
          style:{
            colors: ["#5D3FD3"] 
          }
        },
       
        
      },
      tooltip: {
        y: {
          formatter: (val:any) => toPersianNumber(val) 
        }
      },
      xaxis: {
        categories: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],
      },
    };
  }

  ngAfterViewInit() {}
}
