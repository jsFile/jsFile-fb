module.exports = function () {
    return {
        options: {
            compress: true,
            report: false
        },
        engine: {
            'src': 'dist/jsfile-fb.js',
            'dest': 'dist/jsfile-fb.min.js'
        }
    };
};