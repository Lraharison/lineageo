import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private readonly languages: Array<string>;

  constructor(private readonly translate: TranslateService) {
    this.languages = translate.getLangs();
  }
  ngOnInit(): void {
  }
  switchLang(lang: string): void {
    this.translate.use(lang);
  }
  trackByFn(index, item): number {
    if (!item) { return null; }
    return index;
  }
}
