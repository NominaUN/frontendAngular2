import { Component, OnInit } from '@angular/core';
import { ConceptsService } from  '../../Services/concepts/concepts.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  concepts=[];

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

  onClick(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  	if (value === "setConcept") {
  		var nombre = (<HTMLInputElement>document.getElementById("nameConcept")).value;
  		var category = (<HTMLInputElement>document.getElementById("categoryConcept")).value;
  		this.conceptService.setConcepts(nombre, category);
  		location.reload();
  	}
  }

}
