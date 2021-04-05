# Random Quotes

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). The app displays random quotes each time a button is clicked. Quotes also automatically refresh every fifteen seconds.

## Quick Start

To view the app -

- You can [download the ZIP file](https://github.com/zviels/random-quotes/archive/refs/heads/master.zip), extract it and open `index.html`.
- Alternatively, you can watch the app online [here](https://zviels.github.io/random-quotes).

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. This section will describe the requirements I had to meet to complete this project.

### Project Requirements

#### Array of Objects

I had to create an array of objects. This array - 

- Had to be named `quotes`.
- Had to include at least five quote objects.
- Had to be free of errors that prevent the code from running.

#### Object Properties

- All objects had to include `quote` and `source` properties.
- At least one object had to include `citation` property.
- At least one object had to include `year` property.

To exceed expectations, I had to -

- Create at least one additional property (such as `tags`), for at least one object.
- Print at least one additional property to the page with its quote.

#### Functions

I had to implement two functions.

##### The 'getRandomQuote' Function

This function -

- Had to be named `getRandomQuote`.
- Had to return a random object from the `quotes` array.

##### The 'printQuote' Function

This function -

- Had to be named `printQuote`.
- Had to call the `getRandomQuote` function.
- Had to print a `quote` and a `source` property with every object.
- Had to print a `citation` property with at least one quote.
- Had to print a `year` property with at least one quote.

In addition, the printed quotes had to match the format, layout and styles of the example quote in the `index.html` file -

```
    <p class="quote"> A Random Quote </p>
    <p class="source"> Quote Source
        <span class="citation"> Quote Citation </span>
        <span class="year"> Quote Year </span>
    </p>
```

To exceed expectations, I had to -

- Change the quotes automatically at regular intervals.
- Change the background color to a random color each time the quote refreshes.

#### Code Comments

To meet the requirements of the project I also had to provide code comments.

## Built With

- HTML
- CSS
- JavaScript

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://static.teamtreehouse.com/assets/marketing/opengraph/logo_twitter-cd0ecb90408499f45a2191805f54362981da5a69ddcfaa6ec93556d64e289036.png" alt="Treehouse Logo" width="200" height="100">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter files for this project -

- `index.html`
- `styles.css`

In addition, a huge thank you to everyone who reviewed the project!