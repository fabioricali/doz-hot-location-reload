module.exports = function (_module) {
    if (_module.hot) {
        _module.hot.dispose(function () {
            location.reload(true);
            throw new Error('Waiting reload... please do not consider this error :)');
        });
    }
};