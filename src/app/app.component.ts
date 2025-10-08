import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
// import { AfterViewInit, Component, ViewChild } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";

// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexDataLabels,
//   ApexTitleSubtitle,
//   ApexStroke,
//   ApexGrid,
//   NgApexchartsModule
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   dataLabels: ApexDataLabels;
//   grid: ApexGrid;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
// };

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   imports:[NgApexchartsModule],
//   styleUrls: ["./app.component.css"]
// })
// export class AppComponent  implements AfterViewInit {
//   @ViewChild("chart")
//    chart!: ChartComponent;
//   public chartOptions: ChartOptions;
//   ngAfterViewInit() {
//     console.log(this.chart); // should log the chart instance
//   }

//   constructor() {
//     this.chartOptions = {
//       series: [
//         {
//           name: "Desktops",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//         },
//       ],
//       chart: {
//         height: 350,
//         type: "line",
//         zoom: { enabled: false },
//       },
//       dataLabels: { enabled: false },
//       stroke: { curve: "straight" },
//       title: { text: "Product Trends by Month", align: "left" },
//       grid: {
//         row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 },
//       },
//       xaxis: {
//         categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],
//       },
//     };
//   }
  
// }
