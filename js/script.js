// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var randomQuote;

// Array of objects to get the random quotes

var quotes = [
	{
		quote: "A wise man can learn more from a foolish question than a fool can learn from a wise answer",
		source: "Bruce Lee",
		},
	{
		quote: "The roots of education are bitter, but the fruit is sweet.",
		source: "Aristotle",			
	},
    { 
        quote: "It always seems impossible until it's done.",
		source: "Nelson Mandela",
    },
    { 
        quote: "What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.",
		source: "Nelson Mandela",
		date: "May 2002"
    },
    { 
        quote: "All types of knowledge, ultimately mean self knowledge",
		source: "Bruce Lee",
		citation: "Bruce Lee: The Lost Interview",
		date: "1971"
    }
];

// Function to select the random object from the array of objects.

function getRandomQuote () {
	var i = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[i];
	return randomQuote;
}

// Prints quote to the page.  Builds html to display on screen.  Includes if statements for values that aren't available

function printQuote () {
	var randomQuote = getRandomQuote();
	var html = '<p class="quote">' + randomQuote.quote + '</p>';
	html+= '<p class="source">' + randomQuote.source;
    
    if (randomQuote.citation !== undefined) {
	   html+= '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.date !== undefined) {    
	   html+= '<span class="year">' + randomQuote.date + '</span>';
    }
	html+= '</p>';

	console.log(html);
	document.getElementById("quote-box").innerHTML = html;
}

