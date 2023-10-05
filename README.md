## Description

Repository containing minimal configuration to easily reproduce bug with password policy enforcement in languages other than English. If the client is using a language other than `en` (tested with `de`,`sk`, `cs`), user is unable to reset password (error about expired session, see screenshots).


## Requirements
- Node 18.16
- Configured firebase account to accept user login with email
- Create user in firebase auth (you will need email for reset password link)

## How to reproduce
1. set firebaseConfig in `firebase-server.js`
2. set config in `firebase-client.js`
3. `npm run set-password-policy`
4. `npm run reset-password`
5. open reset password link received in email
6. reset account with password `heslo`