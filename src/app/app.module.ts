import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {PolymerModule} from "@codebakery/origami"
import {IronElementsModule, PaperElementsModule} from "@codebakery/origami/collections"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PolymerModule.forRoot(),
    PaperElementsModule,
    IronElementsModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
