import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CIFRADO-OPERACION';

	constructor(private router: Router){}

	operacion(){
		this.router.navigate(['realizarOperacion']);
	}
}
