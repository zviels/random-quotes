 // Variables

 let quotes = [];

 // Getters

 const getRandomValue = () => Math.floor(Math.random() * 256);
 const getRandomColor = () => 'rgb(' + getRandomValue() + ', ' + getRandomValue() + ', ' + getRandomValue() + ')';

 // getRandomQuote

 const getRandomQuote = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quotes.splice(randomIndex, 1);
    return randomQuote;

 }

 // The 'getHTML' Function Returns The HTML Structure Of A Quote

 const getHTML = (randomQuote) => {

    const { quote, source, citation, year } = randomQuote;

    let html = '<p class="quote">' + quote + '</p>' +
                 '<p class="source">' + source;

    if (citation)
        html += '<span class="citation">' + citation + '</span>';
        
    if (year)
        html += '<span class="year">' + year + '</span>'; 

    return html += '</p>';             

 }

 // Setters

 const setBackgroundColor = () => document.querySelector('body').style.backgroundColor = getRandomColor();

 // Main Functions

 // printTags

 const printTags = (randomQuote) => {

    const { tags } = randomQuote;
    const tagBox = document.querySelector('#tag-box');

    if (!(tags))
        return tagBox.innerHTML = '';

    let html = '';

    for (const tag of tags)
        html += '<span class="tag">' + tag + '</span>';

    tagBox.innerHTML = html; 
    
 }

 // printQuote

 const printQuote = () => {

    const quoteBox = document.querySelector('#quote-box');

    if (quotes.length === 0)
        quotes = [ ... data ];

    const randomQuote = getRandomQuote();
    const html = getHTML(randomQuote);

    quoteBox.innerHTML = html;
    printTags(randomQuote);
    setBackgroundColor();
    
    clearInterval(interval);
    interval = setInterval(printQuote, 15000);

 }

 // Run The Script

 // Initialize An Interval To Change A Quote Automatically Every 15 Seconds

let interval = setInterval(printQuote, 15000);

// Display A Random Quote Immediately

printQuote();

// Call The 'printQuote' Function Each Time The User Clicks The Button

document.querySelector('#load-quote').addEventListener("click", printQuote);