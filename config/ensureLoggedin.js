module.exports = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
    // or create static page
};
