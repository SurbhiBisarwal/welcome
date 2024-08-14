import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HelloComponent } from "./hello/hello.component";
import { ByeComponent } from "./bye/bye.component";
import { Router } from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, ByeComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
