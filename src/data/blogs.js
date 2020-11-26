const blogs = [
  {
    title: "Build Week 3",
    date: "Nov. 25, 2020",
    summary: "Lessons learned from a week-long team project.",
    text: `At Lambda School, we have this thing called Build Week. Our courses are broken up into units that are three weeks of lecture and daily exercises, followed by one week that's just building. No lectures. You team up with people from other units to build an app over the course of the week. Unit 4 people do the back end, Unit 2 does the front end, and Unit 3 ties it all together with advanced state management. 
    
    Last week I was the Unit 3 person in my team, and I want to write about it because I felt like it's the role where you have to see the bigger picture, and that was kind of exciting to me, and also because I learned a good lesson about communication. 
    
    The back end person is kind of isolated creating the api and the Unit 2 person is responsible for creating forms and styling. Unit 3 is the person who kind of needs to map out how the app works. So I went into full planning-zilla mode for this and made up a flow chart for my Redux state management. This is for an exercise class app. 
    
    <figure>
      <img src="assets/images/flowchart.png" alt="flowchart showing the relationship between reducers/state and actions and things users should be able to do" />
      <figcaption>
        Left: Reducers containing state. Middle: Actions that say how to interact with state. Right: Things users can do. White is all users, yellow is clients, blue is instructors.
      </figcaption>
    </figure>
    
    Before this, I mostly built things by just … writing code. I would literally just be like, okay, what do I need? A header? And then start writing out that bit and it would just grow on its own. That's fine for our small daily projects, but the build week project was larger than that. We had different types of users who needed to be able to do different things. I found myself wishing they had spent more time teaching us how to plan our state. It seemed a little overwhelming, but I like having quick visualizations, so I decided to make the flowchart to give me something to work off of.
    
    I thought I had it all planned out… Then the back end came back with their api, and it was not what I had planned for. I had shared my flowchart with the back end people but I didn't get much of a response other than a thumbs up in the Slack, so I thought it was all right. But clearly there was a lack of communication somewhere. I think this was a really good lesson in not just why communication is important, but in understanding what information needs to be communicated. We had had a Zoom meeting earlier and talked about the things we needed for the app, but obviously we weren't specific enough. Being new to app planning, I didn't really know what I needed to confirm with the back end, but next month I'll have a better idea of what information needs to be synced with the Unit 3 people. Through this experience, I can see much better why being a full-stack engineer is better than knowing only one end -- you'll have a better understanding of what information the other teams need and can avoid situations like I just experienced.`
  },
];

export default blogs;