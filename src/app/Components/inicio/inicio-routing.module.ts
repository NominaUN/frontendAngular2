import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component'
import { LoggedInGuard } from '../../Services/authentication/logged-in-guard.service';

const routes: Routes = [

{ path : 'inicio', component : InicioComponent,
 canActivate: [LoggedInGuard]

}
       

]

@NgModule({

    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]

})


export class InicioRoutingModule {}

