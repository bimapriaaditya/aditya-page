bindGlobalSearch();

function bindGlobalSearch()
{
  let toggle = document.querySelectorAll('.header-search');

  for (let i = 0; i < toggle.length; i++) {
    let menu = document.querySelectorAll('.header-search-menu');
    toggle[i].addEventListener('click', e => {
      let menuTop = e.clientY + 45 + "px"; 
      if (!menu[i].classList.contains('show')) {
        menu[i].classList.add('show');
        menu[i].style.transform = `translate(0, ${menuTop}) scale(1)`;

        let input = menu[i].querySelectorAll('.form-control');
        input[i].addEventListener('keyup', e => {
          let searchStatus = menu[i].querySelectorAll('.status');
          let searchData = menu[i].querySelectorAll('.load-data');
          if (input[i].value) {
            
          } else {
            console.log('False');
          }
        });
        
      } else {
        menu[i].classList.remove('show');
        menu[i].style.transform = '';
      }
    });
  }

}