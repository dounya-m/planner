import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planner';

  hoursOfDay: string[] = [];
  daysOfWeek: string[] = [];

  heureActuelle : string = '';
  heureAct : string= ''

  constructor(){
    this.updateCurrentTime();
    this.daysOfWeek = this.getDaysOfWeek();
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
  private getDaysOfWeek(): string[] {
    const daysOfWeek: string[] = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const day = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDay = day.toLocaleDateString('fr-FR', { day: 'numeric', weekday: 'short' });
      daysOfWeek.push(formattedDay);
    }

    return daysOfWeek;
  }

}
