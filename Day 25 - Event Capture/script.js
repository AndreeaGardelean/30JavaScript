//  More about event listeners
const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);

  // this will stop bubbling up which will no longer trigger events up on the parents, thus in this case will only return the class of the clicked element and not of its parents
  e.stopPropagation();
};

divs.forEach(div => {
  div.addEventListener('click', logText, {capture: true, once: true});
});

// when clicking on the center div logText will return the classes of the container div that the clicked div is in
// for this case if we click the third div which is wrapped in div one and two then all 3 classes are printed
// the above event is known as Bubbling
// when you make a click the clicks will ripple on all elements that the current element is nested in

// if the optional argument capture is passed as true (false by default) then the document will start capturing the events top-bottom, otherwise they are bottom-up (i.e: the classes of the clicked elements are returned top-bottom)

// Once
// the once: true option will listen for the event and unbind itself after the event is first triggered
// this will only listen for the event once
