import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
        data: { animation: 'Home' }
    },
    {
        path: 'itinerary',
        loadComponent: () => import('./itinerary/itinerary.component').then(mod => mod.ItineraryComponent),
        data: { animation: 'Article' }
    },
    {
        path: 'explore',
        loadComponent: () => import('./explore/explore.component').then(mod => mod.ExploreComponent),
        data: { animation: 'Explore' }
    }
];
