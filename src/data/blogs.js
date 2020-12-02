const blogs = [
  {
    title: "Build Week 3",
    date: "Nov. 25, 2020",
    summary: "Lessons learned from a week-long team project.",
    text: `<p>At Lambda School, we have this thing called Build Week. Our courses are broken up into units that are three weeks of lecture and daily exercises, followed by one week that's just building. No lectures. You team up with people from other units to build an app over the course of the week. Unit 4 people do the back end, Unit 2 does the front end, and Unit 3 ties it all together with advanced state management.</p> 
    
    <p>Last week I was the Unit 3 person in my team, and I want to write about it because I felt like it's the role where you have to see the bigger picture, and that was kind of exciting to me, and also because I learned a good lesson about communication.</p> 
    
    <p>The back end person is kind of isolated creating the api and the Unit 2 person is responsible for creating forms and styling. Unit 3 is the person who kind of needs to map out how the app works. So I went into full planning-zilla mode for this and made up a flow chart for my Redux state management. This is for an exercise class app.</p>
    
    <figure>
      <img src="assets/images/flowchart.png" alt="flowchart showing the relationship between reducers/state and actions and things users should be able to do" />
      <figcaption>
        Left: Reducers containing state. Middle: Actions that say how to interact with state. Right: Things users can do. White is all users, yellow is clients, blue is instructors.
      </figcaption>
    </figure>
    
    <p>Before this, I mostly built things by just … writing code. I would literally just be like, okay, what do I need? A header? And then start writing out that bit and it would just grow on its own. That's fine for our small daily projects, but the build week project was larger than that. We had different types of users who needed to be able to do different things. We needed to keep track of both user information and class information. I found myself wishing they had spent more time teaching us how to plan our state. It seemed a little overwhelming, but I like having quick visualizations, so I decided to make the flowchart to give me something to work off of.</p>
    
    <p>I thought I had it all planned out… Then the back end came back with their api, and it was not what I had planned for. I had shared my flowchart with the back end people but I didn't get much of a response other than a thumbs up in the Slack, so I thought it was all right. But clearly there was a lack of communication somewhere. I think this was a really good lesson in not just why communication is important, but in understanding what information needs to be communicated. We had had a Zoom meeting earlier and talked about the things we needed for the app, but obviously we weren't specific enough. Being new to app planning, I didn't really know what I needed to confirm with the back end, but next month I'll have a better idea of what information needs to be synced with the Unit 3 people. Through this experience, I can see much better why being a full-stack engineer is better than knowing only one end -- you'll have a better understanding of what information the other teams need and can avoid situations like I just experienced.</p>`
  },
  {
    title: "App Planning",
    date: "Dec. 1, 2020",
    summary: "Tips on how to plan your app.",
    text: `<p>One of the things I wished they'd talked more about at the school was planning your app. Early on, I would just start writing the first thing on the page I wanted to see and went from there. After learning advanced state management, I was finally able to see the big picture, and now I can think about planning an app much easier than I did before. If you're new to coding and want some tips on how to plan your apps before you code, here's what I've learned.</p>

    <p>The first thing to do is try and visualize the page and how you would want it to look. This doesn't have to be a design thing -- just focus on a simple wireframe type of site. What are the main elements? Say, header, nav, page components. Then you dig down. What's inside of those? Links, information, icons, images. Write it all down.</p>
    
    <img src="assets/images/appchart.png" class="tall" alt="App chart: App contains header, storefront, shopping cart. Header contains logo, nav. Store front contains splash image, featured items, categories. Featured items contains items. Items contains price, image, description, link to item page. and so on." />

    <p>You won't think of everything, but you're just at the broad strokes planning stage, and the more you think about how your app will actually be, the more details you'll be able to preemptively plan for.</p>
    
    <p>Next step is to think about state, or where and how you're going to store your information. I like to think of state as a mini database. It's where non-static information is stored, information that changes. If you have a block of text that you never need to change, you can put that directly as a string into your JSX. You don't need state for that. If you want to update your text based on some user input, you do need to store it in state. So at this point you will probably want to think about the actions a user will want to be able to do with your app. Make a list of actions like "add item to cart" and how they will do that "button" (add "button to add item" to the above app chart) and then think how that interacts with your state. You'll need to add that item to your shopping cart, but you won't have to edit the item itself. That means you need a state for the shopping cart that's separate from your regular store state.</p> 
    
    <p>In React, passing information around can get complicated because information only goes down to the children. Getting information back up to the parent is harder, and getting it to a sibling is a pain. You can save yourself some trouble by planning your state ahead of time so you don't end up passing state through components that don't need it just so you can get to a third component. If you are learning about Redux and Context API, I highly recommend <a href="https://kentcdodds.com/blog/application-state-management-with-react" target="_blank" rel="noreferrer">
    Kent Dodd's article</a> on the pros and cons of different state management systems.</p>
    
    <p>I haven't found any formalized method of planning an app. If you know of any, please reach out to me via any of the social media icons above and let me know! But I find with mapping things out, it's sometimes easiest to just get a piece of paper and start writing things out freeform just to get the mental diagram out.</p> 
    `
  }
];

export default blogs;