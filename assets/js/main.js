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


const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click' , () =>{
  sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display ='none';
})


themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})