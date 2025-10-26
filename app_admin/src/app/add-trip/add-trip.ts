import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';
import { Trip } from '../models/trips';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip implements OnInit {
  addForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', [Validators.required, Validators.min(1)]],
      perPerson: ['', [Validators.required, Validators.min(0)]],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.tripService.addTrip(this.addForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (err: any) => {
          console.log('Error: ' + err);
        }
      });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}