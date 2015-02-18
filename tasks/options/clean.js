module.exports = {
    options: {
        trace: true
    },
    init: {
        src: [require('../../config/app').outputFile, require('../../config/app').buildDir]
    },
    cleanup:{
        src: require('../../config/app').buildDir
    } 
}