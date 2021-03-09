let projectsArray = [  
  {
    image: "/assets/projects/family-promise.png",
    title: "Family Promise Intake",
    status: "Completed",
    text: "Upgrading the <strong>Family Promise Intake</strong> system was my Labs project in my final month at Lambda. It was a rollercoaster of a ride familiarizing myself with an existing codebase and researching and implementing a new technology that seemed way above what I was capable of understanding. This project taught me a lot about tenacity and believing in myself. I wrote a whole blog post about the ordeal. It's up in the Writing section of this site.",
    features: ["Authentication", "Okta", "DocuSign"],
    url: "",
    github: "https://github.com/RococoCoding/deprecated-labs31-family-promise-spokane-be-a"    
  },
  {
    image: "/assets/projects/acetheinterview.png",
    title: "Ace the Interview",
    status: "Completed",
    text: "<strong>Ace the Interview</strong> was a quick project I whipped up to help with practicing for behavioral interviews. I got the idea after I came across a website that contained a ton of questions. I realized I could use the Python web scraper I had made for the Leopardy! project (below) to gather all the questions and serve them up randomly using Node and Express to build an API and React to make a quick frontend. I researched to find an npm module that would provide webcam recording so people could record themselves answering for review.",
    features: ["Python web scraper", "Node/Express API", "Webcam recording"],
    url: "https://ace-it-frontend-git-video.rocococoding.vercel.app/",
    github: "https://github.com/RococoCoding/ace-it-backend"
  },
  {
    image: "/assets/projects/leopardy.jpg",
    title: "Leopardy!",
    status: "Under Construction",
    text: "<strong>Leopardy!</strong> is a quiz game that's slightly different from Jeopardy! but uses real Jeopardy! questions. I originally was going to use an existing API to get the questions for this game, but I realized the two Jeopardy! APIs I found online weren't going to work for my needs, so I researched how to make a web scraper in Python and adapted that to my needs. I'm currently in the process of figuring out how to set up my database with Postrgres and Heroku.",
    features: ["Python web scraper", "<em>Leopards!</em>", "React routing", "React function components", "Node/Express API"],
    url: "",
    github: "https://github.com/RococoCoding/leopardy"
  },
  {
    image: "/assets/projects/stacks.PNG", 
    title:"Stacks", 
    status: "Completed", 
    text: "<strong>Stacks</strong> was my first big project, built about a month after I started learning coding. It is a personal library app that lets you create a database of your books. I'm proud of this because I feel like I did a lot with what little I knew back then. For example, I didn't know about the built-in filter method, so I wrote my own.", 
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
