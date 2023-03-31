const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');

// Hide all tabs except the first one
for (let i = 1; i < tabs.length; i++) {
  tabs[i].style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');

    // Hide all tabs except the one with the matching data-tab attribute
    tabs.forEach(tab => {
      if (tab.id === button.dataset.tab) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  });
});

// Add active class to the first button
buttons[0].classList.add('active');
