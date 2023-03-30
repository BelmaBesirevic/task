const tabButtons = document.querySelector('.tab-btns')

tabButtons.addEventListener('click', e => {
  const button = e.target.closest('.tab-btn')
  if (!button) return

  const tabName = button.dataset.tab
  const tab = document.getElementById(tabName)
  if (!tab) return

  const activeButton = document.querySelector('.tab-btn.active')
  if (activeButton) {
    activeButton.classList.remove('active')
  }
  button.classList.add('active')

  const activeTab = document.querySelector('.tab.active')
  if (activeTab) {
    activeTab.classList.remove('active')
    activeTab.style.display = 'none'
  }
  tab.classList.add('active')
  tab.style.display = 'block'
})
