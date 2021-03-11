let projectsArray = [  
  {
    image: "/assets/projects/family-promise.png",
    title: "Family Promise Intake",
    status: "Completed",
    text: "Upgrading the Family Promise intake system was my Labs project in my final month at Lambda. It was a rollercoaster of a ride familiarizing myself with an existing codebase and researching and implementing a new technology that seemed way above what I was capable of understanding. This project taught me a lot about tenacity and believing in myself. I wrote a whole blog post about the ordeal. It's up in the Writing section of this site.",
    features: ["Authentication", "Okta", "DocuSign"],
    url: "",
    github: "https://github.com/RococoCoding/deprecated-labs31-family-promise-spokane-be-a"    
  },
  {
    image: "/assets/projects/watermyplants.png",
    title: "Water My Plants",
    status: "Completed",
    text: "School project for an app that reminds people to water their plants. I designed the relational database and built a RESTful API with full CRUD operations and authentication. I worked closely with a team of front-end students who built the React app that would interact with my API. The trickiest thing I did for this project was nest promises so I could return a user with all the plants that belonged to them. Although, I realized later I could have just joined the tables instead of making two requests to the database.",
    features: ["REST API", "Authentication", "SQLite3 database"],
    url: "",
    github: "https://github.com/WaterMyPlants-TeamPlants/node-backend"
  },
  {
    image: "/assets/projects/relgoals.png",
    title: "Relationship Goals",
    status: "Under Construction",
    text: "Side project that helps people maintain relationships with friends and family. I worked on this project as a fullstack developer in a small team. I worked on loading the user profile and setting up edit and delete capabilities as well as setting up the admin powers so admins could add goals, search for goals and edit them, and give others admin powers. Biggest challenge: we spent an afternoon trying to figure out how to nest data from one table inside data from another table when they were joined by a junction table, and realized we couldn't really do it with plain SQL. I ended up writing a workaround using for loops to merge the data after making separate calls to the database.",
    features: ["REST API", "React function components", "Redux state management"],
    url: "",
    github: "https://github.com/relationship-goals"
  },
  {
   image: "/assets/projects/anywherefitness.png",
   title: "Anywhere Fitness",
   status: "Completed",
   text: "School project for an app that helps fitness instructors sign people up for their classes. I went into full planzilla mode for this app because I was the sole person in charge of state management. You can find a blog post about it in the Writing section of this site. Instructors had to be able to create, edit and delete classes, users had to be able to search for classes, reserve a spot, change/cancel their reservations, and all users had to be able to log in and see their classes. I'll admit I wasn't super confident about Redux before we started this project, but afterwards I felt like I had a really good handle on it. Practice makes perfect!",
   features: ["React functional components", "Redux state management", "React routing"],
   url: "",
   github: "https://github.com/Anywhere-Fitness-Team-Awesome-Possum/front-end"
  },
  {
    image: "/assets/projects/acetheinterview.png",
    title: "Ace the Interview",
    status: "Completed",
    text: "This was a quick project I whipped up to help with practicing for behavioral interviews. I got the idea after I came across a website that contained a ton of questions. I realized I could use the Python web scraper I had made for the Leopardy! project (below) to gather all the questions and serve them up randomly using Node and Express to build an API and React to make a quick frontend. I researched to find an npm module that would provide webcam recording so people could record themselves answering for review.",
    features: ["Python web scraper", "Node/Express API", "Webcam recording", "SQLite3"],
    url: "https://ace-it-frontend-git-video.rocococoding.vercel.app/",
    github: "https://github.com/RococoCoding/ace-it-backend"
  },
  {
    image: "/assets/projects/leopardy.jpg",
    title: "Leopardy!",
    status: "Under Construction",
    text: "This is a quiz game that's slightly different from Jeopardy! but uses real Jeopardy! questions. I originally was going to use an existing API to get the questions for this game, but I realized the two Jeopardy! APIs I found online weren't going to work for my needs, so I researched how to make a web scraper in Python and adapted that to my needs. I'm currently in the process of figuring out how to set up my database with Postgres and Heroku.",
    features: ["Python web scraper", "<em>Leopards!</em>", "React routing", "React function components", "Node/Express API"],
    url: "",
    github: "https://github.com/RococoCoding/leopardy"
  },
  {
    image: "/assets/projects/stacks.PNG", 
    title:"Stacks", 
    status: "Completed", 
    text: "This was my first big project, built about a month after I started learning coding. It is a personal library app that lets you create a database of your books. I'm proud of this because I feel like I did a lot with what little I knew back then. For example, I didn't know about the built-in filter method, so I wrote my own.", 
    features: ["Search", "Sort", "Filter", "Local storage save"], 
    url: "https://rocococoding.github.io/stacks/",
    github: "https://github.com/RococoCoding/stacks"
  },
  // {
  //   image: "/assets/projects/portfolio.png",
  //   title: "Portfolio",
  //   status: "Under Construction",
  //   text: "I'm not great at design so I infused <strong>my portfolio</strong> with a little bit of humor and hid a few easter eggs to make it a more interesting experience. I hope you have some fun as you explore the site!",
  //   features: ["React functional components", "easter eggs", "responsive"],
  //   url: "https://www.rocococode.com/landing",
  //   github: "https://github.com/RococoCoding/portfolio"
  // }
];

export default projectsArray;
