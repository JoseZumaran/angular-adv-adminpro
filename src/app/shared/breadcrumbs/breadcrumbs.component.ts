import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  //public titulo: string;
  //public tituloSubs$: Subscription;

  constructor( private router : Router) {

    /*this.tituloSubs$ = this.getArgumentosData()
                      .subscribe( ({ titulo }) => {
                        this.titulo = titulo;
                        document.title = `AdminPro - ${ titulo }`
                      });*/

   }
   
  ngOnDestroy(): void {
    //this.tituloSubs$.unsubscribe();
    //throw new Error('Method not implemented.');
  };

   
   /*getArgumentosData(){
    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild == null ),
      map( (event: ActivationEnd) => event.snapshot.data),
    )
    .subscribe( ({titulo}) =>
      this.titulo = titulo
      );
   }*/
}
