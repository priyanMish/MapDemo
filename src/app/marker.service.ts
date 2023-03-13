import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http:HttpClient) { }
  
  capitals:string = `../assets/data/usa-capitals.geojson`;

  ongetData():Observable<any>{
    return this.http.get(`../assets/data/products.json`)
  }
  ongetGeoData():Observable<any>{
    return this.http.get(`../assets/data/usa-capitals.geojson`)
  }


  makeCapitalMarkers(map: L.Map): void { 

    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        
        marker.addTo(map);
      }
    });
  }
}
