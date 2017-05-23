import { Component, OnInit } from '@angular/core';
import { StatisticsService } from  '../../Services/statistics/statistics.service';
import { Employee } from '../../Models/resEmployeeData.model'
import { Noveltie } from '../../Models/resNoveltiesData.model'
import { Detail } from '../../Models/payday-detail'
import { Vacation } from '../../Models/vacation'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

	statsone: Employee[];
	statstwo: Noveltie[];
	statsthr: Detail[];
	statsfou: Vacation[];
	dataf = [];

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
		this.statisticsService.getEmployeesStats().subscribe(
			(resEmployeeData => this.statsone = resEmployeeData)
		);
		this.statisticsService.getNoveltiesStats().subscribe(
			(resNoveltieData => this.statstwo = resNoveltieData)
		);
		this.statisticsService.getLiquidationsStats().subscribe(
			(resDetailData => this.statsthr = resDetailData)
		);
		this.statisticsService.getVacationsStats().subscribe(
			(resVacationData => this.statsfou = resVacationData)
		);
	}

	loadG1(){
		this.dataf = [];
		for (var i=0; i<this.statsone.length; i++){
			this.barChartLabels[i] = this.statsone[i].id + '. ' + this.statsone[i].first_name;
			this.dataf[i] = this.statsone[i].salary;
		};
		this.barChartData = [
			{data: this.dataf, label: 'Salario'}
		];
		this.isDataAvailable = true;
	}

	loadG2(){
		this.dataf = [];
		for (var i=0; i<this.statsone.length; i++){
			this.barChartLabels[i] = this.statsone[i].id + '. ' + this.statsone[i].first_name;
		};
		for (var i=0; i<this.statstwo.length; i++){
			for (var j=0; j<this.barChartLabels.length; i++){
				if (this.barChartLabels[j].substring(0,1) === this.statstwo[i].employee.id){
					this.dataf[i] = this.dataf[i] + 1;
					break;
				}
			}
		};
		this.barChartData = [
			{data: this.dataf, label: 'Novedades'}
		];
		this.isDataAvailable = true;
	}

	loadG3(){
		this.dataf = [];
		for (var i=0; i<this.statsone.length; i++){
			this.barChartLabels[i] = this.statsone[i].id + '. ' + this.statsone[i].first_name;
		};
		for (var i=0; i<this.statsthr.length; i++){
			for (var j=0; j<this.barChartLabels.length; i++){
				if (this.barChartLabels[j].substring(0,1) === this.statsthr[i].employee.id){
					this.dataf[i] = this.dataf[i] + this.statsthr[i].win - this.statsthr[i].loss;
					break;
				}
			}
		};
		this.barChartData = [
			{data: this.dataf, label: 'Neto Devengado'}
		];
		this.isDataAvailable = true;
	}

	loadG4(){
		this.dataf = [];
		for (var i=0; i<this.statsone.length; i++){
			this.barChartLabels[i] = this.statsone[i].id + '. ' + this.statsone[i].first_name;
		};
		for (var i=0; i<this.statsfou.length; i++){
			for (var j=0; j<this.barChartLabels.length; i++){
				if (this.barChartLabels[j].substring(0,1) === this.statsfou[i].employee.id){
					this.dataf[i] = this.dataf[i] + this.statsfou[i].taken_days;
					break;
				}
			}
		};
		this.barChartData = [
			{data: this.dataf, label: 'Vacaciones Tomadas'}
		];
		this.isDataAvailable = true;
	}

}
