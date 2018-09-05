import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private appAvailability: AppAvailability, private platform: Platform, private iab: InAppBrowser) {

  }

  openApp() {
    let app;
    if (this.platform.is('android')) {
      app = 'com.bankid.bus';

    this.appAvailability.check(app)
      .then(
        (yes: boolean) => {
          let sApp = (window as any).startApp.set({
            "package": app
          });
          sApp.start();
        },
        (no: boolean) => {
          let target = "_system";
          this.iab.create('https://play.google.com/store/apps/details?id=com.bankid.bus', target);
        }
      );
    }

      if (this.platform.is('ios')) {
        app = 'app.bankid.com';
      
  
      this.appAvailability.check(app)
        .then(
          (yes: boolean) => {
            let sApp = (window as any).startApp.set({
              "package": app
            });
            sApp.start();
          },
          (no: boolean) => {
            let target = "_system";
            this.iab.create('https://itunes.apple.com/se/app/bankid-s%C3%A4kerhetsapp/id433151512?mt=8', target);
          }
        );
      }
  }
    
  }

}
