import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DocumentEditorContainerComponent, CustomToolbarItemModel } from '@syncfusion/ej2-angular-documenteditor';
import { FileuploadService } from '../fileupload.service';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-otx-editor',
  templateUrl: './otx-editor.component.html',
  styleUrls: ['./otx-editor.component.css'],

})
export class OtxEditorComponent implements OnInit {

  // @ViewChild('nestedItemRef', { read: ElementRef }) nestedItemsRef!: ElementRef<HTMLLIElement>;
  @ViewChild('nestedItemRef', { static: false, read: ElementRef }) nestedItemsRef!: ElementRef<HTMLLIElement>;
  @ViewChild('document_editor', { static: true }) container!: DocumentEditorContainerComponent;
  documentEditor: any;
  showList: boolean = false;
  showNestedList: boolean = false;
  responseData: any;
  documents: any = [];
  nestedList: any[] = [];
  showTextArea: boolean = false;
  selectedHeaderValue: string = '';
  constructor(private service: FileuploadService) {

  }

  ngOnInit(): void {

  }

  public toolbarItems: (CustomToolbarItemModel | string)[] = [
    {
      prefixIcon: 'e-de-ctnr-Save',
      tooltipText: 'Open',
      text: 'Open',
      id: 'Open'
    },
    {
      prefixIcon: 'e-de-ctnr-Save',
      tooltipText: 'Save',
      text: 'Save',
      id: 'Save'
    },
    'Separator',
    'Undo',
    'Redo',
    'Separator'

  ];

  public onToolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
      case 'Open':
        this.handleOpen();
        break;
      case 'Save':
        this.handleSave();
        break;
      default:
        break;
    }
  };

  showListView(): void {
    this.showList = !this.showList;

    if (!this.showList) {
      this.showNestedList = false;
    }

    this.service.getMethod('Header').then((success) => {
      this.responseData = success;
      this.documents = this.responseData.TemplateList || [];
    });
  }

  handleListItemClick(item: any): void {
    this.service.getMethod('Header').then((success: any) => {
      this.nestedList = item.HeaderList || [];
      this.selectedHeaderValue = '';
      this.attachClickEventHandlers();
    });
  }

  attachClickEventHandlers(): void {
    const nestedItems = this.nestedItemsRef.nativeElement.querySelectorAll('li');
    nestedItems.forEach((nestedItem: HTMLElement) => {
      nestedItem.addEventListener('click', () => {
        const nestedItemText = nestedItem.innerText.trim();
        this.handleNestedItemClick(nestedItemText);
      });
    });
  }


  handleNestedItemClick(nestedItemHeaderName: string): void {
    const selectedHeader = this.nestedList.find((header) => header.HeaderName === nestedItemHeaderName);
    if (selectedHeader) {
      this.selectedHeaderValue = selectedHeader.HeaderValue;
    } else {
      this.selectedHeaderValue = '';
    }
    this.showTextArea = true;

  }

  closeTextArea(): void {
    this.showTextArea = false;
  }

  handleSave(): void {
    this.container.documentEditor.save('otryxfile', 'Docx');

  }

  handleOpen(): void {
    //  const documentUrl = '<your-document-url>';
    //   this.container.documentEditor.open(documentUrl);
    //   //this.showListView();
  }

}




