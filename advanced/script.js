var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var main = document.getElementById('main');
var myList = document.getElementById('list');
var ul = document.getElementsByTagName('ul');
var story = myList.getElementsByClassName('item');
var popup = document.getElementsByClassName('popup')[0];
var close = document.querySelector('.close');
var name;
var age;
var mailing;

// console.log(btn1);
// console.log(btn2);
// console.log(ul);
// console.log(ul[0]);
// console.log(story);

// console.warn(document.getElementById('name'));
// console.warn(document.getElementById('name').value);

function addItem(){
  var newLi = document.createElement('li');
  newLi.innerHTML = 'Новая задача!';
  newLi.className = 'item';
  myList.appendChild(newLi);
  popup.style.display = 'none';
}

function delItem(){
  myList.removeChild(story[0]);
  
  if(story.length == 0){
    popup.style.display = 'block';
  }
}

function closePopup(){
  popup.style.display = 'none';
}

function allOk(){
  alert( 'Доступ к сайту разрешен' );
  console.log(name + ' - допущен...');
}

function accessDenied(){
  alert( 'Доступ к сайту запрещен' );
  console.log(name + ' - не допущен...');
}

function receiveData(){
  name = document.getElementById('name').value;
  age = document.getElementById('age').value;
  mailing = document.getElementById('logic').checked;

  if (name && age){

    let ageNum = parseInt(age);
    if(ageNum >= 18 && mailing === true){
      allOk();

    } else {
      accessDenied();
    }

  } else {
    alert( 'не все поля заполнены' );
    console.warn('Не все поля заполнены пользователем');
  }
}

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', closePopup);
testage.addEventListener('click',receiveData);