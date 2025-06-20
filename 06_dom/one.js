// getElementById => we can select tag by its id
document.getElementById('heading1')

// by  .className and .id ,we can know of selected tag id and className 
document.getElementById('heading1').className
document.getElementById('heading1').id

// .getAttribute("attributeName")=> by this we can know attribute
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')


// .setAttribute("AttributeName","its value") => by this we can set the  attribute by passing attribute name and its value
document.getElementById('title').setAttribute('class','first para1')

const title = document.getElementById('title')

// .style.propertyName ="value"  => by this we can apply styling
title.style.backgroundColor = 'green'

title.style.padding = "15px"

// innerText => show the content  of selected tag that is show on browser
title.innerText

// textContent => show all the content that is write inside the selected tag
title.textContent

// innerHtml => it show content with codes that is write in selected tag
title.innerHTML

// document.querySelector('selectors')=> it select first tag only
document.querySelector('h1')

document.querySelector('#heading1')

document.querySelector('.heading')

document.querySelector('input[type="password"]')

const myUl = document.querySelector('ul')
myUl.querySelector('li').style.color = "red"

// document.querySelectorAll('element/tag') => it select all the tag or element and always return node list ( although the select tag present one time or more) that is similar to array but not array
const myLl = document.querySelectorAll('li')

// we can apply property on nodelist like below 
myLl[1].style.color ="orange"


// .forEach(callback function) method use to iteration on nodeList 
myLi.forEach(function(item){
    item.style.backgroundColor ='purple'
})

// document.getElementsByClassName('className') =>  it always gave html collection 
const myli = document.getElementsByClassName('li')

// Array.from(html collection) => it convert html collection into the array once it convert ,we can use all method of array for iteration on html collection

Array.from(myli)