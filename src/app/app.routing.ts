
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './Components/login/login.component';
import {AboutusComponent} from './Components/aboutus/aboutus.component';

import {ResetComponent} from './Components/reset/reset.component';



const appRoutes: Routes= [
    {
        path:'',
        component: LoginComponent
    },

    {
        path:'aboutus',
        component: AboutusComponent
    },


    {
        path:'reset',
        component: ResetComponent
    
    }


];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);