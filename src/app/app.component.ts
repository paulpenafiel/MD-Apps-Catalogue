import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  public activeLang = 'es';

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  public changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
