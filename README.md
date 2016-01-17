# best-ro


## Design observation & suggestion

Overall the design is quite clean and simple and I don't think it requires any extensive tweaking, apart from a few perhaps.

1. In the main hero/splash section, white text against a dark background such as this might be a better choice.

2. Performance review button is a little neither here neither there at the moment in terms of importance, could do with a brighter colour.

3. The hero/splash area could use something more... I can't put my finger on it, I've added a very slow zooming effect to the background effect, seems to go with the theme well.

4. The news titles could use a bigger font. The original size of 19 didn't quite go with the rest of the design.





## UX observation

1. There's not much going on at the moment but my I've added a few animation/transition to make general interaction a bit more responsive. The services grid looks great as it is but I feel that on hover, a slide-in information block could be useful. Perhaps something that encourage clicking on a particular item.




## Dev Notes

1. The site is half responsive at the moment. The initial design had a width of 1100px. Which is fine on screens wider than 1100px and at the moment, smaller than 1024px screens. Given the short notice, I decided not to implement styling for the inbetween screen sizes. For now it goes into phone/tablet mode, when the screen is -/= 1024px wide.

2. I'm using a percentage based SASS loop to generate a 12 column grid for site wide implementation. For now it's only responsive relative to individual parts of the website.

3. I'm using mixin to run media-queries and adding them to classes as needed instead of a seperate stylesheet. I feel that given the size of the project it's more efficient this way.

4. The Articles and News section is being turned into a slider on screen narrower that 1024px. I'm using Slick Carousel to achieve it. I find it to be the best solution in this case since it has a "destroy" function which allows me to simply load the page without any slider and activate/deactivate it when needed depending on screen size.

