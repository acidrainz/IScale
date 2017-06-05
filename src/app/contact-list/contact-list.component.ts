import { Component, OnInit, Input} from '@angular/core';
import { ContactsService } from "../contacts.service";
import { Contacts } from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})


export class ContactListComponent implements OnInit {
  private contacts: Contacts[];
  private errorMessage:any = '';
  private selectedContact: Contacts;
  public max:number = 5;
  public rate:number = 2;
  public isReadonly:boolean = true;
  value:string;

   constructor(private _postDataService:ContactsService) {}
  getContacts(): void {
      this._postDataService
        .getContacts()
        .subscribe(contacts => this.contacts = contacts,error => this.errorMessage = <any>error);
    }
    ngOnInit(): void {
      this.getContacts();

    }

    onSelect(contact: Contacts): void {
      this.selectedContact = contact;
      this.rate = this.selectedContact.rating;

    }

    onChange(value:string){
        if(value!=''){
        this.contacts=this.contacts.filter(res=>res.name.startsWith(value));
        }else{
          this.getContacts();
        }
    }
    onClicked(value:string){
       console.log('lorem=' +value);

    }


}
