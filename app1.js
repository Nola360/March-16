const input = document.querySelector('.input');
const submit = document.querySelector('.submit-btn');
// const changeBtn = document.querySelector('.btn');
const list = document.querySelectorAll('.list-items li a');
const newItem = document.querySelector('ol');

const clearBtn = document.querySelector('.btn');

console.log(clearBtn);

clearBtn.addEventListener('click', function () {
  this.remove();
  console.log('delete');
})



// list.forEach(() => {
//   changeBtn.addEventListener('click', () => {
//     for (var i = 0; i < list.length; i++) {
//       list[i].classList.toggle('active');
//       // list[i].classList.remove();

//     }
//     // if (list.length > 5) {
//     //   document.body.style.backgroundColor = 'green';
//     //   console.log('text')
//     // }
//   })
// })

submit.addEventListener('click', function () {
  let text = document.querySelector('h1');
  if (input.value === '') {
    alert('add input');
    text.style.color = 'rgba(255,60,60)';
    text.textContent = 'Input field required';
    return false
  } else {
    text.textContent = 'Success';
    text.style.color = 'green';
    // document.container.style.backgroundColor = 'white';
  }



  let item = document.createElement('li');
  item.className = 'task';
  item.innerHTML = input.value;
  newItem.appendChild(item)
  input.value = item;
  input.value = '';
})






// addEventListener('click', function () {
//   item.classList.toggle('active');
//   console.log('test');
// })









// item.forEach(() => {
//   done.addEventListener('click', function () {
//     for (var i = 0; i < done.length; i++) {
//       done[i].classList.toggle('x');
//     }
//   })



// const item = document.createElement('');
// console.log(item);