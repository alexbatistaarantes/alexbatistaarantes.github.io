function load_theme() {
    var root = document.documentElement;
    var theme = localStorage.getItem('theme');
    if( !theme ){ 
        theme = 'preferable';
    }
    root.classList.replace( root.classList[0], theme);
}

function save_theme( theme ){
    if( ['preferable', 'dark', 'light'].includes(theme.toLowerCase()) ){
        localStorage.setItem('theme', theme);
    }
}

function apply_theme(theme){
    if( ['preferable', 'dark', 'light'].includes(theme.toLowerCase()) ){
        var root = document.documentElement;
        root.classList.replace( root.classList[0], theme );
        save_theme( theme );
    }
}

load_theme();
