// import { Injectable } from '@angular/core';
// import { User } from 'src/assets/services/user.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   users: User[] = [{"username": "admin", "password": "123", "roles": ['ADMIN']  },
//                   {"username": "nathan", "password": "123", "roles": ['USER'] }];
//   public loggedUser: string | undefined;
//   isloggedIn: Boolean = false;
//   public roles: string[] | undefined;

//   constructor() { }

//   SignIn(user :User):Boolean{
//     let validUser: Boolean = false;

//     this.users.forEach((curUser) => {
//     if(user.username=== curUser.username && user.password==curUser.password) {
//         validUser = true;
// this.loggedUser = curUser.username;
// this.isloggedIn = true;
// this.roles = curUser.roles;
// localStorage.setItem('loggedUser',this.loggedUser);
// localStorage.setItem('isloggedIn',String(this.isloggedIn));
// }
// });
// return validUser;
// }




// }
