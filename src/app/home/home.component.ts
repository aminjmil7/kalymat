import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Output() next: EventEmitter<string> = new EventEmitter<string>();
  text = 'دراسات';

  goToQuestions() {
    this.next.emit();
  }
}
