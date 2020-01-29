console.log('chalange 2 is active')

const ul = document.querySelector('ul');
const inputTodo = document.querySelector('#input-todo');
const buttonAdd = document.querySelector('#button-add');

class Items {
  constructor(itemName) {
    this.createEl(itemName)
  }

  createEl(itemName) {
    let el = document.createElement('li');

    let checkList = document.createElement('input')
    checkList.setAttribute('type', 'checkbox')


    let text = document.createTextNode(itemName)

    let buttonDelete = document.createElement('button')
    let textButton = document.createTextNode('x')
    buttonDelete.appendChild(textButton)

    el.appendChild(checkList);
    el.appendChild(text)
    el.appendChild(buttonDelete);

    ul.appendChild(el)

    checkList.addEventListener('click', () => this.triggerCheckbox(el))

    buttonDelete.addEventListener('click', () => this.removeItem(el))
  }

  triggerCheckbox(text) {
    text.classList.toggle("s");
  }

  removeItem(item) {
    ul.removeChild(item)
  }

}


buttonAdd.addEventListener('click', function () {

  if (inputTodo.value === '') {
    alert('input tidak boleh kosong')
  } else {
    new Items(inputTodo.value);
    inputTodo.value = '';
  }

});