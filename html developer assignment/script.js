const searchIcon = document.querySelector('.search-icon');
const menuLists = document.querySelector('.menu-item');
const searchInput = document.querySelector('.header-input');

let isSearchVisible = false;

searchIcon.addEventListener('click', ()=>{
    if(isSearchVisible){
        searchInput.style.display = 'none';
        menuLists.style.display = 'flex';
    }else{
        searchInput.style.display = 'block';
        menuLists.style.display = 'none';
    }
    isSearchVisible = !isSearchVisible;
})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}