import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    console.log('Settings Service init');

    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string){
    //const linkTheme = document.querySelector('#theme');
    //console.log(linkTheme);
    const url = `./assets/css/colors/${theme}.css`;
    console.log(url);

    this.linkTheme?.setAttribute('href', url);


    //grabar tema
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    //const links = document.querySelectorAll('.selector');
    const links = document.querySelectorAll('.selector');
  
    links.forEach( elemt => {
      elemt.classList.remove('working');
      const btnTheme = elemt.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elemt.classList.add('working');
      }
    });
  }
}
