// Controller Error, type wrong url

module.exports = {
    get404Page,
};

function get404Page(req, res, next) {
    res.status(404).render('errors/404', {
        pageTitle: 'page not found',
        path: '/404',
    });
}
