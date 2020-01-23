import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly translate: TranslateService) {
  }
  ngOnInit(): void {
  }
  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
