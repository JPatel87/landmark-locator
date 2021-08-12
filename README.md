# Locate the Landmark

Locate the Landmark is a multiple choice quiz designed to test the geographical knowledge of users. The users of this quiz will be children of primary school age aged around 10. 

Users are invited to go on a "world tour" through which they are shown landmarks around the world. Their task is to correctly identify and select a landmark's country of origin. Users a given a ten second time frame to choose an answer, before the quiz automatically moves on to the next question. 

Below are images of the interactive site displayed on different screens to illustrate its design responsiveness.

Home display:

![home-responsive-display](assets/images/readme-images/home-responsive.png)

Game display:

![game-responsive-display](assets/images/readme-images/game-responsive.png)

End game display:

![game-responsive-display](assets/images/readme-images/end-game-responsive.png)


# UX

## Site Owner Goals

The objectives of the site owner are:

* To create a game that is visually appealing to target users.
* To have a theme for the game which is carried through until the end for consistency.
* To deploy a project that is of industry-standard. 

## User Stories

Users would like:

1. To be able to open up the game website  and see a game that is visually appealing from which the concept of the game can easily be understood.
2. To be able to easily navigate to play the game through the use of big buttons which clearly signpost their intent.
3. To be challenged by the content of the game.
4. To get an indication of what questions have been answered correctly and incorrectly.
5. To be given a summary of their performance at the end of the game.
6. To be given a choice of what to do at the end of the game.

## Wireframes

Below are the wireframes that were initially created for this project. The wireframes have been created using [Balsamiq](https://balsamiq.com/wireframes/?gclid=EAIaIQobChMIvd-up7Gq8gIVdgCiAx3NKwsREAAYAiAAEgInd_D_BwE). 

Note: The final design of the project does vary slightly from these initial wireframes but the key concepts are largely the same. The wireframes were created on the iphone container as the project was intended to be designed according to the mobile phone first approach. 

From right to left: 
Home display, Game display, End-game display

![project-wireframes](assets/images/readme-images/project-wireframes.png)

# Features

## Existing features

### Generic features

1. Colour
* The colours of the game chosen, represent the colours of the Earth and they were selected from [Canva](https://www.canva.com/colors/color-palette-generator/). These colours not only meet the "world tour" theme but are also eye catching for the younger target audience. 

![website-colours](assets/images/readme-images/website-colours.png)

2. Font-family
* The font-family used throughout this game is "Bubblegum Sans" (see below image). The font was sourced from [google fonts](https://fonts.google.com/). It was chosen because it has a non-formal, bold, appearance.

3. Header 
* Consists of a logo and a heading
* The logo used in the header is of a landmark icon which was sourced from [Font Awesome](https://fontawesome.com/).
* This logo is also used as the favicon for this project. 
* The objective of using this logo is to create a memorable image to enable users to remember the website by. It also projects an indication of the intent of the website.
* The title of the project is simple, catchy and aims to effectively communicate out the intent of the website. 

Header and Favicon:

![header-and-favicon](assets/images/readme-images/header-and-favicon.png)


### Page specific 

1. Home page:

![home](assets/images/readme-images/home.png)

* The home page has a happy, cartoon, world character which is attractive for children and it also carries through the theme of this project. 
* Another aim of the cartoon character is to appear as though they are delivering the instructions of the game, which helps make the instructions easy to digest and less formal.
*  The button used to initiate the game has purposefully been named "Start tour" in order to keep the theme running through the project. It is designed to be bigger than the rest of the paragraph text to highlight its importance. When the button is hovered over, it turns green and the mouse pointer turns to a curser, this is to add some fun element to the button. The mouse curser style has been added to every button on this project.

2. Game page:

![game](assets/images/readme-images/game.png)

* The game page has a landmark question counter at the top of the page so that users can know how many questions they need to pass through before the game finishes.
* There is a timer below the landmark question counter to add in a challenge element to the game.
* The landmark image is sizeable so that the user can clearly see the landmark in order to decipher its location. 
* The buttons are styled in the same way as the start tour button on the home page to provide uniformity throughout the project.
* The user will have to look at the landmark and decide from the button choices which country the landmark is in.
* When a choice is correctly selected the button will go green and when a choice is incorrectly selected the button will go red. The game will then move to the next question. This provides a quick visual aid to the user about whether they had selected the right answer, without having to use much text.
* If a user does not select an answer before the timer is up, the display will proceed to the next question and this will be noted as an incorrect answer.  

3. End game page:

![end-game](assets/images/readme-images/end-game.png)

* The end game page contains a default statement informing the user that the tour is complete.
* The users score is shown to them with an an advice comment; these comments differ according to what result bracket you have scored within.
* Below all of the above text there is a striking emoji that summarises the users performance, which serves as a powerful visual aid appealing to children. 
* After the user has read and understood how their performance went, they can then make an informed decision about whether to tour again or go back to the home page. 
* Both tour again and home options are  buttons which have a hover pseudo class changing the background colour to green when hovered over (same as with the start tour button on the home page).

## Features Left to Implement
If time permitted, I would have liked to:
* Add a link to the home page from the header i class to make it easier for the user to come out of the game at any point (if this is possible)
* Add a username input function, to further personlise the gaming experience for the user.
* Add additional levels into the game, for example have hard and easy levels, to enable users to progress onwards.  

# Testing

* The website has been reviewed on various devices such as laptops, ipads and iphones to ensure the media queries are running as expected. No issues reported.
* The website has been tested by myself, my tutor and my husband to ensure that all the elements that the user will interact with or see are working as they should be, such as: 
  * favicon icon loads as it should.
  * images and text are appropriately sized.
  * buttons able to be pressed and lead
    onto correct paths.
  * The correct landmark number is loading
    when the game proceeds.
  * The correct answers have been assigned 
    to each landmark, preventing users from selecting an incorrect as the correct answer.
  * The correct landmark has been assigned
    to the answer choices.
  * pseudo class and curser pointer applies
    correctly when hovering over buttons
  * if the user selects the correct answer
    button, that button will display green momentarily and then the colour will reset for the next question.
  * if the user selects the incorrect answer
    button, that button will display green momentarily and then the colour will reset for the next question.
  * if the user answers the question before
    the timer is up, the display will move onto the next question and the timer will still reset on the next question.
  * if the user fails to answer the 
    question before the timer is up, the display will move onto the next question and the timer will reset.
  * end game summary statments show the
    correct number of questions and display the correct advice comment and image. 









