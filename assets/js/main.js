const searchBtn = document.querySelector('#search-btn');
const enterBtn = document.querySelector('#enter-btn');
const searchInput = document.querySelector('#search-input');
const isEmpty = str => !str.trim().length;



searchBtn.addEventListener('click', function(event) {
  
    searchInput.classList.toggle('active');



    function test(){
      enterBtn.classList.add('active');
      searchBtn.classList.add('active-enter');
    }
    


  searchInput.addEventListener("input", function() {
    if( isEmpty(this.value) ) {
      searchBtn.classList.remove('active-enter');
      enterBtn.classList.remove('active'); 
    } else{
      searchInput.onkeypress = test;
    }
  });
});


