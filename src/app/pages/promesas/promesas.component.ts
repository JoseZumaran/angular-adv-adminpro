import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    /*const promesa = new Promise( ( resolve, reject ) => {
      if(true){
        resolve('Entra Promesa');
      } else {
        reject('algo salio mal');
      }
        
    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    })
    promesa.catch( error => console.log('error en mi promesa'));

    console.log('Fin del Init ');*/
  }

  getUsuarios(){
    //return promesa = new Promise( resolve =>{
    const promesa = new Promise( resolve =>{

      fetch('https://reqres.in/api/users')
          .then(resp => resp.json())
          .then( body => resolve( body.data ));
        
    });
    
    return promesa;
  }
}
