// VARIABLES

let subject = {
  word: 'watashi',
  meaning: 'I',
  particle: 'wa',
};

let object = {
  word: 'mango',
  meaning: 'mango',
  particle: 'wo',
};

let endings = {
  'endings': {
    'present': {
      'polite': 'desu',
      'casual': '',
    },
    'past': {
      'polite': 'deshita',
      'casual': 'datta',
    }  
  }
};

let verb = {
  'word': 'tabe',
  'meaning': {
    'present': 'eat',
    'past':'ate',
  },
  'endings': {
    'present': {
      'polite': 'masu',
      'casual': 'ru',
  },
    'past': {
      'polite': 'mashita',
      'casual': 'ta',
    }
  }
};


let tense = 'present';
let tone = 'polite';


let destination = {
  word: 'uchi',
  meaning: 'at home',
  particle: 'ni',
};

let time = {
  word: 'kyo',
  meaning: 'Today',
};

let subjectUsage = false;
let objectUsage = false;
let verbUsage = false;
let endingUsage = false;

if (subjectUsage === false && objectUsage === false && verbUsage === false) {
  $('.add-make-it, .reset').addClass('disabled');
};

// ON CLICK EVENTS


$('.add-subject').on('click', clickSubject);

$('.add-object').on('click', clickObject);

$('.add-verb').on('click', clickVerb);

$('.add-location').on('click', clickLocation);

$('.add-time').on('click', clickTime);

$('.add-make-it').on('click', clickMakeIt);

$('.reset').on('click', clickReset);



// FUNCTIONS

function clickSubject() {
  subjectUsage = true;
  $('.subject').text(subject.word);
  $('.eng-subject').text(subject.meaning);

  if (objectUsage === true && verbUsage === true) {
    $('.subject-particle').text(subject.particle);
    $('.eng-subject').text('I');

  } else if (objectUsage === true) {
    $('.subject-particle').text(subject.particle);
    $('.eng-subject').text('I am a ')

  } else if (verbUsage === true) {
    $('.subject-particle').text(particle.subject);
    $('.ending-particle').text(endings.endings[tense][tone]);
    $('.eng-subject').text('I');

  } else {
    $('.eng-subject').prepend('(It is) ');
    $('.ending-particle').text(endings.endings[tense][tone]);
  };

  $('.add-subject').addClass('disabled');
  $('.add-make-it, .reset').removeClass('disabled');

};

function clickObject() {
  objectUsage = true;

  $('.object').text(object.word);
  $('.eng-object').text(object.meaning);


  if (subjectUsage === true && verbUsage === true) {
    $('.subject-particle').text(subject.particle);
    $('.object-particle').text(object.particle);
    $('.eng-subject').text('I ');

  } else if (subjectUsage === true) {
    $('.subject-particle').text(subject.particle);
    $('.eng-subject').text('I am ');
    $('.ending-particle').text(endings.endings[tense][tone]);

  } else if (verbUsage === true){
    $('.object-particle').text(object.particle);

  } else {
    $('.ending-particle').text(endings.endings[tense][tone]);
    $('.eng-subject').text('(I am) ');
  };


  $('.add-object').addClass('disabled');
  $('.add-make-it, .reset').removeClass('disabled');

};


function clickVerb() {
  verbUsage = true;

  $('.verb').text(verb.word + verb.endings[tense][tone]);

  $('.eng-verb').text(verb.meaning[tense]);


  if (subjectUsage === true && objectUsage === true) {
    $('.eng-subject').text('I');
    $('.object-particle').text(object.particle);
    $('.ending-particle').remove();

  } else if (objectUsage === true) {
    $('.eng-subject').text('(I)');
    $('.object-particle').text(object.particle);
    $('.ending-particle').text('');

  } else if (subjectUsage === true){
    $('.eng-subject').text('I');
    $('.subject-particle').text(subject.particle);
    $('.ending-particle').text('');

  } else {
    $('.eng-subject').text('(I)');
    $('.ending-particle').text('');
  };


  $('.add-verb').addClass('disabled');
  $('.add-make-it, .reset').removeClass('disabled');

};

function clickLocation() {

  $('.location').text(destination.word);
  $('.location-particle').text(destination.particle);
  $('.eng-location').text(destination.meaning);

  $('.add-location').addClass('disabled');
  $('.reset').removeClass('disabled');

  if (subjectUsage === true){
    $('.subject-particle').text(subject.particle);
  };

};

function clickTime() {

  $('.time').text(time.word);
  $('.eng-time').text(time.meaning);
  $('.add-time').addClass('disabled');
  $('.reset').removeClass('disabled');

};


function clickMakeIt() {

  if ($('.tense').prop('checked')) {
    tense = 'past';
    $('.ten').find('span').text('Present')


  } else {
    tense = 'present';
    $('.ten').find('span').text('Past')

  };
   // tense = ($('.tense').prop('checked')) ? 'past' : 'present';

  if ($('.tone').prop('checked')) {
    tone = 'casual';
    $('.ton').find('span').text('Polite')

  } else {
    tone = 'polite';
    $('.ton').find('span').text('Casual')

  };

  if (verbUsage) {
    $('.verb').text(verb.word + verb.endings[tense][tone]);
    $('.eng-verb').text(verb.meaning[tense]);

  } else if (subjectUsage || objectUsage) {
    $('.ending-particle').text(endings.endings[tense][tone]);

  };
};

function clickReset() {

  subjectUsage = false;
  objectUsage = false;
  verbUsage = false;
  endingUsage = false;

  $('.add-subject, .add-object, .add-verb, .add-location, .add-time').removeClass('disabled');
  $('.add-make-it, .reset').addClass('disabled');
  $(this).prev().children('span').text('');

  $('.eng-time, .eng-subject, .eng-verb, .eng-object, .eng-location').text('');

};





