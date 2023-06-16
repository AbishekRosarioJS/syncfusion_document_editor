import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentEditorContainerModule,ToolbarService,DocumentEditorAllModule,EditorService, SelectionService, SfdtExportService, WordExportService,CustomToolbarItemModel} from '@syncfusion/ej2-angular-documenteditor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { OtxEditorComponent } from './otx-editor/otx-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OtxEditorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ListViewModule,FormsModule,
    AppRoutingModule,DocumentEditorContainerModule, BrowserAnimationsModule, GridModule, PagerModule,DocumentEditorAllModule
  ],
  providers: [ToolbarService,EditorService, SelectionService, SfdtExportService, WordExportService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
