// Global jQuery references
var $commentCount = null;

/*
 * Run on page load.
 */
var onDocumentLoad = function(e) {
    // Cache jQuery references
    // $commentCount = $('.comment-count');

    // renderExampleTemplate();
    // getCommentCount(showCommentCount);

    SHARE.setup();
}

/*
 * Basic templating example.
 */
var renderExampleTemplate = function() {
    var context = $.extend(APP_CONFIG, {
        'template_path': 'jst/example.html',
        'config': JSON.stringify(APP_CONFIG, null, 4),
        'copy': JSON.stringify(COPY, null, 4)
    });

    var html = JST.example(context);

    $('#template-example').html(html);
}

/*
 * Display the comment count.
 */
var showCommentCount = function(count) {
    $commentCount.text(count);

    if (count > 0) {
        $commentCount.addClass('has-comments');
    }

    if (count > 1) {
        $commentCount.next('.comment-label').text('Comments');
    }
}

var onPageLoad = function() {
    $('.section').css({
      'opacity': 1,
      'visibility': 'visible',
    });
};

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        controlArrows: true,
        css3: true,
        fixedElements: '#nav',
        loopHorizontal: false,
        autoScrolling: true,
        keyboardScrolling: false,
        scrollingSpeed: 700,
        afterRender: onPageLoad,
        onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
          
        },
        onLeave: function( index, nextIndex, direction){
      
        }
    });
});    

$(onDocumentLoad);
