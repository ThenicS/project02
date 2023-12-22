// DOMContentLoaded;
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', function () {
    const showEditButtons = document.querySelectorAll('.show-edit');
    console.log(showEditButtons);
    showEditButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const collectionEdit =
                this.closest('.collection-pick').querySelector(
                    '.collection_edit'
                );
            collectionEdit.classList.toggle('hidden');
        });
    });
});
