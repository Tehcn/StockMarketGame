(async () => {
    let pages = (await (await fetch('/view-list')).json()).pages;
    pages.forEach(page => {
        let a = document.createElement('a');
        a.href = `/?page=${page}`;
        a.innerText = `${page.charAt(0).toUpperCase() + page.slice(1)}`;
        document.querySelector('nav').appendChild(a);
    });
})();