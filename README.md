<br/><br/>

<p align="center">
    <img height="100" src="https://agrak.com/wp-content/uploads/2021/11/logo-agrak-default.png">
   </p>
   
   <br/><br/>
   
   <h1 align="center">React Code Challenge — Agrak</h1>
   
   


## Demo
[https://rick-and-morty-start-coding-challenge.vercel.app/](https://rick-and-morty-start-coding-challenge.vercel.app/)

  
## El Challenge
Resolution of the challenge proposed by the company Agrak for the purpose of applying as a full-stack software developer.

Using the provided project structure and the provided API, create a simple web application that allows to manage a list of users.

## Details

You will need to build the following views with React

#### Home View

Which must contain:

- A list of users showing their first_name, second_name, email, avatar
- A button to add a new user (this button should redirect to the user creation view)
- A button to edit an existing user (this button should redirect to the user edition view)
- A button to delete an existing user (this button should delete the user and refresh the list)

#### Create User View/Update User View

Which must contain:

- A form to create a new user or update an existing user
- A button to save the user (this button should save the user and redirect to the home view)
- A button to cancel the action (this button should redirect to the home view)
- A button to delete the user (only in the update view) (this button should delete the user and redirect to the home
  view)
- A button to go back to the home view
- The form must have the following fields:
    - first_name
    - second_name
    - email
    - avatar

## Technical details

We will not evaluate the design of the application, but we will evaluate the code quality, so we suggest to follow
software engineering best practices that demonstrate that you are able to develop high-quality software.

- You *must* use Typescript
- You can use any CSS framework you want
- You *must* use React Query as a State management library
- You can use any routing library you want
- You can use any HTTP client library you want

#### Functional requirements

- You will have to configure routes to navigate between the views and to be able to access them directly by the URL.
- You will have to use the provided API to fetch the users and to create/update/delete them.
- Any updates to the users must be reflected in the home view.


## Api

The API endpoint is [Api user](https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users).

![img_1.png](img_1.png)

*Note:*

I have discovered an irregular behavior in the endpoint to retrieve a user by id. Instead of calling "/users/1", for example, you need to call "/users?id=1", which returns an array of all users whose id contains the provided id (e.g. id=1, id=11, id=41, etc.).



## The Project

### Tools

- React.js
- Chackra UI
- React Query
- Axios

### Project structure
The files are structured as follow:

    ├── app                   // contains App.tsx file where router is defined         
    ├── components  
         ├── forms
         ├── layouts           // Contains all layout for our application
         ├── ui                // shared ui components like Header and Footer
         ... all components
         index.ts              // file to allow us to import every component in the form "import {...} from ./components                          
    ├── config                  // contains config files, in this case firebase config
    ├── hooks                   // custom hooks         
    ├── interfaces             
    ├── pages                  // contains views of the aplication
    ├── services                // contains all services, in this case we have 2 services, firebase.service and user.service         
    ├── utils                   // helpers and utils functions      
    └── README.md            # The first page that the user will view when will visit the repository.

## Technical requeriments
* npm or yarn
* Git

## local deployment

* Clone the repository.
* Run the command `npm install`
* Add  variables in .env
* Run the command `npm run dev` or `npm run start`


*Note:*

To test all functionality locally, you need to:

1 - Create a free Firebase web project
2 - Configure Firebase Firestone
3 - Set up the configuration variables provided by Google Firebase in the .env file

A .env.example file is included in the project. You should rename it to .env.local and configure the variables.