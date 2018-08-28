
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//let's split the string into individual words: 
let storyWords = story.split(' ');
console.log(`The original story  contains ${storyWords.length} words.`);


//removing the unnecessary words and save the remaining words 
let betterWords = storyWords.filter(function(storyWords) {
return !unnecessaryWords.includes(storyWords);
});
console.log(`The story contains ${betterWords.length} words after removing unnecesary words.`)


//Another way for removing the unnecessary words
/*let betterWords = storyWords.filter(word => {
  if (unnecessaryWords.includes(word) === false) {
  return word; }
});*/


// count how many times the overused words were used 
let overusedWordsCount = storyWords.filter(function(word){
	if(overusedWords.includes(word)){
		return word;
	}
	else{

	}
});
console.log(`The total count of overusedWords is ${overusedWordsCount.length} times.`);


//displaying the number of times each overused words was used
let overused_really = 0;
let overused_very = 0;
let overused_basically = 0;

storyWords.filter(function(word){
	if(word === overusedWords[0]){
		overused_really++;
	}else if(word === overusedWords[1]){
		overused_very++;
	}else if(word === overusedWords[2]){
		overused_basically++;
	}
});
console.log(`Count of overused word really is: ${overused_really} times.`);
console.log(`Count of overused word very is: ${overused_very} times.`);
console.log(`Count of overused word basically is: ${overused_basically} times.`);


//count how many sentences are in the paragraph
let sentences = 0;
for (let i = 0; i < story.length; i++){
	if(story[i] === '.' || story[i] === '?' || story[i] === '!'){
		sentences +=1;
	}
}
console.log(`Count of sentences: ${sentences}`);


//betterWords array as a single string 
console.log(betterWords.join(' '));
