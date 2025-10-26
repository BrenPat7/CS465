import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trips'; 

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})

export class EditTrip implements OnInit {
  
  public editForm!: FormGroup;
  trip!: Trip;
  submitted: boolean = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert('Invalid action: Could not find tripCode in local storage.');
      this.router.navigate(['']);
      return;
    }
    console.log('EditTrip::ngOnInit');
    console.log('Trip Code: ' + tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', [Validators.required, Validators.min(1)]],
      perPerson: ['', [Validators.required, Validators.min(0)]],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });

    this.tripService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        if (!value || value.length === 0) {
          this.message = 'No trip found with this code';
        } else {
          this.message = 'Trip found!';
          this.trip = value[0]; 
          this.editForm.patchValue(value[0]);
        }
        console.log(this.message);
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      }
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (err: any) => {
          console.log('Error: ' + err);
        }
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}