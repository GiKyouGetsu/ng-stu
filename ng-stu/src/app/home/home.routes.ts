import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PictureComponent } from "./picture/picture.component";
import { TextComponent } from "./text/text.component";

export const homeRoutes: Routes =[
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'pictures',
                component: PictureComponent
            },
            {
                path: 'text',
                component: TextComponent
            }
        ]
    }
]