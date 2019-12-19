let pageName = 'Webby'
let nameList = ['Webby', 'Siteable', 'ClickClack', 'Website', 'WebPage']
let logo = document.getElementById('logo')
let main = document.getElementById('main-name')

function clickMe() {
  let randomNum = Math.floor(Math.random() * nameList.length)
  logo.innerText = nameList[randomNum]
  main.innerText = nameList[randomNum]
}