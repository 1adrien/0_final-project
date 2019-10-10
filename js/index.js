// VARIABLES

let subject = {
  word: "watashi",
  meaning: "I",
};
let verb = {
  word: "tabe",
  meaning: "eat",
  endingsAlt: {
    presentTensePolite: "masu",
    pastTensePolite: "mashita",
    presentTenseCasual: "ru",
    pastTenseCasual: "ta",
  },
  endings: {
    present: {
      polite: "masu",
      casual: "ru",
    },
    past: {
      polite: "mashita",
      casual: "ta",
    }
  }
};
// let object = {
//   meaning: "mango",
//   word: "mango",
//   };
// let subject;
// let subjectEng;
let object;
let objectEng;
let subjectUsage = false;
let objectUsage = false;
// let verb;
let verbUsage = false;
let verbEnding;
let endingUsage = false;
let makeIt1 = "present";
let makeIt2 = "casual";

// $('.add-topic').on('click', clickTopic);



// ON CLICK EVENTS


$('.add-subject').on('click', clickSubject);

$('.add-object').on('click', clickObject);

$('.add-verb').on('click', clickVerb);

$('.add-location').on('click', clickLocation).attr("disabled", true);

$('.add-time').on('click', clickLocation).attr("disabled", true);

$('.add-make-it').on('click', clickMakeIt);



// function clickTopic(watashi) {
//   watashi = "watashi " + "wa";
//   $('.topic').text(watashi);
// }

// FUNCTIONS

function clickSubject() {
  subjectUsage = true;
  // subject = 'watashi';
  // subjectEng = 'I';

  $('.subject').text(subject.word);
  $('.eng-subject').text(subject.meaning);

  if (objectUsage === true) {
    $('.subject-particle').text('wa');
    $('.eng-subject').append(' am a ')
  } else {  
    $('.ending-particle').text('desu');
    $('.eng-subject').prepend('(It is) ');
  }

  $('.add-subject').attr("disabled", true);

}

function clickObject() {
  objectUsage = true;
  object = 'mango';
  objectEng = 'mango';

  $('.object').text(object);
  $('.eng-object').text(objectEng);


  if (subjectUsage === true) {
    $('.subject-particle').text('wa');
    $('.eng-subject').text('I am a ');
  
  } else if (verbUsage === true) {
    $('.object-particle').text('wo');
    $('.eng-subject').prepend('(I) ');

  } else {
    $('.ending-particle').text('desu');
    $('.eng-subject').prepend('It is ');
  }

  $('.add-object').attr("disabled", true);
}

function clickLocation() {
  let location = "kissaten";
  $('.location').text(location);

  let locationParticle = "ni";
  $('.location-particle').text('ni');

}

function clickVerb() {
  verbUsage = true;
  // verbEnding = 'masu';
  // verb = 'tabe';
  // verbEng = 'eat';

  $('.verb').text(verb.word + verb.endings[makeIt]);
  $('.eng-verb').text(verb.meaning);

  if (subjectUsage === true){
    $('.eng-subject').text('I');
    $('.ending-particle').text('');

  }
$('.add-verb').attr("disabled", true);

}

function clickMakeIt() {
  // $('#idCheckbox').prop('checked', true);

  console.log($(this).val(), $(this).prop('checked'));

  // create a condition that checks each checkbox for true or false (look into $('element').prop('checked'))
  // for each of them we need to set if makeIt1 = past or present and makeIt2 = polite or casual

  // let makeIt = $(this).val();
  $('.verb').text(verb.word + verb.endings[makeIt1][makeIt2]);


  // if (makeIt = presentTensePolite){ 
  //   $('.add-make-it').val(pastTensePolite);
  //   console.log($('.add-make-it').val())

  // } else if (makeIt = pastTenseCasual) {
  //   $('.add-make-it').val(presentTenseCasual);

  // } else if (makeIt = casual) {
  //   $('.add-make-it').val(formal);

  // } else if (makeIt = formal) {
  //   $('.add-make-it').val(casual);

  // }

  // verb.endings[presentVar][politeVar]

  

}

// if

if (verbUsage === true && objectUsage === true && verbUsage === true){
  $('.add-location').removeAttr("disabled");
  $('.add-time').removeAttr("disabled");
}



 

