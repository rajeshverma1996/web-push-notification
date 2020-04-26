import { Component, OnInit } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { NewsletterService } from './services/newsletter.service';
// import { NewsletterService } from './services/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-web-push';
  // readonly VAPID_PUBLIC_KEY = "BAQX81ABUEV-Dpr7-APcNW93jhIAPikBIi_wvveP_fTEASvqAFUPg-vczGIm3IYGMMSi8vjMWPylXy-ShZ3TxgY";
  readonly VAPID_PUBLIC_KEY = "BH96yDe1Z47dMcoLQ5Ysq5QQz-eJwBawmun3yjUF7xk7nTvkLMasWkeT94Qk59JrLN_emQrTPdV6MOjeK7sF00o";
  constructor(private swUpdate: SwUpdate,
    private swPush: SwPush,
    private newsletterService: NewsletterService
   ) {
   
  }

  ngOnInit(){
    /*
    this.swUpdate.available.subscribe(event => {
      console.log(event)
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });
    this.swUpdate.activated.subscribe(event => {
      console.log(event);
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });        
    */
    if (this.swUpdate.isEnabled) {
      console.log('yes update')

      this.swUpdate.available.subscribe((event) => {
console.log(event);
        console.log('update available');
          if(confirm("New version available. Load New Version?")) {
            console.log('update available1');
              window.location.reload();
          }else{
            console.log('update available2');
          }
      });
      
  }
  
  if(this.swPush.isEnabled){
  this.swPush.requestSubscription({
    serverPublicKey: this.VAPID_PUBLIC_KEY
})
.then(sub => 
  {
    console.log('inside subscription',sub);
    
    /*
     this.newsletterService.addPushSubscriber(sub).subscribe(subValue=>{
       console.log("subscribe successfully",subValue)
     },
    error => {
      console.log(error);
    })
    */
   /*
  })
.catch(err => console.error("Could not subscribe to notifications", err));
}
  */
  }  

  subscribeToNotification(){
   
  if(this.swPush.isEnabled){
  this.swPush.requestSubscription({
    serverPublicKey: this.VAPID_PUBLIC_KEY
})
.then(sub => 

  {
    console.log('Notification subscription',sub);
    /*
     this.newsletterService.addPushSubscriber(sub).subscribe(subValue=>{
       console.log("subscribe successfully",subValue)
     },
    error => {
      console.log(error);
    })
  
   */ 
   
  })
.catch(err => console.error("Could not subscribe to notifications", err));
}
   
  }

}
