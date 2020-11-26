for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling);
};

tree.onclick = function(e) {
    if (e.target.tagName != 'SPAN') return;

    let childCont = e.target.parentNode.querySelector('ul');

    if (!childCont) return;

    childCont.hidden = !childCont.hidden;

    if (childCont.hidden) {
        e.target.classList.add('hide');
        e.target.classList.remove('show');
    } else {
        e.target.classList.add('show');
        e.target.classList.remove('hide');
    }
}