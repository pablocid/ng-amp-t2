import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  jwtToken: string;

  constructor(private amplifyService: AmplifyService) {

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = 'Hello ' + this.user.username;
          // console.log(this.user);
        }
      });


  }
  signedIn: boolean;
  user: any;
  greeting: string;
  response: any;
  title = 'ng-material-course';

  ngOnInit() {
    this.amplifyService.auth().currentSession()
      .then((data: any) => {
        // console.log(data.accessToken.jwtToken);
        this.jwtToken = data.accessToken.jwtToken;
      })
      .catch(err => console.log(err));
  }

  callApi() {
    this.amplifyService.api()
      .get('ngt2api', '/ngt2', {
        'queryStringParameters': {
          'jwtToken': this.jwtToken,
          'key2': 'val2'
        },
      })
      .then(x => {
        this.response = x;
      })
      .catch(x => console.log(x));
  }

}
