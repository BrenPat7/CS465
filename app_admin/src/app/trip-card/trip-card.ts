import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trips';
import { Router, RouterLink } from '@angular/router';
import { Authentication } from '../services/authentication'; 

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent implements OnInit {
  @Input() trip!: Trip;

  constructor( 
    private router: Router, 
    private authenticationService: Authentication
  ) {} 

  public isLoggedIn(): boolean { 
    return this.authenticationService.isLoggedIn(); 
  } 

  ngOnInit(): void {
  }

  public editTrip(): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', this.trip.code);
    this.router.navigate(['edit-trip']);
  }
}