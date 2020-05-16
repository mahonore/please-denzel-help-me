//Q1
const denzel = "please denzel, help me";

//Q2
const actor = 'Denzel Washington';
var inspirational = 'is '+actor+' inspirational?';
console.log('Q2', inspirational);

//Q3
var family = new Object();
family.married = 1983;
family.presidentOfTheUnitedStates = false;
family.children = ['John David', 'Katia', 'Olivia', 'Malcolm'];
console.log('Q3', family);

//Q4
const stage = {
    'name':'Fences',
    'year':'2010'
};
stage.name="A Raisin in the Sun";
stage.year='2014';
console.log('Q4', stage);

//Q5
const awards= {
    'movie':'glory'
};
awards['movie']='Training Day';
console.log('Q5', awards);

//Q6
earlywork={
    'Carbon Copy': 1981,
    'A Soldier Story': 1984,
    'Power': 1986,
    'Cry Freedom': 1987,
    'For Queen and Countryy' : 1988

};
console.log('Q6', earlywork['Carbon Copy']);

//Q7
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
for(let i=0; i< debaters.length; i++){
    debaters[i]=debaters[i].toUpperCase();
}
console.log('Q7', debaters);

//Q8.1
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];
directors.push("tonyscott");
console.log('Q8.1', directors);

//Q8.2
var firstDirector=directors.shift();
console.log('Q8.2', firstDirector);
console.log(directors);

//Q8.3
directors.unshift('himself');
console.log('Q8.3', directors);

//Q8.4
var secondDirector = directors.splice(1,1)[0];
console.log('Q8.4',secondDirector);
console.log(directors);

//Q8.5
var thirdDirector = directors[2];
console.log('Q8.5', thirdDirector);
console.log(directors);

//Q9
function duplicate(myarray){
    const length = myarray.length;
    for(let i=0; i<length; i++){
        myarray.push(myarray[i]);
    }
    return myarray;
}
console.log('Q9', duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));

//Q10

//Q11 
document.querySelectorAll('#credits > div > article > div > div > strong > a');

//Q12
// I think there are less than 50 http requests because in the source code we can find 
//"restartOnRequestAfter":50

//Q13
//{
//    "id":6616,
//    "url":"http://www.tvmaze.com/people/6616/zach-shirey",
//    "name":"Zach Shirey",
//    "country":null,
//    "birthday":null,
//    "deathday":null,
//    "gender":"Male",
//    "image":{
//        "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/62/156083.jpg",
//        "original":"http://static.tvmaze.com/uploads/images/original_untouched/62/156083.jpg"
//    },
//    "_links":{
//        "self":{
//            "href":"http://api.tvmaze.com/people/6616"}
//        }
//    }
//This is the response to the request. We obtain the information of 
//the person which has the Id 6616 in their people database. Their database has as attributes id, gender, 
//birthday, url, country, deathday, etc...
//This profile isn't complete, it miss some caracteristics such as the country and the birthday.

//Q14
console.log('Q14');
const fs = require('fs').promises;
const filepath = 'test';
fs.readFile(filepath)
 .then((data) => {
   console.log(data);
 })
 .catch((err) =>{
   console.log(err);
 })

//Q15
console.log('Q15');
async function main() {
  let data = await (await fetch("http://api.tvmaze.com/search/people?q=denzel+washington")).json()
  
  const {person} = data[0];
  const {id} = person;
  
  let personData = await(await fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`)).json()
  console.log(JSON.stringify(personData))
}

//Q16
//Dropbox : https://www.dropbox.com/fr/
//PLEX : https://www.plex.tv/ 
//Slack :  https://slack.com/intl/fr-fr/?eu_nc=1 

// Q17
// The project that i worked on that i'm proud of is our pi². It's an miniature autonomous car.
// because we spent a lot of time and kept going even if we had a lot of problems 
// I learnt a lot of things about cars, image processing and convolutional neural network.

//Q18
//The projet that i worked on that i'm not proud of is the projet in IA last year because i spent a lot of time and nights 
//but at the end i did a change and it wasn't working anymore 
// The lesson for me was to always save a project and save old versions.

//Q19
// I like to use Visual Studio Code as Text Editor, I think it's a really good one.

//Q20
// the title of the course is "Web Application Architecture(s)" and not "Web Application Architecture" because it doesn't exist only one architecture.
// A web application architecture is a pattern of interaction between various web components.
