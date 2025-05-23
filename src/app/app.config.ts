import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    //GHHHH
    provideRouter(routes),
    provideHttpClient(withFetch()),
    FormsModule,
    CommonModule
  ]
};