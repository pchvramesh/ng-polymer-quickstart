import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PolymerModule} from '@codebakery/origami';
import {IronElementsModule, PaperElementsModule} from '@codebakery/origami/collections';
import {FullLayoutsComponent} from './components/layouts/full-layouts/full-layouts.component';
import {SimpleLayoutsComponent} from './components/layouts/simple-layouts/simple-layouts.component';

import {AppRoutingModule} from './app.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutsComponent,
    SimpleLayoutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PolymerModule.forRoot(),
    PaperElementsModule,
    IronElementsModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
