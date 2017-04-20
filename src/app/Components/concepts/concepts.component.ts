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

  ngOnInit() {
     this.conceptService.getConcepts().subscribe(
     (resConceptData => this.concepts = resConceptData)
     );

    
  }
  
  onSelect(concept:any):void {
  	console.log(concept);
  }

}
