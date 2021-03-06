import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    // promesa.then(() => console.log('Termino'), () => console.log('Error'));
    this.contarTres()
      .then(mensaje => console.log('Termino', mensaje))
      .catch(error => console.error('Error en la promesa', error));
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          // reject('Simplemente un error');
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
