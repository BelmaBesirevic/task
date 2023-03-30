function openTab(tabName, button) {
  const tabs = document.querySelectorAll('.tab')
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none'
  }

  const buttons = document.getElementsByClassName('tab-btn')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active')
  }

  document.getElementById(tabName).style.display = 'block'

  button.classList.add('active')
}
