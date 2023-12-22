// DOMContentLoaded;
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', function () {
    const removeButton = document.querySelector('.hide_remove');
    const galleryRemove = document.querySelector('.gallery_remove');
    removeButton.addEventListener('click', function () {
        console.log('clicked');
        galleryRemove.classList.toggle('hidden');
        console.log('galleryRemove:', galleryRemove.classList);
    });
});
