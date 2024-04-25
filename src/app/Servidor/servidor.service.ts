import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operacion } from '../Entidad/Operacion';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) { }

	url = 'http://localhost:8021/Operacion'

	realizarOperacion(operacion: Operacion){
		return this.http.post<Operacion>(this.url, operacion)
	}
}
