// Not Working

document.addEventListener('DOMContentLoaded', function () {
    const collectionEditDivs = document.querySelectorAll('.collection_edit');
    console.log(collectionEditDivs);
    collectionEditDivs.forEach(function (div) {
        div.style.display = 'none';
    });
});

function toggleCollectionEdit(collectionId) {
    const collectionEditDiv = document.getElementById(
        'collection_edit_' + collectionId
    );
    console.log(collectionEditDiv);
    if (
        collectionEditDiv.style.display === 'none' ||
        collectionEditDiv.style.display === ''
    ) {
        collectionEditDiv.style.display = 'block';
    } else {
        collectionEditDiv.style.display = 'none';
    }
}
