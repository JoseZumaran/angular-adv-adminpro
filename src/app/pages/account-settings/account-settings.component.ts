import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  
  //public linkTheme = document.querySelector('#theme');
  //public links = document.querySelectorAll('.selector');

  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
    //this.links = document.querySelectorAll('.selector');
    //this.checkCurrentTheme();
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    /*//const linkTheme = document.querySelector('#theme');
    //console.log(linkTheme);
    const url = `./assets/css/colors/${theme}.css`;
    console.log(url);

    this.linkTheme?.setAttribute('href', url);


    //grabar tema
    localStorage.setItem('theme', url);*/

    this.settingsService.changeTheme( theme );
    //this.checkCurrentTheme();
  }

  /*checkCurrentTheme(){
    
    console.log(this.links);

    this.links.forEach( elemt => {
      elemt.classList.remove('working');
      const btnTheme = elemt.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elemt.classList.add('working');
      }
    });
  }*/
}
