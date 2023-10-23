// //Навигация по DOM
// const htmlElement = window.document.documentElement;
// console.log(htmlElement);
// const headElement = window.document.head;
// console.log(headElement);
// const bodyElement = window.document.body;
// console.log(bodyElement);
// const black = window.document;
// console.log(black);
// // html тэг это объект
// // первый  и последний дочерные элементы
// const boyElement = window.document.documentElement;
//  console.log(boyElement);
//  const  firstChildNode = boyElement.firstChild;
//  console.log(firstChildNode)
// const lastChildNode = boyElement.lastChild;
//  console.log(lastChildNode)
//
// // //Получаем объект body
// //***********************************************************
// // const bodyElement = window.document.documentElement;
// // console.log(bodyElement)
//
// // // // Коллекция ChildNodes содержит список всех детей,включая текстовые узлы
// const childNodes = bodyElement.childNodes;
// console.log(childNodes)
//
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren)
//
// const bodyElement = window.document.body;
// console.log(bodyElement)
// const childNdes = bodyElement.childNodes;
// console.log(childNdes)
//
// const bodyChilren = bodyElement.children;
// console.log(bodyChilren)
//
// const firstChild = bodyElement.firstElementChild;
// console.log(firstChild)
// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild)
//
// const previousSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parentElement = bodyElement.parentElement;
// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);
// //
// // for (let node of childNodes){
// //     console.log(node);
// // }
// //для проверки наличия дочерних узлов существует специальная функция hasChildNodes()
// console.log(bodyElement.hasChildNodes())
// const firstChildNode = bodyElement.firstChild
// const childNodes = bodyElement.childNodes;//childNodes свойство объекта body
// console.log(childNodes);//childNodes это свойство
// for(let node of childNodes){
//    console.log(node)//покажет все узлы из коллекции
// }
// //Получаем объект body
// const bodyElement = document.body.h1;
// console.log(bodyElement);
//
// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;
// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

//Навигация только по элементам
$( '.navbar-nav a' ).on( 'click', function () {
    $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
});

