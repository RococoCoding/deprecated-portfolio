const blogs = [
  { title: "Don't Panic",
  date: "Mar. 3, 2021",
  summary: "Family Promise Project Breakdown.",
  text: `<h2 class="blog-subtitle">Introduction</h2>
  <p>In the final month at Lambda School, students work in teams on a real-world project. The premise of this final month, called "Labs", is to mimic what it's like to work in a tech job. Some of the projects are greenfields, but most are existing projects where we have to familiarize ourselves with an existing codebase. We have a product roadmap and do daily standups and weekly stakeholder meetings and product review meetings.</p>
  
  <p>The project I'm working on is upgrading the intake system at a homeless shelter in Spokane, WA. The shelter wants to be compassionate by making the intake process quicker and easier for the guests because it's a very stressful time in their lives, and the quicker they can get the care they need, the better. The previous team had already digitized the forms, but the shelter needed something more official than typing their name in a box for the legal forms that needed signing, so they wanted to integrate DocuSign. It would also serve to speed up the intake process so the guests could get to rest sooner. The other main thing I worked on was getting Facebook login integrated with the existing Okta login so the guests would be able to log in quicker. The team was also tasked with setting up an Executive Director dashboard so the director would view analytics from the data science team.</p>
  
  <img src="/assets/images/familypromise.png" alt="Screenshot of the Family Promise login page with Facebook and Google login options underneath the  main login widget" />
  
  <p>I've heard that in the real world new devs get anywhere from a few weeks to three months to settle into their new job and familiarize themselves with the existing codebase. Since Lambda shortened the Labs period from two months to one, we were expected to familiarize ourselves within a week. That was pretty intimidating, but it wasn't actually that bad. I think our codebase, while much larger than anything I had worked on previously, was not that big compared to what you would see in a real job.</p>
  
  <p>What turned out to be really hard was researching technology we weren't familiar with (DocuSign) and breaking that down to use in our app. DocuSign had a lot of documentation but a lot of it was outdated and their out-of-the-box demo app used lots of syntax we had never seen before. Everyone on our team panicked for a few days when we first started looking into it, but eventually we rolled up our sleeves and gave a good-faith effort at reading through it and discovered it wasn't really all that bad. We just had to focus on understanding the broad strokes of what this chunk of code does instead of getting bogged down in details about what this syntax is and etc.</p>
  
  <img src="/assets/images/dontpanic.jpg" alt="A green sphere in space with no eyes but a large mouth, open with tongue sticking out, and two arms with hands up and palms facing outwards and the words DON'T PANIC."/>
  
  <h2 class="blog-subtitle">Breakdown</h2>
  <h3 class="blog-subsubtitle">Upgrade Your Google Fu</h3>
  <p>The Facebook integration was pretty easy...once we found the right docs. It wasn't super simple, but it was wayyyy easier than finding the right info for DocuSign. (We'll get to that later.) We hadn't worked with anything like Okta login before so it was pretty intimidating at first, but Okta has pretty detailed and accurate docs, so once we found which docs we needed, we were able to get that done in under a week.</p>
  
  <h3 class="blog-subsubtitle">What's What and When's When?</h3>
  <img src="/assets/images/whoswho.PNG" alt="Code snippet from an example.json: "dsClientId": "{INTEGRATION_KEY_AUTH_CODE}",
  "dsClientSecret": "{SECRET_KEY}",
  "dsJWTClientId": "{INTEGRATION_KEY_JWT}",
  "privateKeyLocation":  "config/private.key",
  "impersonatedUserGuid": "{IMPERSONATED_USER_ID}",
  "signerEmail": "{SIGNER_EMAIL}",
  "signerName": "{SIGNER_NAME}"}" />
  <p>I think our biggest struggle with DocuSign was dealing with out-of-date docs and poor naming conventions. It was often difficult to rely solely on the docs because we quickly discovered things were either wrong or deprecated and there were no dates on the docs to determine if they were recent or not. The names of variables/attributes seemed to have changed over time as well and sometimes that was not provided in the resources provided by DocuSign. For example, the impersonationUserGuid value says it needs the "impersonated user id", but in a Stack Overflow answer, we found what we really needed was the API username, which is not a classic username you can choose yourself; it's a random string of letters and numbers that looks nearly identical to the API ID.</p> 
  
  <img src="/assets/images/spidermanpointing.png" alt="Meme of three Spider-Men pointing at each other, one labeled IMPERSONATED USER ID, one API Username and one API ID." />
  
  <p>Lesson learned: Always take the time to update your docs for the next dev to use your work.</p>
  
  <h3 class="blog-subsubtitle">Breaking Things Down</h3>
  <p>Even after sitting down and figuring out what the chunks of code did, we still had trouble getting it to run properly. We ended up breaking everything down into parts: 1) make a valid JWT token, 2) exchange that JWT token for an access token, 3) and then call the DocuSign API to get the redirect URL for embedded signing. This wasn't an intentional strategy, but in hindsight it worked out really well and is something I could see myself modeling later for other projects I'm struggling with. For example, because the authorization wasn't working and we weren't sure why, it made sense to just try and make a token by hand so we could test out the info in each field until we got one that worked. Then we would know exactly what values were needed and could troubleshoot the auth code in the demo app better. We just broke the problem down from "get authorized" to "get a working JWT token," and that was able to help us solve the larger problem.</p>
  
  <h3 class="blog-subsubtitle">Frankencode: The Stitchening</h3>
  <p>Once we were able to get those three steps above working manually using different buttons and manually obtaining then hardcoding the important data, we had to stitch the pieces together so they could work together in one button and receive information dynamically. This portion wasn't too bad. In the process of doing everything manually we had gained much more familiarity with the process and what information was needed, so we were able to troubleshoot with a clearer understanding of what was relevant. DocuSign's demo app was larger than anything we had previously worked with so it felt like looking for a needle in a haystack sometimes, though I'm sure it's relatively small in the larger universe of coding.</p>
  
  <img src="/assets/images/itsalive.jpeg" alt="A man with wild hair and stethoscope shouting IT'S ALIVE!" />
  
  <h3 class="blog-subsubtitle">Frankencode Redux: Higher Order Stitching</h3>
  <p>Up until this point we had been working in a tiny app whose goal was to get the DocuSign process going with a single button. Once we got that working, we had to merge this button and the DocuSign flow into our front and back ends. Integrating it into the backend was a long slog through error messages but it was mostly straightforward. We did run into some interesting problems in the front end, though.</p>
  
  <p>Because we were using a single-page app hosted on a different domain than the back end, we ran into a CORS issue because DocuSign only accepts same origin requests. Since we initiated the call from our front end, DocuSign's API was expecting a call from our front end, not our back end. The most direct way of dealing with this issue would be to create a CORS gateway, but we were informed that would require a lot of sysadmin work that we were not equipped to handle. However, we were able to come up with a workaround where we had our backend return the URL DocuSign provided to our front end and have our front end client load that URL.</p>
  
  <p>Once we got the redirect to DocuSign working, we then had to handle the return from DocuSign. This proved to be more tricky than anticipated because we had never synced DocuSign and Okta, the authentication provider we were using for our app, and so Okta logged the user out when they left the Family Promise domain. However, I came up with a solution where we installed an npm package that would let us access the last browser location (for some reason this is not included in useHistory?), and used that to filter out when we wanted to log back in as normal or log back in and go to the rest of the intake flow after DocuSign.</p>
  
  <h2 class="blog-subtitle">Review and Reflection</h2>
  <img src="/assets/images/lookingglass.jpg" alt="Illustrated cover of an old paperback of Lewis Carroll's Alice Through the Looking Glass. Alice is dressed in a frilly blue dress with a pink bow on her back and she's climbed onto the mantle and is looking through a mirror"/>
  <b>Shipped features:</b>
  <ul>
  <li>Executive director dashboard with mock analytics visualizations</li>
  <li>DocuSign integration</li>
  <li>Facebook/Google login integration</li>
  </ul>
  <br>
  <p>I think we're going to leave the DocuSign portion of the product in a very good place. We've fully implemented the main embedded signing process, and there's one or two things the next team could add, like multiple signers, but we've done some research on that and will include that information in our readme for the follow up team.</p>
  
  <p>In my opinion a lot of refactoring needs to be done on this project to make it successful in the future. Members of Team B found a lot of bugs and worked hard to fix them but didn't make it through the backlog. The DocuSign team also discovered the staff signature page, where they sign that this person has completed certain forms -- that info wasn't being stored anywhere. There's already been talk of refactoring the backend to make space for a services provided table, so if they work on that, it would be an ideal time to add the staff signature information there as well.</p>
  
  <p>Overall, I'm really glad I had this experience! It was a great chance to learn about keeping calm in the face of adversity and understanding what I (and we, as a team) were capable of. I've now gone through the crucible of familiarizing myself with a codebase and researching and implementing technology I am not familiar with, two things that I've heard can be the hardest part of starting your first job as a developer. I was lucky enough to be working with a great team of dedicated people who were supportive of each other and worked really well together, and I think the experience will give me a better sense of what qualities to look for in teammates in the future. For instance, I'm pretty smart and good at problem-solving but I can also be impatient, and without the steady presence of some of my teammates, I might not have sat down to actually read through the code line by line. A good team dynamic has people whose strengths complement each other, and now I have a clear example of why having someone who's not afraid to go the slow steady route can work really well with my personality.</p>`
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
},
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
];
export default blogs;
