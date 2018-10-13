import { Component } from '@angular/core';
import { AppareilService } from './Service/appareil.Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth =false;
  dateJour = new Promise(
    (resolve, reject) =>{
      const date = new Date();
      setTimeout(()=>{
          resolve(date);

        },2000
      )
    }
  )
  appareils = [
    {
      name:'machine a laver',
      status:'eteind'
    },
    {
      name:'television',
      status:'allume'
    },
    {
      name: 'machine a laver',
      status: 'eteind'
    }

  ];
  constructor( private appareilService: AppareilService) {
    setTimeout(() => {
        this.isAuth = true;    
      }, 4000);

    }
    onAllumer(){
      console.log('on allume tous!');
    }
}
