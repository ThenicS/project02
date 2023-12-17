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
    try {
        const image_Curated = await fetch(
            `https://api.pexels.com/v1/curated?per_page=80`,
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
        // console.log(images);
        res.render('images/home', {
            images: images,
            pageTitle: 'Home',
            path: '/',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

function search(req, res) {
    try {
        // Add Trending and New to image search page
        res.render('images/search', {
            pageTitle: 'Photos',
            path: '/search',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function showimages(req, res) {
    try {
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
            pageTitle: 'Photos',
            path: '/search',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
// show image index page after clicked image in '/', '/images/search, '/images/show'
async function imageindex(req, res) {
    try {
        const id = +req.params.id;
        const imagesAPI_id = await fetch(
            `https://api.pexels.com/v1/photos/${id}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: apiKey,
                },
            }
        );
        const data = await imagesAPI_id.json();
        const imageId = data;
        const photographer = imageId.photographer;
        const pexelUrl = imageId.url;
        const ima_Original = imageId.src.original;
        const ima_Large2x = imageId.src.large2x;
        const ima_Large = imageId.src.large;
        const ima_Medium = imageId.src.medium;
        const alt = imageId.alt;
        res.render('images/index', {
            imageId: imageId,
            id: id,
            photographer: photographer,
            pexelUrl: pexelUrl,
            ima_Original: ima_Original,
            ima_Large2x: ima_Large2x,
            ima_Large: ima_Large,
            ima_Medium: ima_Medium,
            alt: alt,
            pageTitle: 'Photos',
            path: '/search',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
