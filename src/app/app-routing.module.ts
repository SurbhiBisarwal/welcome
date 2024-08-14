import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello/hello.component";
import { ByeComponent } from "./bye/bye.component";
const routes: Routes = [
  {
    path: "hello",
    component: HelloComponent,
  },
  {
    path: "bye",
    component: ByeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
