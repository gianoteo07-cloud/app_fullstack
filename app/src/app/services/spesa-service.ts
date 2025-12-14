import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class SpesaService {
  getLista() {
    throw new Error("Method not implemented.");
  }
  aggiungiElemento(val: string) {
    throw new Error("Method not implemented.");
  }
private x =”url + endpoint”;
constructor(private http: HttpClient) {}
getLista() {
return this.http.get(this.x);
}
aggiungiElemento(elemento: string) {
return this.http.post(this.x, { elemento });
}
}