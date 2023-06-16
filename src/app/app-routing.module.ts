import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtxEditorComponent } from './otx-editor/otx-editor.component';

const routes: Routes = [
  { path:'Otryx-editor', component:OtxEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
