let searchIcon = document.getElementById('search-icon');
let searchBar = document.querySelector("#search-bar");
let header = document.querySelector('header .container') ;
let headerUl = document.querySelector('header nav ul');
let headerToglle = document.querySelector('header  nav .toggle-menu');
let landing = document.querySelector('.landing');
let menu = document.querySelector('header nav .menu ul');

headerToglle.onclick = function() {
    menu.style = 'display: block';
}

searchIcon.onclick = function () {
    searchIcon.style = `
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    left: 38px;
    `;
    searchBar.classList = 'toggled'
    searchBar.style = `
    position: static;
    display: block;
    padding: 10px 10px 10px 50px;
    background-color: transparent;
    border: white 1px solid;
    outline: none;
    flex-basis: 25%;
    color: #fff;
    max-width: 100%;`;
    if(window.innerWidth < 500 ) {
        header.style = 'flex-direction: column;'
    }
    if(window.innerWidth < 994 &&  window.innerWidth > 500) {
        headerToglle.style = 'display: block'
    }
}

document.onclick = function(e) {
    if(e.target != searchBar && e.target != searchIcon) {
        if(searchBar.classList.contains('toggled')){
            searchIcon.style = `position: static;`;
            searchBar.classList = 'toggled'
            searchBar.style = `position: absolute;`;
            if(window.innerWidth < 500 ) {
                header.style = ''
            }
            if(window.innerWidth < 994 &&  window.innerWidth > 500) {
                headerToglle.style = 'display: default';
            }
        }
    }
    if(e.target != menu && e.target != headerToglle) {
        menu.style = 'display: none';
    }
}

window.addEventListener('resize', function() {
    if(this.window.innerWidth > 768) {
        menu.style = 'display: none';
    }
});
