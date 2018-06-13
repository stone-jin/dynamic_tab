import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DynamicComponentService} from './DynamicComponentService';
import {DynamicComponentDirective} from './DynamicComponentDirective';
import {AComponent} from './components/A.component';
import {BComponent} from './components/B.component';
import {CComponent} from './components/C.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicComponentDirective,
        AComponent,
        BComponent,
        CComponent,
    ],
    imports: [BrowserModule],
    providers: [DynamicComponentService],
    bootstrap: [AppComponent],
    entryComponents: [AComponent, BComponent, CComponent],
})
export class AppModule {}
