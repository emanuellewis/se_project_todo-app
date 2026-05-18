import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener('change', () => {
      this._data.completed = !this._data.completed;
    });

    this._todoDeleteBtn = this._todoElement.querySelector('.todo__delete-btn');
    this._todoDeleteBtn.addEventListener('click', () => {
      this._todoElement.remove();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector('.todo__completed');
    this._todoLabel = this._todoElement.querySelector('.todo__label');
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute('for', `todo-${this._data.id}`);
  }

  _generateDateEl() {
    const todoDate = this._todoElement.querySelector('.todo__date');
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}`;
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector('.todo')
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector('.todo__name');
    todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._generateDateEl();

    return this._todoElement;
  }
}

export default Todo;

//   const todoElement = todoTemplate.content
//     .querySelector('.todo')
//     .cloneNode(true);
//   const todoNameEl = todoElement.querySelector('.todo__name');
//   const todoCheckboxEl = todoElement.querySelector('.todo__completed');
//   const todoLabel = todoElement.querySelector('.todo__label');
//   const todoDate = todoElement.querySelector('.todo__date');
//

//  // _generateId() {
//   if (!this._data.id) {
//     this._data.id = uuidv4();
//   }
// this._generateId();
// }
//   });
