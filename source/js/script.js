const tab = document.querySelectorAll('.tabs__item');
const tabPanel = document.querySelectorAll('.tabs__panel');

for (let i = 0; i < tab.length; i++) {

  tab[i].addEventListener('click', function () {

    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove('active');
      tabPanel[j].classList.remove('active');
    }
    this.classList.add('active');

    const tabID = this.id;
    const panelID = document.getElementById(tabID + '-panel');
    panelID.classList.add('active');
  });
}

const listShownBtn = document.getElementById('listShownBtn');
const mapShownBtn = document.getElementById('mapShownBtn');
const resultBody = document.querySelector('.result__body');
const map = document.querySelector('.map');


listShownBtn.addEventListener('change', function () {
  if ( this.checked ) {
    if (resultBody.classList.contains('result__body--map')) {
      resultBody.classList.remove('result__body--map')
    }
  }

});

mapShownBtn.addEventListener('change', function () {
  if ( this.checked ) {
    if (!resultBody.classList.contains('result__body--map')) {
      resultBody.classList.add('result__body--map')
    }
  }
});
