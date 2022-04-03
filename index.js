let li = document.querySelectorAll('li');
let contenttitle = document.querySelector('.content-title');
// lilar
let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li3 = document.querySelector('.li3');
// spanlar
let spn1 = document.querySelector('.spn1');
let spn2 = document.querySelector('.spn2');
let spn3 = document.querySelector('.spn3');
// h4 elementlari
let h41 = document.querySelector('.h41');
let h42 = document.querySelector('.h42');
let h43 = document.querySelector('.h43');
let clickedTime = 1;

//  buttons
let sub = document.querySelector('.sub');
let back = document.querySelector('.back');
let Sdisc = document.querySelector('.Sdisc');
let goback = document.querySelector('.goback');
let goahead = document.querySelector('.goahead');

li.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.path[0].innerHTML == 'Choose title') {
      console.log(clickedTime);
      if (clickedTime === 2) {
        clickedTime = 1;
      }
    } else if (e.path[0].innerHTML == 'Choose description') {
      clickedTime = 2;
    } else if (e.path[0].innerHTML == 'Choose Data') {
      if (clickedTime == 2 || clickedTime == 4) {
        clickedTime = 3;
      }
    }

    console.log(clickedTime);
    universal(clickedTime);
  });
});

function universal(clickedTime) {
  // if elslar
  if (clickedTime == 1) {
    contenttitle.textContent = 'Choose Title Content';
    h41.style.color = 'black';
    spn1.style.backgroundColor = 'purple';
    spn1.style.color = 'white';
    //   left buttons
    sub.style.display = 'block';
    back.style.display = 'none';
    Sdisc.style.display = 'none';
    goback.style.display = 'none';
    goahead.style.display = 'none';
    //   ikkinchi tugma
    h42.style.color = 'rgba(178, 45, 45, 0.186)';
    spn2.style.backgroundColor = 'rgba(178, 45, 45, 0.186)';
    spn2.style.color = 'black';
  } else if (clickedTime == 2) {
    contenttitle.textContent = 'Choose Description Content';
    h42.style.color = 'black';
    spn2.style.backgroundColor = 'purple';
    spn2.style.color = 'white';
    //left buttons
    sub.style.display = 'none';
    back.style.display = 'block';
    Sdisc.style.display = 'block';
    goback.style.display = 'none';
    goahead.style.display = 'none';
    //   3 btn
    h43.style.color = 'rgba(178, 45, 45, 0.186)';
    spn3.style.backgroundColor = 'rgba(178, 45, 45, 0.186)';
    spn3.style.color = 'black';
  } else if (clickedTime == 3) {
    contenttitle.textContent = 'Choose Data Content';
    h43.style.color = 'black';
    spn3.style.backgroundColor = 'purple';
    spn3.style.color = 'white';
    //   left buttons
    sub.style.display = 'none';
    back.style.display = 'none';
    Sdisc.style.display = 'none';
    goback.style.display = 'block';
    goahead.style.display = 'block';
  } else if (clickedTime == 4) {
    goahead.style.display = 'none';
    goback.style.display = 'none';
    contenttitle.textContent =
      'Ok, Were Done. Thanks For Sending Is Your Data!';
    console.log(clickedTime);
  }
}

universal(clickedTime);

// when submited
sub.addEventListener('click', () => {
  clickedTime = 2;
  universal(clickedTime);
});

back.addEventListener('click', () => {
  clickedTime = 1;
  universal(clickedTime);
});

Sdisc.addEventListener('click', () => {
  clickedTime = 3;
  universal(clickedTime);
});

goback.addEventListener('click', () => {
  clickedTime = 2;
  universal(clickedTime);
});

goahead.addEventListener('click', () => {
  clickedTime = 4;
  console.log(clickedTime);
  universal(clickedTime);
});

// default version
h41.style.color = 'black';
spn1.style.backgroundColor = 'purple';
spn1.style.color = 'white';
back.style.display = 'none';
Sdisc.style.display = 'none';
goback.style.display = 'none';
goahead.style.display = 'none';
