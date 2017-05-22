import { Component, OnInit } from '@angular/core';
import { ConceptsService } from  '../../Services/concepts/concepts.service';
import { Concept } from '../../Models/concept'
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})

export class ConceptsComponent implements OnInit {

	private _success = new Subject<string>();
  successMessage: string;   

  private _fail = new Subject<string>();
  failMessage: string;

	concepts: Concept[];
	concept = new Concept;
	constructor(private conceptService: ConceptsService) {
	}
  
	loadConcepts(){
		this.conceptService.getConcepts().subscribe(
			(resConceptData => this.concepts = resConceptData)
      ); 
	}
  
	ngOnInit() {
		this.loadConcepts();   

		this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(12000).subscribe(() => this.successMessage = null);

    this._fail.subscribe((message) => this.failMessage = message);
    this._fail.debounceTime(120000).subscribe(() => this.failMessage = null);
	}
  
	onSelect(concept:any):void {
		console.log(concept);
	}

	createConcept(concept : Concept){
    this.conceptService.setConcepts(concept).subscribe(
      data => console.log(this._success.next('Concepto: ' + concept.concept_name + ', creado exitosamente!'), data),
      error => console.error(this._fail.next('Concepto no pudo ser creado. '+ `Error: ${error}`)), ()=>this.loadConcepts());
  }

}
