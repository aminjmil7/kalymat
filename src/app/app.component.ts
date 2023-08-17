import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page = 0;
  message = '';
  constructor(private titleService: Title) {
    this.titleService.setTitle('مرحبا');
  }
  nextPage(event: string) {
    this.message = event;
    this.page++;
    if (this.page === 1) this.titleService.setTitle('صفحة الأسئلة');
  }
}
