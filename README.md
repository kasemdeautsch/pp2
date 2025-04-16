
# Random Rock, Paper, Scissors, Lizard, Spock "RPSLS"(Version-1).
The random "RPSLS" game is a simple  powerful game that as friends, colleaques and family play,\
they can learn to predict outcomes, understand probabilities, and develop the ability to think ahead.\
It allows people to choose role and find if they winn according to the role of the game.
The game has totaly true results because the other choice is random.

This game targets adults and children as well foster essential skills such as decision-making, strategic thinking, and social interaction.

 
![](/assets/images/readme/testing/main-game.png)

## Wireframing
**Balsamiq**
- I designed an inatial digital look of the game using the **Balsamiq wireframe desktop tool**\
  so that the design in actual being simple and does not take time.

  ![](/assets/images/readme/testing/wireframing.png)
  
  ![](/assets/images/readme/testing/wireframing-mobile.png)


## Features

**Existing Features**
- Version-1 features\
  Please notice that in this version the game ends on 5 points for player/computer\.
  When the modal appears click ok and the game will reset.
- The Header
  - The Header placed at the top of the page and shows the name of the game:\
    Random Rock, Paper, Scissors, Lizard, Spock in a clear playfull font that contrasts with the background.
  - The header tells the user clearly what game they are playing.
![](/assets/images/readme/testing/header.png)

- The Game Options
  - The game options contain a clear instructions and a choice to play Rock, Paper or Scissors,..
  - The choices section is an interactive Buttons that allow the player to click and then choose the 
    appropriate role.

    ![](/assets/images/readme/testing/options.png)
- Playing
  - When the Players click a button the relevant image is displayed in their side of the game board.
  - When a player clicks abutton the JavaScript code automaticaly chooses a random option(image) 
    in the computer side of the game board.
  - According to an algorithm the computer alerts that the computer or the winner\
    earn 1 point.
    ![](/assets/images/readme/testing/alert.png)
  - If both computer and player chooses the same option it will be a tie\
    and the scores remain the same.
    ![](/assets/images/readme/testing/tie.png)
- Reset the game:
  - A button is added to reset the game.
  - Alink beside the button opens in a new tab to see the rules and how to play.
  ![](/assets/images/readme/testing/reset-game.png)
- The results
  - The result is announced in a modal with the winner (player/computer).
  - the game will reset after that.
  - You can't close the modal when clicking outside it.
  - Clickin on (ok) or (X) will exit from the modal and reset game
  
**Features Left to Implement**
- I would like to extend this game in the future to  have the ability of game-continue.
## Testing
  - The game works on different web browsers like Chrome, Firefox and Edge.
  - The results are always correct, according to it's rules.
  - The web site is responsive and looks good on standard screen sizes using devtools device toolbar.
  - The header, instructions, options, results, and footer text is readable and easy to understand.
  
  
  - All Images have the **alt** attribute for the purpose of impared visual users.
  - All Buttons have the **Aria-label** attribute.
  - I included **mete tags** with **keywords** and **description** attribute to enable more
    SEO improvement.
  - The fonts and colors chosen are clear and easy to understand and accessible by running it 
     in the lighthouse in DevTools.
  - I chosed  a color that is almost light brown for both header and footer
     with a color that is close to it on the body also.  


     ![](/assets/images/readme/testing/testing.png)
     ![](/assets/images/readme/testing/desktop-testing.png)
     
     

**Bugs**
  - In the previous version, the message of the winner was inconsistent, I fixed that with\
    Js code so that it appears on final result and only scores updated when a points occur.

  - When I deployed my project to github, I noticed that the  links to (css, js) were broken, \
    the reason was that i used the absolute file path:\
    `<link rel="stylesheet" href="/assets/css/style.css">`
  - To fix that I removed the / from the starting.


**Unfixed Bugs**
  - No unfixed bugs.

  
**Validator Testing**
  - HTML
    - I tested the website and no errors were returned when passing through the official W3C validator
    ![](/assets/images/readme/testing/html-validator.png)
    - Also 404.html page tested and no errors found.
    ![](/assets/images/readme/testing/errorpage.png)
    
  - CSS 
    <p>
       <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!." />
       </a>
    </p>
    
    - No errors were found when passing through the official (Jigsaw) validator
      ![](/assets/images/readme/testing/css-validator.png)
  - Accesibility
    - Colors and fonts are accesible and readable using lighthouse in devtools.
      ![](/assets/images/readme/testing/testing.png)
 - JavaScript
   - I tested the code and found only one warning about for loop.
    ![](/assets/images/readme/testing/Js.png)
## Deployment

  - The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab.
    - Navigate to **Pages** tab in the left menue.
    - From the source section drop-down menu choose **Deploy from branch**.
    - Select the relevent branch (*main* in my case).
    - Make sure the /(root) directory is selected and klick **Save**.
    - Once the branch has been selected, the page provides the link to the deployed project.
    - The live link can be found [here](https://kasemdeautsch.github.io/pp2/).
    - In the repository on the right menue under **Deplpyments** click on** github-pages**.

## Credits
- Content
  - The page design and Project idea was taken from **Code Institute** module in our course.
  - I captured the images from a project on **Github**, and when I wanted later to document that\
    I didn't find after I researched, I will mention that project name when I find the website.
  - Some functions idea ware taken from **Love Maths** project
  - The following websites were used for problem solving.
    - **https://www.diffchecker.com/**.
    - **https://ui.dev/amiresponsive**.
    - **https://validator.w3.org/**.
    - **https://jigsaw.w3.org/css-validator/**
    - **https://jshint.com/**.
    - **https://stackoverflow.com/**.
    - **https://www.w3schools.com/**.
    - **https://www.perplexity.ai/**.
    - **https://www.pexels.com/**.
    - **https://tinypng.com/**.
    -  **https://balsamiq.com/**.

- Media
  - I found some images for the (Rock Paper Scissors,..) in Google.
  