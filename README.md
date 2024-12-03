
# Random Rock, Paper, Scissors (game) 
The Random Rock, Paper, Scissors game is simple  powerful game that as peofriends, colleaques and family play, they can learn to predict outcomes, understand probabilities, and develop the ability to think ahead.
It allows people to choose role and find if they winn according to the role of the game.
The game has totaly true results because the other cchoice is random.

This game targets adults and children as well foster essential skills such as decision-making, strategic thinking, and social interaction

 
![](/assets/images/readme/testing/responsive.png)

## Wireframing
**Balsamiq**
- I designed an inatial digital look of the game using the **Balsamiq wireframe desktop tool** so that  
  the design in actual being simple and does not take timd.

  ![](/assets/images/readme/testing/wire-framing.png)

## Features

**Existing Features**

- The Header
  - The Header placed at the top of the page and shows the name of the game: Random Rock, Paper, Scissors
    in a clear playfull font that contrasts with the background.
  - The header tells the user clearly what game they are playing.
![](/assets/images/readme/testing/header.png)

- The Game Options
  - The game options contain a clear instructions and a choice to play Rock, Paper or Scissors  
  - The choices section is an interactive Buttons that allow the player to click and then choose the 
    appropriate role.

    ![](/assets/images/readme/testing/options.png)
- The Results
  * When the Players click a button the relevant image is displayed in their side of the game board.
  + when a player clicks abutton the JavaScript code automaticaly chooses a random option(image) 
    in the computer side of the game board.
  * according to an algorithm the computer determines who is the winner.
  - The winner is announced to the player under the options buttons and the result Score is updated for 
    either the player or the computer.
  + The Result and the Score is displayed clearly to the user making it easy to understand
      who has won and the resulted **Score**.
      ![](/assets/images/readme/testing/result.png)
- New Feature added
  - After 5 times of playing the final **Winner** is announced and the scores are reseted.
  ![](/assets/images/readme/testing/final-winner.png)
- The footer
  - The footer located in the bottom of the page and displays the rules of the game.
  - The footer is available to the useer because it clearly shows the rules to understand
     how the game is played.
     ![](/assets/images/readme/testing/footer.png)

**Features Left to Implement**
- I would like to extend this game in the future to  **rock paper scissors lizard spock**.
## Testing
  - The game works on different web browsers like Chrome, Firefox and Edge.
  - The results are always correct.
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
     
     

**Bugs**
  - no bugs found.
  - I used the **relative** file path instead of the **absolute** one according to github so no
     broken links found when deployed to github.


**Unfixed Bugs**
  - No unfixed bugs.

  
**Validator Testing**
  - HTML
    - I tested the website and no errors were returned when passing through the official W3C validator
    ![](/assets/images/readme/testing/html-validator.png)
    
  - CSS 
    <p>
       <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
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
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page provides the link to the deployed project.
    - The live link can be found [here](https://github.com/kasemdeautsch/pp2).
## Credits
- Content
  - The page design and Project idea was taken from **Portfolio Project Scope** module in our course.
  - Some functions idea ware taken from **Love Maths** project
  - The following websites ware used for problem solving.
    - **https://www.diffchecker.com/**.
    - **https://stackoverflow.com/**.
    - **https://www.w3schools.com/**.
    - **https://www.perplexity.ai/**.
    - **https://www.pexels.com/**.
    - **https://tinypng.com/**.
    -  **https://balsamiq.com/**.

- Media
  - I found the images for the (Rock Paper Scissors) in Google.
  