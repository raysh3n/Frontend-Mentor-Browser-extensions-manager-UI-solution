# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
Desktop Light Theme <br/>
![](./desktop%20Screenshot%202025-07-30%20at%2012-36-08%20Vite%20React.png)
 <br/>
<br/>Desktop Dark Theme <br/>
![](./desktop%20dark%20Screenshot%202025-07-30%20at%2012-36-51%20Vite%20React.png)
 <br/>
<br/>Mobile Light Theme <br/>
![](./mobile%20Screenshot%202025-07-30%20at%2012-37-49%20Vite%20React.png)
 <br/>
<br/>Mobile Dark Theme <br/>
![](./mobile%20dark%20Screenshot%202025-07-30%20at%2012-38-25%20Vite%20React.png)
 <br/>



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- tailwind css
- tailwind-merge
- prettier-plugin-tailwindcss
- Vite


### What I learned
dark theme implementation via prefer color scheme at first, then allowing user to toggle. 
Implementation 

at tailwind.config.js
```  darkMode: "selector",
```
at App.jsx
```jsx
  useEffect(
    function () {
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [theme],
  );

```

added tiny padding to prevent margin collapsing at the navbar.
```
div {
  padding-top: 0.1px;
}

```

using lifting state up so that can pass data between components


it is not possible to have a straight forward way to have transition for the background  theme color. Hence did not implement transition for it. 




commands for prettier tailwind.
```cmd
npx prettier --check src   ->this is to check which files need reformat in src folder. replace it with . and you it will check for all
npx prettier --write src  -> this is to reformat in src folder. replace it with . and you it will write it for all
```





### Useful resources
- [Sorting Tailwind CSS Classes Via Prettier](https://www.youtube.com/watch?v=_CntOc4hBcg) - Having trouble with prettier tailwind. It's not reformatting when on save. Hence, learned the command line to manually reformat it. 
- [Margin collapse](https://www.joshwcomeau.com/css/rules-of-margin-collapse/) - helps me on the navbar and the background body to cover all viewport


