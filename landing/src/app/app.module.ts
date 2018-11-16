import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// external modules
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { NavComponent } from './landing/nav/nav.component';
import { FooterComponent } from './landing/footer/footer.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
