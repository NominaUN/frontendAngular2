import { Component, OnInit } from '@angular/core';
import { StatisticsService } from  '../../Services/statistics/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  statistics=[];

  constructor(private statisticsService: StatisticsService) {}

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [], label: 'Series A'},
    {data: [], label: 'Series B'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public isDataAvailable:boolean = false;

  ngOnInit() {
    this.loadG1();
  }

  loadG1(){
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.barChartData = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
    this.isDataAvailable = true;
  }

  loadG2(){
    /*var canvas = <HTMLCanvasElement> document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);*/
    this.barChartLabels = ['Andrew','Takashi','Gerardo','Rosa','Adolf'];
    this.barChartData = [
      {data: [100, 230, 145, 67, 123], label: 'Series A'},
      {data: [145, 198, 155, 89, 112], label: 'Series B'}
    ];
    this.isDataAvailable = true;
  }

  loadG3(){

    this.barChartLabels = ['1','2','3','4','5','6'];
    this.barChartData = [
      {data: [5, 6, 5, 3, 2, 5], label: 'Series A'},
      {data: [3, 4, 1, 7, 4, 3], label: 'Series B'}
    ];
    this.isDataAvailable = true;
  }

  loadG4(){
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.barChartData = [
      {data: [45, 43, 44, 50, 46, 48, 50], label: 'Series A'},
      {data: [28, 32, 25, 31, 34, 27, 30], label: 'Series B'}
    ];
    this.isDataAvailable = true;
  }

}
