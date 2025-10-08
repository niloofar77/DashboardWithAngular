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
  title: ApexTitleSubtitle;
  colors: any;
  
};

@Component({
  selector: "app-heatmap",
  templateUrl: "./heatmap.html",
  imports:[NgApexchartsModule],
  styleUrls: ["./heatmap.css"]
})
export class HeatMapComponent  implements AfterViewInit {
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
          name: "معیار1",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار 2",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار3 ",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار4",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار5",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار6",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار7",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معبار8",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "معیار9",
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      chart: {
        height: 350,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: "نمودار حرارتی",
         align: "center"
      }
    };

}
public generateData(count:any, yrange:any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
}

