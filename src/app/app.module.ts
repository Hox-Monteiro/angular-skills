// components
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HelloComponent } from "./hello.component";

// services
import { FakeApiService } from "./core/services/fake-api.service";
import { SkillService } from "./core/services/skill.service";

// packages

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { MatButtonModule, MatCardModule, MatChipsModule, } from "@angular/material";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        DashboardComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }),
    ], 
    bootstrap: [AppComponent],
})
export class AppModule { }
