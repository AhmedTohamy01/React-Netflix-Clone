
<h1 align="center">
  <img title="Netflix" src="https://fhsknightlife.com/wp-content/uploads/2020/04/uVASXqvMzyUrAPfSn9pMtxOC7s89ulzdDKBdtqCP.png" alt="NETFLIX Logo" width="400" />
  <br>
  Netflix Clone Built Using React.JS & Firebase
</h1>

<p><font size="3">
  This is a clone of Netflix website built using <strong><em>React.JS</em></strong> as a Front-end & <strong><em>Firebase</em></strong> as Back-end. It's not a replica, and it     doesn't have all the features of Netflix website. it's a similar version of Netflix with my own design touch, showing my abilities in React.JS to build something advanced       like Netflix. It contains the home page, sign-in page, sign-up page, browse page, and movie player.
  <br><br> 
  <strong><em>Take a look at the live version here:</em></strong> https://react-netflix-clone-beta.vercel.app :octocat: :heart_eyes:
</p>

## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Home Page](#home-page)
  - [Sign-in Page](#sign-in-page)
  - [Sign-up Page](#sign-up-page)
  - [Browse Page](#browse-page)
- [Live Demo](#live-demo)
- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Show Your Support](#show-your-support)
- [Acknowledgments](#acknowledgments)
- [License](#license)




# Project Walk-Through

 # Home Page

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/5.jpg)
![ScreenShot](/public/images/readme/6.jpg)
![ScreenShot](/public/images/readme/7.jpg)
![ScreenShot](/public/images/readme/8.jpg)
![ScreenShot](/public/images/readme/9.jpg)
![ScreenShot](/public/images/readme/10.jpg)
</div>

The Home Page consists of 5 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

- Sign-in button: 
 it redirects you to the sign-in page.

- Feature title & subtitle:
It shows the main sentences of the website.

***2) Optform:***
It's a text input field and a button,  It redirects you to the sign-up page once you click on the button.

***3) Jumbotron:***
This section contains some images and paragraphs beside it, showing the advantages of Netflix. The data of this Jumbotron came from jumbo.json file.

***4) Frequently Asked Questions:***
This section contains the FAQs in a form of accordion, when you click anywhere in the gray area of the question the answer appears below it, and then you can close the answer by clicking again on the same gray area of the question. The data of these FAQs came from faqs.json file.

***5) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***

 # Sign-in Page
 
 <div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/11.jpg)
![ScreenShot](/public/images/readme/12.jpg)
</div>

The Sign-in Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Sign-in Form, which includes:***
- Email address input field.

- Password input field.

- Sign-in Button: It has a validation option, if any field in the form is empty it will be disabled. If the form fields have any data it will be active and will send the data to the firebase database in the backend for authentication. It has also an error handling function.

- Link to Sign-up Page:  it redirects you to the sign-up page. 

***3) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***


 # Sign-up Page
 
<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/13.jpg)
![ScreenShot](/public/images/readme/12.jpg)
</div>

The Sign-up Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Sign-up Form, which includes:***
- First Name input field.

- Email address input field.

- Password input field.

- Sign-up Button: It has a validation option, if any field in the form is empty it will be disabled. If the form fields have any data it will be active and will send the data to the firebase database in the backend for registration. It has also an error handling function.

- Link to Sign-in Page:  it redirects you to the sign-in page.


***3) Footer:***
It contains useful links users may need it.


***### The page is fully responsive to all mobile devices even the small ones. ###***

 # Browse Page

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/1.jpg)
![ScreenShot](/public/images/readme/2.jpg)
![ScreenShot](/public/images/readme/3.jpg)
![ScreenShot](/public/images/readme/4.jpg)
</div>

The Browse Page consists of 5 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page whenever you click it.

- Categories Links: 
It shows the movies of a specific category when you click on it, for example, if you click on the films link it will be active and the browse page will show only the films. And if you click on the series link it will be active and the browse page will show only the series.

- Featured Movie Title & Description:
It shows the title and description of the featured movie.

- Play Button:
it shows the video player to play the movie.


***2) Movies Slides:***
It's a slides shows the movies based on their genre.  The genres and all movie information had been retrieved from the Firebase database.

***3) Movie Card:***
It's an image represent the movie, when you hover over it became bigger and it will show its card feature if you click on it.

***4) Card Feature:***
it's another section that appears under the movie slide if you click on any movie card, it contains more information about the movie like title, description, a special background represent the movie, and play button. when you click on the play button it shows the video player to play the movie. and you can close the card feature by clicking on the close icon in the top right corner of the card feature.

***5) Video Player:***
it's a video player that has full controls, appears in the middle of the screen when you click on any play button, and you have to click on the play icon in the video player after it show up because it doesn't have an autoplay option currently.
And when the video player show up the whole screen became an overlay, and only the video appears in the middle, and when you scroll up and down the video player moves with you.
The video player should show the video of this movie which you clicked on it, but for this project purpose, it shows only one video as a sample for all movies.

You can close the video player anytime by clicking anywhere else on the screen.

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/14.jpg)

</div>

***6) Footer:***
It contains useful links users may need it.



***### The page is fully responsive to all mobile devices even the small ones. ###***

# Live Demo

***Take a look on the live version here:*** https://react-netflix-clone-red.vercel.app/ :octocat: :heart_eyes: 


# Technology Used

I have built this project using the following tools & techniques:
- React.JS
- React Router.
- React Forms.
- React Hooks.
- useState.
- useContext.
- useEffect.
- useHistory.
- useState.
- Compound Components.
- JSX.
- CSS Modules.
- Firebase.
- VSCode.
- StyleLint.
- EsLint.
- Github Actions.
- Github Pages.


# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) You will need an account on [Firebase](https://firebase.com) and you should create a project on your firebase account dedicated to this Netflix project.

3) You will need the "./seed.js" file (which I added in this repo) to seed your firebase backend with movies information. OR you can use your seed file with your information if you want.

4) Then From your terminal, you should do the following:

```cmd
# Clone this repository
git clone https://github.com/AhmedTohamy01/React-Netflix-Clone

# Go into the repository
cd react-netflix-clone

# Install dependencies
npm install 

```

5) Then you will need to create the ./src/lib/firebase.prod.js file in your local repo, The content of firebase.prod.js file will be like the following:

```js
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };

```

6) Then you should use your firebase project information to fill the config information in firebase.prod.js file.

```js
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

```

7) Then you should seed your firebase database with the information in the seed.js file. , follow the following instructions to do this:

```js
1) Un-comment the following line:
// import { seedDatabase } from '../seed'
// seedDatabase(firebase);

2) Save the firebase.prod.js.

3) Wait 2 minutes and check your firebase database , if you found the data there then re-comment the above 2 lines.
   If you didn't re-commet the above 2 lines after the seeding process, you will get dupliacted data in your 
   firebase database.
 
```

8) After seeding your firebase database with the movies information & reverting the Github Pages changes you can run the Netflix React App using the following command from your terminal:

```
# Run the app
npm start
```

9) Now you can see the project in your browser as you see in the live demo link. 
Happy Hacking!


# Show Your Support

Give a ⭐️ if you like this project!

# Acknowledgments

Hat tip to everyone helped me to learn the techniques used in building this project.

# License 

MIT License.



