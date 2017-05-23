import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NoveltiesService } from  '../../Services/novelties/novelties.service';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Noveltie } from '../../Models/resNoveltiesData.model';

@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent implements OnInit {

  private _success = new Subject<string>();
  successMessage: string;   

  private _fail = new Subject<string>();
  failMessage: string;

  novelties=[];
  noveltie= new Noveltie();
  employees=[];
  myForm:FormGroup;
  isUpdating:boolean=false;

  constructor(
    private employeesService: EmployeesService,
    private noveltiesService: NoveltiesService
    ) { }

  ngOnInit():void {
    this.noveltiesService.getNovelties().subscribe (
      (resNoveltiesData => this.novelties = resNoveltiesData)
      );
    this.employeesService.getEmployees().subscribe(
      (resEmployeeData => {
        console.log(resEmployeeData.data);
        this.employees = resEmployeeData.data;
      })
      );

    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
  }

  createNoveltie(noveltie: Noveltie) {
    if (this.isUpdating) {
      this.noveltiesService.updateNoveltie(noveltie)
      .subscribe(
        data => {
          this.ngOnInit();
        },
        error => console.error(`Error: ${error}`)
        )

    } else {
      this.noveltiesService.setNoveltie(noveltie)
      .subscribe(
        data => {
          console.log(this._success.next('Novedad registrada exitosamente!'), data);
          this.ngOnInit();
          this.noveltie = new Noveltie();
          this.isUpdating = false;
        },
        error => console.error(this._fail.next('Novedad no pudo ser registrada '+ `Error: ${error}`))
        )
    }
  }

  cancel(){
    this.noveltie = new Noveltie();
    this.isUpdating = false;
  }

  deleteNoveltie(id:number):void{
    this.noveltiesService.delNoveltie(id)
    .subscribe(
      data => {
        console.log(this._success.next('Novedad eliminada exitosamente!'), data);
        this.ngOnInit();
      },
      error => console.error(this._fail.next('Novedad no pudo ser eliminada '+ `Error: ${error}`))
      )
  }

  onSelect(noveltie:Noveltie):void {
    let noveltieToUpdate = JSON.parse(JSON.stringify(noveltie));

    console.log(noveltie, noveltieToUpdate);
    this.noveltie = JSON.parse(JSON.stringify(noveltie));
    this.isUpdating = true;
  }

}
