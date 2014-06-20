function imageTimelapse() {

    // Chart attributes
    var me = {
        images: [],
        width:  800,
        height: 400,
        imgClass: function(d) { return 'canvas-image'; },
        duration: 2000,
        label: function(d) { return ''; },
        labelFont: '12pt Arial',
        labelColor: '#bababa',
        labelOffset: {
            x: 40,
            y: 30
        },
        running: false,
        onLoadImage: function(d) {}
    };

    var imageIndex = 0,
        currentTimeout;

    function drawImage(selection) {
        selection.each(function(image) {

            var canvas  = d3.select(this),
                context = canvas.node().getContext('2d');

            // Load image and
            image.img = new Image();
            image.img.src = image.url;
            image.img.onload = function() {
                image.ready = true;
                context.drawImage(image.img, 0, 0, me.width, me.height);

                // Write the label
                context.setFillColor(me.labelColor);
                context.font = me.labelFont;
                context.fillText(me.label(image), me.labelOffset.x, me.labelOffset.y);

                me.onLoadImage();
            }
        });
    }

    function chart(selection) {

        // Load the images
        var canvas = selection.selectAll('canvas').data(me.images);

        canvas.enter().append('canvas')
            .attr('width',  me.width)
            .attr('height', me.height)
            .attr('class', 'canvas-image')
            .call(drawImage);
    }

    chart.start = function(selection) {

        me.running = true;
        selection.selectAll('canvas').transition().duration(me.duration)
            .style('opacity', function(d, i) { return +(i <= imageIndex); });

        // Schedule the drawing update
        imageIndex = (imageIndex + 1) % (me.images.length);
        currentTimeout = setTimeout(function() { chart.start(selection); }, me.duration);
    };

    chart.stop = function(selection) {
        me.running = false;
        clearTimeout(currentTimeout);
    };

    chart.toggle = function(selection) {
        if (me.running) {
            chart.stop(selection);
        } else {
            chart.start(selection);
        }
    };

    function createAccessor(attr) {
        return function(value) {
            if (!arguments.length) { return me[attr]; }
            me[attr] = value;
            return chart;
        };
    }

    for (var attr in me) {
        if ((!chart[attr]) && (me.hasOwnProperty(attr))) {
            chart[attr] = createAccessor(attr);
        }
    }

    return chart;
}