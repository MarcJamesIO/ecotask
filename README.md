This is my Ecotricity interview task so I'll document my thought process here.

Design:

I checked the example site and made notes of the layout, fonts and colours used. I knew I was going to use the buttons, the hero (potentially with a video background)
with the funky strip SVG's and the cards for the datasets.

Build:

1. Check the data.

I used a CURL request to get the data and check it out. Then I created a simple fetch request function to fetch it
and console.log it to see what it looks like, in order to plan for the types needed.

2. Create the types

There were a bunch of fields in the object but we only need a few of them. I created an interface for the two main bits: Dataset and Resource.

3. Display the data (with no styling)

I created a small table to and some other elements to display the data, noticing some <tags> were included in the description field. I used ChatGPT to help me create a function to strip out the tags and passed the description through that function before displaying it.

4. Styling

I copied some styles from the example site and had to fix a few redundant className issues. I also added a video background to the hero section and a dark overlay to make the text more readable. I styled the buttons to matcht he brand and added an svg logo to match the site.

I then replaced the table with components that look a little smarter and I wanted to separate them to try and include some animation as mentioned in the brief.

So I went to NPM and installed Framer Motion, trusting that 10,000,000 weekly downloads means it avoided the NPM hack that happened earlier this month.

I encountered a server/client component issue when trying to use motion.div in the DatasetCard component, so I had to add "use client"; to the top of the page.tsx file to fix that BUT then realised it's an async server component rendering the page, so I had to extrct the Resources section into its own client component to fix the issue.

This was a lot of work for a simple fade animation. Anyway I used ChatGPT again to remind me how to use Framer Motion to create a fade-in effect when the cards come into view as
it has been a little while since I used it.

5. Final tweaks

I added smooth scrolling to the anchor link to the resources section and added a hover effect to the buttons. I also added those stripey strips to the sections.

I then added a footer with a logo and copyright text, as it looked odd without a bookend to end the page.

I also added a bunch of those stripey borders to everything and... removed them. It was a bit overkill.

Also it's using Tailwind which is mobile first so should be fine on mobile.
