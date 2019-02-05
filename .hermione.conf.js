module.exports = {
    windowSize: '1650x1050',
    compositeImage: true,
    screenshotDelay: 600,
    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            path: 'hermione-report',
            defaultView: 'all',
            scaleImages: true
        }
    },
    sets: {
        desktop: {
            files: 'tests/'
        }
    },
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                version: '72',
            }
        }
    }
};
