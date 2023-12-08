// require .env file
require('dotenv').config();

// apiKey
const apiKey = `${process.env.API_KEY}`;

module.exports = {
    home,
    search,
    showimages,
    imageindex,
};

function home(req, res) {
    res.render('images/home');
}

function search(req, res) {
    res.render('images/search');
}

async function showimages(req, res) {
    const search = req.body.search;
    const page = req.body.page;
    const per_page = req.body.per_page;

    const imagesAPI = await fetch(
        `https://api.pexels.com/v1/search/?page=${page}&per_page=${per_page}&query=${search}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: apiKey,
            },
        }
    );
    const data = await imagesAPI.json();
    const images = data.photos;
    res.render('images/show', {
        images: images,
        data: data,
        search: search,
        per_page: per_page,
        page: page,
    });
}

async function imageindex(req, res) {
    const id = +req.params.id;
    const imagesAPI_id = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: apiKey,
        },
    });
    const data = await imagesAPI_id.json();
    const imageId = data;
    console.log(imageId);
    res.render('images/index', { imageId: imageId });
}
