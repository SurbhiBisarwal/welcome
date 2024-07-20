import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MoviecardComponent } from "./moviecard/moviecard.component";
import { SongsComponent } from "./songs/songs.component";
import { CompetitionComponent } from "./competition/competition.component";
import { StudentsComponent } from "./students/students.component";

@NgModule({
  declarations: [
    AppComponent,
    MoviecardComponent,
    SongsComponent,
    CompetitionComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
