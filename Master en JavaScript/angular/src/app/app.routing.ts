// Importar modulo de angular para el router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar los componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegosComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { Router } from "express";

// Array de configuracion de las rutas
const appRoutes: Routes = [
    {path: '', component: ZapatillasComponent},
    {path: 'home', component: ZapatillasComponent},
    {path: 'videojuegos', component: VideojuegosComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ZapatillasComponent}
];

// Exportar el modulo del router que se refiere a la constante appRoutes que cremos recien
export const appRoutingProviders: any[] = []; // Servicio del router
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);