import { Component } from '@angular/core'	
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


    
    
@Component({
    selector: 'error-foreignkey',
    template: `    <modal #advertencia>
		<modal-header>
			<h4 class="modal-title">Error</h4>
		</modal-header>
		<modal-body>
			No se puede borrar, hay empleados asociados a esa area
		</modal-body>
		<modal-footer>
			<button type="button" class="btn btn-primary" (click)="modal.close()">Ok</button>
		</modal-footer>
	</modal>`,


    })
export class ErrorForeignKey{


}