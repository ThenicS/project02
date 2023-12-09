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

async function home(req, res) {
    //     This endpoint enables you to receive real-time photos curated by the Pexels team.
    // We add at least one new photo per hour to our curated list so that you always get a changing selection of trending photos.
    const image_Curated = await fetch(
        `https://api.pexels.com/v1/curated?per_page=30`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: apiKey,
            },
        }
    );
    const data = await image_Curated.json();
    const images = data.photos;
    console.log(images);
    res.render('images/home', { images: images });
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
