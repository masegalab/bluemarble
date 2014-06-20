module.exports = function (grunt) {

    var jpgRecompress = require('imagemin-jpeg-recompress');

    grunt.initConfig({

        // Minify the images and store them in the assets directory
        imagemin: {
            bluemarble: {
                options: {
                    use: [jpgRecompress()]
                },
                files: {
                    'assets/images/200401.jpg': 'src/images/world.200401.3x5400x2700.jpg',
                    'assets/images/200402.jpg': 'src/images/world.200402.3x5400x2700.jpg',
                    'assets/images/200403.jpg': 'src/images/world.200403.3x5400x2700.jpg',
                    'assets/images/200404.jpg': 'src/images/world.200404.3x5400x2700.jpg',
                    'assets/images/200405.jpg': 'src/images/world.200405.3x5400x2700.jpg',
                    'assets/images/200406.jpg': 'src/images/world.200406.3x5400x2700.jpg',
                    'assets/images/200407.jpg': 'src/images/world.200407.3x5400x2700.jpg',
                    'assets/images/200408.jpg': 'src/images/world.200408.3x5400x2700.jpg',
                    'assets/images/200409.jpg': 'src/images/world.200409.3x5400x2700.jpg',
                    'assets/images/200410.jpg': 'src/images/world.200410.3x5400x2700.jpg',
                    'assets/images/200411.jpg': 'src/images/world.200411.3x5400x2700.jpg',
                    'assets/images/200412.jpg': 'src/images/world.200412.3x5400x2700.jpg'
                }
            }
        },

        // Download the images from NASA
        'curl-dir': {
            'bluemarble': {
                src: [
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74218/world.200412.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74192/world.200411.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74167/world.200410.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74142/world.200409.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74117/world.200408.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74092/world.200407.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/76000/76487/world.200406.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74042/world.200405.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74017/world.200404.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73992/world.200403.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73967/world.200402.3x5400x2700.jpg',
                    'http://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73938/world.200401.3x5400x2700.jpg'
                ],
                dest: 'src/images'
            }
        },

        // Compile the CSS files
        less: {
            main: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'assets/css/bluemarble.css': 'src/less/bluemarble.less',
                }
            }
        },
    });

    // Grunt Plugins
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Tasks
};