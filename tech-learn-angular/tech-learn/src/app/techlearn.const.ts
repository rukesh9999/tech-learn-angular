
 //##Technology Registration## 

import { BASE_URL } from "./techlearn.url.const";


 //start of Auth 
 export const REGISTER=BASE_URL+'api/auth/register';
 export const LOGIN=BASE_URL+'api/auth/login';
 export const REFRESH_TOKEN=BASE_URL+'api/auth/refresh/token';
 export const LOGOUT=BASE_URL+'api/auth/logout';
 export const VERIFY_USER_EXISTS_OR_NOT=BASE_URL+'api/auth/verifyUserExistsORNot';
 export const FORGOT_PASSWORD=BASE_URL+'api/auth/forgotpassword';
 export const CHANGE_PASSWORD=BASE_URL+'api/auth/changepassword';
 //end  of Auth 


 //start of BAtchJobsetttings 
 export const BATCHJOB_SAVE=BASE_URL+'BatchJobSettings/save';
 export const BATCHJOB_LIST=BASE_URL+'BatchJobSettings/all';
 export const BATCHJOB_GET=BASE_URL+'BatchJobSettings/get';
 export const BATCHJOB_UPDATE=BASE_URL+'BatchJobSettings/update';
  //end of BAtchJobsetttings 



  //start of Inbox mails
  export const GET_INBOX_MAILS=BASE_URL+'InboxMails/all';
  //end of Inbox mails


  //start of statusmain
  export const STATUSMAIN_SAVE=BASE_URL+'statusmain/save';
  export const STATUSMAIN_ALL=BASE_URL+'statusmain/all';
  export const STATUSMAIN_GET=BASE_URL+'statusmain/get';
  export const STATUSMAIN_UPDATE=BASE_URL+'statusmain/update';
//end of statusmain



//start of technology
export const TECH_SAVE=BASE_URL+'technology/save';
export const TECH_ALL=BASE_URL+'technology/all';
export const TECH_GET=BASE_URL+'technology/get';
export const TECH_UPDATE=BASE_URL+'technology/update';
export const DASHBOARD_COUNT=BASE_URL+'technology/dashboard/count';
//end of technology