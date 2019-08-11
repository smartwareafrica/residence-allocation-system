// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
add firebase API key to your app
the following information are straiht from firebase SDK and are
used to communitcate bewteen the angular application and
the realtime firebase
do not modify
author Abutto john
sccj/00261/2015
 */
export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBbg2JfkucJUHfqtpm-8gI7CiadXPtENlg',
   authDomain: 'residenceallocationsystem.firebaseapp.com',
   databaseURL: 'https://residenceallocationsystem.firebaseio.com',
   projectId: 'residenceallocationsystem',
   storageBucket: 'residenceallocationsystem.appspot.com',
   messagingSenderId: '496692656104',
   appId: '1:496692656104:web:e703b735844b20fe'
 }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
