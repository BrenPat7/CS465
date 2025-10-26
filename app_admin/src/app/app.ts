import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing';
import { Trip } from './models/trips';  
import { NavbarComponent } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TripListingComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Travlr Getaways Admin!';
  
}
