import * as move from './moveScroll.js';
import './app.css';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const ul = document.createElement('ul');

  for (let i = 0; i < 50; i++) {
    const li = document.createElement('li');
    li.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat explicabo obcaecati delectus eveniet qui perspiciatis praesentium eos non deserunt, dolor eum cumque suscipit, rem aliquid repellat itaque quae nam neque.';

    ul.appendChild(li);
  }

  const moveTopBtn = document.createElement('button');
  moveTopBtn.setAttribute('class', 'move-top');
  moveTopBtn.innerText = 'TOP';
  moveTopBtn.addEventListener('click', function () {
    move.scroll(0, 1000);
  });

  container.appendChild(ul);
  container.appendChild(moveTopBtn);
})