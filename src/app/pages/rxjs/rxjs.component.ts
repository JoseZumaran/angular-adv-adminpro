import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() { 
    /*this.retornaObservable().pipe( retry(2) ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Obs terminado')
    );*/

   /* this.retornaIntervalo().subscribe(
      valor => console.log(valor)
    )*/

    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
  }

  //Cuando estamos navegando en otras interfaces se siguen ejecuntando los observables
  //usando mucha memoria ram, para ello es necesario implementar el unsubscribe, para finalizar en el ciclo de vida
  // el Observable
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.intervalSubs.unsubscribe(); 
  }

  retornaIntervalo(){
    //return intervals = interval(1000).pipe( take(4) , map( valor => 
    const intervals = interval(1000)
    .pipe( 
        // take(10) , aqui se imprime la mitad de las veces
            map( valor => { //return 'Hola que tal ' + valor 
            return valor + 1 } ) ,
            filter( valor => ( valor % 2 ) ? true : false ),
            take(10) , //aqui se inprime todas las veces    !!!!EL ORDEN ES IMPORTANTE!!!
      );
    return intervals;
  }

  retornaObservable() : Observable<number> {
    let i = -1;

    //return const obs$ = new Observable<number>( observer => {
    const obs$ = new Observable<number>( observer => {
          
      //let i = -1;

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if( i == 4 ){
          clearInterval(intervalo); //javascript
          observer.complete();
        }

        if( i == 2 ){
          //i=0;
          observer.error('i llego el valor de 2');
        }



        //console.log('tick');
      }, 1000 );
    });

    return obs$;
  }



}
