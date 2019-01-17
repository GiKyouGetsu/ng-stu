import { Routes } from "@angular/router";

export const appRoute:Routes =[
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'link',
        loadChildren: './links/link.module#LinkModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
]