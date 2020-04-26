

import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable()
export class NewsletterService {
    
    private reqHeader1 = new HttpHeaders({ 'gcm_sender_id': '53737314190' });
    private reqHeader2 = new HttpHeaders({ 'content-type': 'application/json' });

    constructor(private http: HttpClient) {

    }

    addPushSubscriber(sub:any) {
        const body = JSON.stringify(sub);
     //   return this.http.post('https://web.smaketsolutions.com/api/sns/CreatePlatformEndpoint', sub);
        return this.http.post('http://localhost:8013/subscribe', sub, { headers: this.reqHeader2 });
    }

    send() {
        return this.http.post('/api/newsletter', null);
    }

}


