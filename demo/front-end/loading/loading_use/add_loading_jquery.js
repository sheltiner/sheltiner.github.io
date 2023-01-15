function addLoadingJquery() {
    var $loadingWrapper = $('<div></div>').addClass("loading-wrapper");
    // loading type对应的不同的动画
    var $loadingView = $('<div></div>').addClass('loading-view');
    // loading 内的文本标签
    var $tipView = $('<div></div>').addClass('tip-view');
    $tipView.text('loading');
    $loadingView.html(`
            <div class="container1">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
            </div>
            <div class="container2">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
            </div>
        `);
    $('#wrapper').append($loadingWrapper);
    $loadingWrapper.append($loadingView);
    $loadingWrapper.append($tipView);
}