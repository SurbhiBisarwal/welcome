import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello/hello.component";
import { ByeComponent } from "./bye/bye.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  {
    path: "hello",
    component: HelloComponent,
  },
  {
    path: "bye/:username",
    component: ByeComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
