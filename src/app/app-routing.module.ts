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

  // *****************3ways to avoid console error for bye*************
  // 1.
  // ================
  // {
  //   path: "bye",
  //   component: ByeComponent,
  // },
  // =========================
  // 2.
  // {
  //   path: "bye",
  //   redirectTo: "bye/TestUser",
  //   pathMatch: "full",
  // },
  // =========================

  // 3.======================================
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
  // ==========================================
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
