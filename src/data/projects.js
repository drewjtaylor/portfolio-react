import qwixxImageSource from '../img/qwixx-screenshot.jpg';
import formedChurchImage from '../img/formed-church.jpg';
import formationChurchImage from '../img/formation-church-events.jpg';
import nodeServerImage from '../img/events-postman.jpg';

const projects = [
    {
        title: 'Qwixx Scoreboard',
        subTitle: "React/Redux state management",
        description: "Qwixxx is a dice game where players score points based off of multiple dice rolls. Think Yahtzee-Plus.The scoreboard was created using React, and the state is kept using Redux. Since Redux technically stores a NEW complete state object, as opposed to to updating an object, it was very easy to implement an undo/redo function.",
        imgSource: qwixxImageSource,
        liveUrl: 'https://drewjtaylor.github.io/qwixxboard-redux',
        githubUrl: 'https://github.com/drewjtaylor/qwixxboard-redux'
    },
    {
        title: "Formed Church",
        subTitle: "Bootsrap-styled static website",
        description: '"Formed Church" is the first draft of a website created for a new church plant in my area. At this stage, I was learning Bootstrap but had not yet learned much javascript, let alone React. This version was created as a collection of static pages with some animations and a contact form. The most exciting part of this project was setting up the package.json and github actions so that it automatically deploys changes every time I push to the main branch.',
        imgSource: formedChurchImage,
        liveUrl: 'https://formed-church.netlify.app',
        githubUrl: 'https://github.com/drewjtaylor/formed_church'
    },
    {
        title:"Formation Church",
        subTitle: 'React site with state for handling an events page',
        description: '"Formation Church" (as opposed to Formed Church) was one step closer to what the church foudner visualized. Other than updating the name, the website got an update as well. In addition to a different visual style, this single-page-application introduced an events calednar. The form to enter new events validatse as users enter information, and the events list displays all future events in date order. At this stage it uses dummy data, as it has not yet been connected to any back-end.',
        imgSource: formationChurchImage,
        liveUrl: 'https://formation-church.netlify.app',
        githubUrl: 'https://github.com/drewjtaylor/formation-church-react'
    },
    {
        title:"Node Events server",
        subTitle: 'MongoDB and Express server to support endpoints for events and users',
        description: "While not the easiest to show off with a screenshot, developing the back end resonated with me the most so far. The database is made up of User and Event Documents, and requires users to sign in and possess the appropriate token on future requests in order to change, add, or delete events. Currently the database isn't hosted anywhere or conected to a front end, but that is on my list of future projects!",
        imgSource: nodeServerImage,
        liveUrl: 'https://github.com/drewjtaylor/drews-node-project',
        githubUrl: 'https://github.com/drewjtaylor/drews-node-project'
    },
]


export default projects