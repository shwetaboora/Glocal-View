import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatMenuModule} from'@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurservicesComponent } from './home/ourservices/ourservices.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectComponent } from './home/connect/connect.component';
import { ChooseComponent } from './home/choose/choose.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component'
import { NgImageSliderModule } from 'ng-image-slider';
import { VisionComponent } from './vision/vision.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { GrowComponent } from './about/grow/grow.component';
import { ValuesComponent } from './about/values/values.component';
import { WorkComponent } from './about/work/work.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from '@coreui/angular';
import { ProjectComponent } from './home/project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    OurservicesComponent,
    FooterComponent,
    ConnectComponent,
    ChooseComponent,
    PortfolioComponent,
    VisionComponent,
    GalleryComponent,
    HomeComponent,
    AboutusComponent,
    GrowComponent,
    ValuesComponent,
    WorkComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    NgbCarouselModule,
    CarouselModule,
    NgImageSliderModule,
    MatIconModule,
    MatMenuModule, 
    MatButtonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
