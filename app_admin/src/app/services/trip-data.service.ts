import { Inject, Injectable } from '@angular/core'; 
import { Trip } from '../models/trips'; // Corrected the path to match the actual file location
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'; 
import { AuthResponse } from '../models/auth-response'; 
import { BROWSER_STORAGE } from '../storage'; 
import { Authentication} from '../services/authentication'; 
@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  constructor( 
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage 
    ) {} 
  url: string = 'http://localhost:3000/api/trips';
   baseUrl = 'http://localhost:3000/api';
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
    
  }
  addTrip(trip: Trip): Observable<any> {
    return this.http.post<Trip>(this.url, trip);
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.url + '/code/' + tripCode);
  }

  updateTrip(trip: Trip): Observable<any> {
    return this.http.put<Trip>(this.url + '/' + trip._id, trip);
  }

    // Call to our /login endpoint, returns JWT 
  login(user: User, passwd: string) : Observable<AuthResponse> { 
    // console.log('Inside TripDataService::login'); 
    return this.handleAuthAPICall('login', user, passwd); 
  } 
 
  // Call to our /register endpoint, creates user and returns JWT 
  register(user: User, passwd: string) : Observable<AuthResponse> { 
    // console.log('Inside TripDataService::register'); 
    return this.handleAuthAPICall('register', user, passwd); 
  } 
 
  // helper method to process both login and register methods 
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : 
Observable<AuthResponse> { 
    // console.log('Inside TripDataService::handleAuthAPICall'); 
    let formData = { 
      name: user.name, 
      email: user.email, 
      password: passwd 
    }; 
 
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, 
formData); 
  }
}
