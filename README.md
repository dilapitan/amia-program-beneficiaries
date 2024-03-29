# Amia Program Beneficiaries

The application was developed to help the users store the details of the AMIA Program beneficiaries. The admin can log in to the system and add a beneficiary, view or edit its details, or even delete it.

## How to use the Application

> _Public_ is where unauthenticated users can see and do in the application. _Admin_ is where the admin is logged in to the application with specific privileges.

### Public Usage

**VIEW** shallow list of beneficiaries

- The landing page in the application displays a public list of the Bicol region and its provinces with their corresponding beneficiaries.

**LOGIN**

- The user can use their admin credentials to login into the application.

### Admin Usage

**VIEW** shallow list of beneficiaries

- The landing page in the application displays a public list of the Bicol region and its provinces with their corresponding beneficiaries.

**VIEW beneficiary**

- The admin can view all the details of a selected beneficiary

**VIEW beneficiaries**

- The admin can view all the beneficiaries and their details in a tabular form

**ADD beneficiary**

- The admin can add a new beneficiary to the system

**EDIT beneficiary**

- The admin can edit the details of a beneficiary

**DELETE beneficiary**

- The admin can delete a beneficiary in the system

**LOGOUT**

- The authenticated user can logout of the application.

## What's in the App

The application is build using Vue and Firebase.
Vue handles the user interface while Firebase handles the backend services the UI needs.

## Technologies Used

- [Vue 2](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Firebase](https://firebase.google.com/)

## What's in the repository

The repository contains a **client** folder is the codebase for the user interface/front end.
Since the application connects to a serverless backend using Firebase, there's no codebase for the backend.

If in the future the application is to be extended and use a different architecture for the backend, that codebase can be placed on the level of the **client** folder.

.\
├── README.md\
└── client

└── (backend folder if chose a different architecture for the backend)

## How to develop the Application

The application was developed using [Node](https://nodejs.org/en/) version 16.14.2. Ran using [Yarn](https://yarnpkg.com/) version 1.22.4.

1. Open terminal and pull the repository.
2. Go to `client` folder and install the following command:
   > Alternatively, you can use `npm i` for using [npm](https://www.npmjs.com/).

```
yarn install
```

3. Create `.env` under the `client` folder, and copy the contents of the `env-example`.

   > The `VUE_APP_UNDER_CONSTRUCTION` variable is just a variable that tells the Vue app if the application should be under maintenance.

4. Create a file called `firebaseConfig.js` under the `client/src/firebase` and copy the contents of the `firebaseConfig.example.js`. And update the `firebaseConfig.js` with your Firebase details.

5. Under the `client` folder, ran the application using the command:

```
yarn serve
```

6. Open the application in http://localhost:8080/.

> Note: For the developer to login into the application, please contact the admin or email me at domlapitan@gmail.com. The application uses Firestore, and only the admins in the Firestore can login into the application.

## Database: Firebase Architecture of the Application

**Admin User**

- Manually created under [Authentication](https://firebase.google.com/docs/auth) of Firebase.
- The Sign-In method used is _email and password_ where the admin user is given an email and a password. No registration is needed.
- The admin user has a `User UID` as their identifier that is later used for creating a `beneficiary`.

**Beneficiary** (`beneficiaries` as a _collection_ in Firestore, `beneficiary` as a document of the _collection_)

- This is a whole survey form that contains the details of a beneficiary.
- The survey form has 9 parts. The number of parts starts with 0 and ends with 8, i.e. `part0`, `part1`, ... `part8`. In the Firestore, the `beneficiary` document have these `part` attribute.
- Other attributes of the `beneficiary` document are `id`, `createdAt`, and `userId`.

```
beneficiary {
  id
  createdAt
  userId
  part0 {
    ...
  }
  part1 {
    ...
  }
  part2 {
    ...
  }
  part3 {
    ...
  }
  part4 {
    ...
  }
  part5 {
    ...
  }
  part6 {
    ...
  }
  part7 {
    ...
  }
  part8 {
    ...
  }
}
```

- Each `part` is an object that further contains attributes representing each field of the survey (e.g. `part0` has `date`, `interviewEnd`, `interviewStart`, etc.)
- The `userId` attribute of the `beneficiary` document corresponds to the `User UID` of the admin user. Meaning to say an admin user can add many beneficiaries and we can track which admin created a beneficiary.

**Rules**

- Only admin users can write (`ADD`/`EDIT`/`DELETE`) a beneficiary document.
- But anyone can `VIEW` the details of a beneficiary. But the application only publicly displays a shallow details of a beneficiary compared to admin users that can see all the details of a beneficiary.
- These [rules](https://firebase.google.com/docs/firestore/security/get-started) are handled by Firebase in the Firebase console.

## Issues

Having issues? Please contact the admin of this project or email me at domlapitan@gmail.com.

## Contact Information

Email at: domlapitan@gmail.com for more inquiries.
