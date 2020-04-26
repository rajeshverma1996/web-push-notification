

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";



@Injectable()
export class NewsletterService {

    constructor(private http: HttpClient) {

    }

    addPushSubscriber(sub:any) {
     //   return this.http.post('https://web.smaketsolutions.com/api/sns/CreatePlatformEndpoint', sub);
        return this.http.post('/subscribe', sub);
    }

    send() {
        return this.http.post('/api/newsletter', null);
    }

}


