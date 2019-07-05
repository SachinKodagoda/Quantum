// target elements with the "draggable" class
interact('.draggable')
    .draggable({

    });



// this is used later in the resizing and gesture demos



$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false,
        margin: 10,
        navRewind: false,
        items: 1,
        dots: false,
    })
})


interact('.resize-drag')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrict({
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            }),
        ],
        // enable autoScroll
        autoScroll: true,
        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                    Math.pow(event.pageY - event.y0, 2) | 0))
                    .toFixed(2) + 'px');
        }
    })
    .resizable({
        // preserveAspectRatio: true,
        edges: { left: true, right: true, bottom: true, top: true }
    })
    .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        target.textContent = event.rect.width + '×' + event.rect.height;
    })
    .on('doubletap', function (event) {
        var target = event.target;
        console.log("Hi");
        target.style.backgroundColor = "red";
        // target.setAttribute('data-x', 0);
        // target.setAttribute('data-y', 0);
    });

window.dragMoveListener = dragMoveListener;
function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}
