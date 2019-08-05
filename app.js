// if there is a height for details, colapse it. 
const accordionItemsEl = document.getElementsByClassName('accordion__item');

// add click event to accordion heading, bc all you see on page is heading

function accordion() {
  for (let item of accordionItemsEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener('click', function() {
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) { // if maxHeight != 0
        accDetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = '+'; // is accordion icon
      } else {
        accDetails.style.maxHeight = accDetails.scrollHeight + 'px';
        this.lastElementChild.innerHTML = '-';
      }
    })
  }
}

accordion();

// challenge