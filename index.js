module.exports = function (_module) {
    if (_module.hot) {
        _module.hot.accept(function () {
            location.reload();
        });
    }
};