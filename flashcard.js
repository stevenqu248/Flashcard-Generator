function BasicCard(front, back)
{
	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze)
{
	this.text = text;
	this.cloze = cloze;
	this.partial = "";

	// begin creating the partial property
	var clozeStartingIndex = text.indexOf(cloze);

	// if the cloze isn't in the text
	if(clozeStartingIndex === -1)
	{
		console.log("Oops! This flashcard is broken");
		this.text = "Oops! This flashcard is broken";
		this.cloze = "Oops! This flashcard is broken";
		this.partial = "Oops! This flashcard is broken";
	}

	// if it is
	else
	{
		// loop through the text
		for(var i = 0; i < text.length; i++)
		{
			// when you find the location of the cloze
			if(i === clozeStartingIndex)
			{	
				// add to the partial
				this.partial += "...";
				// move the iterator
				i += cloze.length;
			}

			// otherwise
			else
			{
				this.partial += text[i];
			}
		}
	}
}

ClozeCard.prototype.showText = function showText()
{
	console.log(this.text);
}

ClozeCard.prototype.showCloze = function showCloze()
{
	console.log(this.cloze);
}

ClozeCard.prototype.showPartial = function showPartial()
{
	console.log(this.partial);
}

function displayInstructions()
{
	console.log("This is here to show you the use and functionality of these objects: the BasicCard object and the ClozeCard object.");
	console.log("Feel free to comment or delete these logs when you want to use this code.\n\n");
	console.log("Creating a basic flashcard: var basicCard = new BasicCard(\"What is 1 + 1?\",\"2\");");
	var basicCard = new BasicCard("What is 1 + 1?", "2");
	console.log("The first parameter will be what is stored on the front of the card, and the second parameter will be stored on the back.");
	console.log("Now we will display the data stored in the card to the screen. the parameters you would use are front and back.\n");
	console.log("basicCard.front contains " + basicCard.front);
	console.log("basicCard.back contains " + basicCard.back);
	console.log("\nNow let's move onto the ClozeCard object.");
	console.log("Creating a Cloze-Deleted flashcard: var clozeCard = new ClozeCard(\"1 + 1 = 2\",\"2\");");
	var clozeCard = new ClozeCard("1 + 1 = 2", "2");
	console.log("The first parameter will contain the full text including the part that you want to hide.");
	console.log("The second parameter will contain what you want removed from the full text.");
	console.log("Now let's test it out. You can use the parameters text, cloze, and partial");
	console.log("or you can use the functions showText, showCloze, or showPartial.\n");
	console.log("clozeCard.text contains " + clozeCard.text);
	console.log("clozeCard.cloze contains " + clozeCard.cloze);
	console.log("clozeCard.partial contains " + clozeCard.partial);
	console.log("clozeCard.showText(); will show:");
	clozeCard.showText();
	console.log("clozeCard.showCloze(); will show:");
	clozeCard.showCloze();
	console.log("clozeCard.showPartial(); will show:");
	clozeCard.showPartial();
	console.log("\nIf you try to create a Cloze-Deleted flashcard improperly, you will receive an error.");
	console.log("Creating a bad flashcard: var improperCloze = new ClozeCard(\"1 + 1 = 2\",\"Apples, apples, apples!\");");
	var improperCloze = new ClozeCard("1 + 1 = 2", "Apples, apples, apples");
	console.log("As you can see, this flashcard is unusable. You will have to try again and create a new, proper flashcard.");
}

module.exports.BasicCard = BasicCard;
module.exports.ClozeCard = ClozeCard;
module.exports.displayInstructions = displayInstructions;