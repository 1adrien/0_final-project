let topic;
let subject;
let object = false;
let subjectParticle = false;
let endingParticle;

$('.add-topic').on('click', clickTopic);

$('.add-subject').on('click', clickSubject);

$('.add-object').on('click', clickObject);

$('.add-location').on('click', clickLocation);

$('.add-verb').on('click', clickVerb);


function clickTopic(watashi){
	watashi = "watashi " + "wa";
  $('.topic').text(watashi);
}


function clickSubject(){
  subject = "gakusei";
    $('.subject').text(subject);
    
  let subjectParticle = true;
    $('.subject-particle').text('desu');   
}

function clickObject(){
  let object = "mango";
  	$('.object').text(object);
    
  let objectParticle = true;
    $('.object-particle').text('wo');
  
 if (subjectParticle = true){
 		$(".subject-particle").replaceWith("ga")
  } 
}

function clickLocation(){
  let location = "kissaten";
  	$('.location').text(location);
    
  let locationParticle = "ni";
    $('.location-particle').text('ni');
  
}

function clickVerb(){
	let verb = true;
	let eat = "tabe";
  let ru = "ru";
	let masu = "masu";
	let masuverb = eat + masu;
  $('.verb').text(masuverb);
  
 /*  if (){
  
  } */
  
}

