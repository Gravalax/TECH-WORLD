
document.addEventListener('DOMContentLoaded', () => {
  let theme = document.getElementById('theme');
  let dropdown = document.getElementById('dropdown');

  theme.onclick = () => {
    console.log('click');
    dropdown.classList.toggle('active')   
   };
})

