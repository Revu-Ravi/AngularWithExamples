import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interPolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { TwoWaydatabindingComponent } from './components/two-waydatabinding/two-waydatabinding.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourceComponent } from './components/course/cource.component';
import { CourceDetailsComponent } from './components/cource-details/cource-details.component';
import { CourceService } from './service/cource.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectedItemsComponent } from './components/selected-items/selected-items.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { APICallsComponent } from './components/api-calls/api-calls.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWaydatabindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    CourceComponent,
    CourceDetailsComponent,
    SelectedItemsComponent,
    LifeCycleHooksComponent,
    AdminHomeComponent,
    TdfComponent,
    APICallsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
