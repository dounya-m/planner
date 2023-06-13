import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planner';

  hoursOfDay: string[] = [];

  heureActuelle : string = '';
  heureAct : string= ''

  constructor(){
    this.updateCurrentTime();
    setInterval(() => {
      this.updateCurrentTime()
    }, 1000)
  }

  updateCurrentTime(){
    const date = new Date()
    this.heureActuelle = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    this.heureAct = this.heureActuelle.split(':')[0];
  }

  ngOnInit(){
    for (let hour = 0; hour < 24; hour++) {
        const formattedHour = hour.toString().padStart(2, '0');
        this.hoursOfDay.push(`${formattedHour}:00`);
      }

      console.log(this.heureAct);


  }
}
