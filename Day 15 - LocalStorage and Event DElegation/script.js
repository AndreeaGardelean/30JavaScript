const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// if there are no items in the localStorage it will fallback to an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

const selectBtn = document.querySelector('.select');
const unselectBtn = document.querySelector('.unselect');
const deleteBtn = document.querySelector('.delete');

function addItem(event) {
  event.preventDefault();
  const itemName = (this.querySelector('[name="item"]')).value;

  const item = {
    text: itemName,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);

  // save items to local storage
  localStorage.setItem('items', JSON.stringify(items));

  // reset the form fields
  this.reset();
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}  />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
};

// task delegation
// this function is run when the container of the items list is clicked
// this event will then tell us which of the children has been clicked
// we identify the child and update its done state to true or false depending on its previous state
function toggleDone(e) {
  // skip unless is an input
  if (!e.target.matches('input')) {
    return;
  }
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
};

function selectAll() {
  items.forEach((item, i) => {
    item.done = true;
    itemsList.querySelector(`#item${i}`).checked = true;
  });
  localStorage.setItem('items', JSON.stringify(items));
};

function unselectAll() {
  items.forEach((item, i) => {
    item.done = false;
    itemsList.querySelector(`#item${i}`).checked = false;
  });
  localStorage.setItem('items', JSON.stringify(items));
}

function deleteAll() {
  localStorage.clear();
  itemsList.innerHTML = '';
};

addItems.addEventListener('submit', addItem);
populateList(items, itemsList);
itemsList.addEventListener('click', toggleDone);

selectBtn.addEventListener('click', selectAll);
unselectBtn.addEventListener('click', unselectAll);
deleteBtn.addEventListener('click', deleteAll);