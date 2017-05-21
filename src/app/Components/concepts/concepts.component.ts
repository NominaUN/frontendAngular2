import { Component, OnInit } from '@angular/core';
import { ConceptsService } from  '../../Services/concepts/concepts.service';
import { Concept } from '../../Models/concept'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})

export class ConceptsComponent implements OnInit {

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
	}
  
	onSelect(concept:any):void {
		console.log(concept);
	}

	createConcept(concept : Concept){
    this.conceptService.setConcepts(concept).subscribe(
      data => console.log('Success uploading the concept', data),
      error => console.error(`Error: ${error}`), ()=>this.loadConcepts());
  }

}
