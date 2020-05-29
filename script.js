const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);

})

function dragstart() {
    addHighlight();
    this.classList.add('is-dragging')
}

function drag() {
}

function dragend() {
    removeHighlight();
    this.classList.remove('is-dragging')
}

function dragenter() {
}

function dragover() {
    this.classList.add('has-card-over')

    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}

function dragleave() {
    this.classList.remove('has-card-over')
}

function drop() {
    removeHighlight();
    this.classList.remove('has-card-over')
}

function addHighlight() {
    dropzones.forEach(dropzone => {
        dropzone.classList.add('highlight');
    })
}

function removeHighlight() {
    dropzones.forEach(dropzone => {
        dropzone.classList.remove('highlight');
    })
}