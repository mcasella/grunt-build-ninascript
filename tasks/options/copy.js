module.exports = {
    main: {
        src: require('../../config/app').buildFiles,
        dest: require('../../config/app').buildDir,
        expand: true,
        cwd: '',
    }
}