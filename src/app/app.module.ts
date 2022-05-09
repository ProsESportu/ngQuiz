import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { PanelComponent } from './panel/panel.component';
import { ScoreShowComponent } from './score-show/score-show.component';
import { ScoreService } from "./score.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

const appRoutes:Routes=[
  {path:"quiz/:id",component:QuizComponent},
  {path:"score/:id",component:ScoreShowComponent},
  {path:"**",component:PanelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PanelComponent,
    ScoreShowComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
