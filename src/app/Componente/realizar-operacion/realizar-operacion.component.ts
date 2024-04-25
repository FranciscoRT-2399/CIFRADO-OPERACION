import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Operacion } from '../../Entidad/Operacion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-realizar-operacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './realizar-operacion.component.html',
  styleUrl: './realizar-operacion.component.css'
})
export class RealizarOperacionComponent{

	constructor(private router: Router, private service: ServidorService){}

	operacion : Operacion = new Operacion();

	resolverOperacion(){
		this.service.realizarOperacion(this.operacion).subscribe(data => {
			this.operacion = data;
		})
	}

}
