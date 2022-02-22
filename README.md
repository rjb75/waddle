> Original writeup for Wadle, as presented on DevPost for CalgaryHacks 2022. Edited for clarity.

## Inspiration

In our digital world, there are a multitude of applications that exist to help folks manage their mental health. Therapy, meditation, emergency contact -- there seems to be a platform for every niche and need, providing help to people all around with world with nothing more than internet access. We noticed, however, that there was a real lack of mental health apps that focused more on reflection and the ability to use trends in mood and emotions to not only support one's self, but to be able to more easily reach out to others for support when needed. This is where Wadle comes in. 

## What It Does
Wadle enables you and your peers to connect and support one another's mental health. Through the power of daily 60 second questionnaires, data and statistics, resources and tips, you and your peers gain access to a library of mental health-related information. Through the cloud and Google's Natural Language Processing, your peers can learn about ways to support you. You can even choose how much information your peers get! Privacy, collaboration and support-building is the main priority for Wadle. 

## How We Built It

Our Software is designed with a micro-service architecture with a frontend built entirely on React.jsx, our router (or API Gateway) built on a Python Server, and 2 microservices built to meet our application's requirements. The microservice architecture enables greater modularity and a long-term, scalable solution to build out the features of our application. Although it was our first time implementing this model, it enabled a great amount of collaboration. 

The front end is built upon a solid foundation of the React-Redux-Javascript project. 

Overall, our current iteration is a designed and functional application that is built for the web, accessible using any modern device. 

The API Gateway is built on Python with FastAPI conducting the routing. The routing redirects requests to 2 other microservices. Our API Gateway also conducts important authentication with Google Firebase. 

Our first microservice is also on Python built for the Machine-Learning component of our application. We utilize user-created data and utilize Natural Language Processing to understand and provide feedback to users.

Our second microservice is built on Golang. This microservice acts as our database connector, conducting all the relevant SQL queries with our external database (PostGreSQL). 

---

### Technologies Used (Our Stack)

---

![WadleStack](https://i.imgur.com/sfcE9BK.png)

In only 24 hours, we were tasked with creating a **web application** to **support** individual mental or physical health.

| Stack     | Technology Used                      |
|-----------|--------------------------------------|
| Front-End | React, Figma, Javascript, SCSS |
| Back-End  |             Google Firebase, Golang, Python, Fibre, FastAPI|
| Cloud/Hosting     |                       OAuth, Google Cloud, Google NLP, Heroku|
| Database  |                     Google Firestore, PostgresQL|
| Querying|    SQL|

## Challenges We Ran Into

When developing Wadle we opted to utilize a more complex backend which included

- Designing a complex data model
- First time implementing a Software Architecture (Microservices) in a hackathon
- Developing a full-stack application with ML, data analysis, consideration of accessibility in the design, and modularity of a software. 


## Accomplishments We're Proud Of

- Creating an Accessible Design
- Implementing most designs into code through styling
- Building a functioning Microservices architecture
- Building an app that affects us directly as students struggling with Mental Health! 
- Conducting user interviews and necessary research through our rigorous planning 

## What We Learned

Through the process of developing Wadle for CalgaryHacks 2022 we learned many skills that will help our team as we work on other projects in the future.

- Prioritization of features 
- Git and project management skills in a fast-paced team environment
- Greater collaboration for data analysis and modelling
- Importance of planning and user research prior to developing an application


# Business Viability

## Revenue Streams
- Integrating Wadle into professional services within the health industry. 
- Sponsored Health datasets, API's and other resources

## Obtaining Users
- Working with Health Professionals
- Target certain demographics & adapt to environments such as universities, workplaces and other communities 

## Lowering Expenses
- Deploying & building a web app allows for extensive A/B testing of users with respect to new features 
- Scalable backend technologies provide throughput to scale the technology needed.
- Minimalizing on "additional features" by having the goal set to peer-relationship building

## Competitive Advantage
- Less monetization, no mandatory costs or insurance
- Rather than receiving "anonymous" support, we help you build your relationship with the people around you 
- Not presenting an overwhelming amount of data like other applications
- Ability to export and share data with healthcare professionals and parties (not questionnaire results).
- Changing privacy settings per peer

## What's next for Wadle

As we further develop Wadle we hope to improve on some **current implementations** and **develop additional features**:
- Integrate all backend functions into a single database with redundancy
- Identify a growth target and plan
- Dockerize and Grow
- Utilize applications like voice flow to answer questionnaires orally 
