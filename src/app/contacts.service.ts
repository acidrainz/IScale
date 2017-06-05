import { Injectable } from '@angular/core';
import { Contacts } from './contacts';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class ContactsService {
  private apiUrl = '/assets/data/contacts.json';  // URL to web api
  constructor(private http:Http) {}
   // getContacts(): Promise<Array<Contacts>> {
   //    return this.http
   //      .get(this.apiUrl)
   //      .toPromise()
   //      .then((response) => {
   //        return response.json().People as Contacts[];
   //      })
   //      .catch(this.handleError);
   //  }
    // getContact(name: string): Promise<Contacts> {
    //   return this.getContacts()
    //     .then(contacts => contacts.find(contact => contact.name === name));
    // }

    getContacts(): Observable<Contacts[]>{
      return this.http.get(this.apiUrl)
      .map((res:Response)=>res.json().People)
      .catch(this.handleError);
    }
    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
