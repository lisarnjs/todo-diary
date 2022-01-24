const quotes = [
    {
        quote: "If you spend too much time thinking about a thing, you'll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "Being happy never goes out of style.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and being doing.",
        author: "Walt Disney",
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
    },
    {
        quote: "Stop chasing the money and start chasing the passion.",
        author: "Tony Hsieh",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;