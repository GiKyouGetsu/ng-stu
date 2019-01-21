import { Routes } from "@angular/router";

export const appRoute:Routes =[
    {
        path: '',
        redirectTo: 'home/1',
        pathMatch: 'full'
    },
    {
        path: 'home/:page',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'link/:page',
        loadChildren: './links/link.module#LinkModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
]