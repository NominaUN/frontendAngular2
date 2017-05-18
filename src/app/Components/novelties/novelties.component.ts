import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { NoveltiesService } from  '../../Services/novelties/novelties.service';
import { EmployeesService } from  '../../Services/employees/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Noveltie } from '../../Models/resNoveltiesData.model';

@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent implements OnInit {

  novelties=[];
  noveltie= new Noveltie();
  myForm:FormGroup;
  isUpdating:boolean=false;

  constructor(
    private noveltiesService: NoveltiesService
    ) { }

  ngOnInit():void {
    this.noveltiesService.getNovelties().subscribe (
       (resNoveltiesData => this.novelties = resNoveltiesData)
    );
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
          console.log('Success uploading the noveltie', data);
          this.ngOnInit();
          this.noveltie = new Noveltie();
          this.isUpdating = false;
        },
        error => console.error(`Error: ${error}`)
        )
    }
  }

    deleteNoveltie(id:number):void{
    this.noveltiesService.delNoveltie(id)
    .subscribe(
      data => {
        console.log('Success deleted the noveltie', data);
        this.ngOnInit();
      },
      error => console.error(`Error: ${error}`)
      )
  }

  onSelect(noveltie:Noveltie):void {
    this.noveltie = JSON.parse(JSON.stringify(noveltie));
    this.isUpdating = true;
  }

}
