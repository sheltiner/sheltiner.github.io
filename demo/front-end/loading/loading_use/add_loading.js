function addLoading(){
    var wrap = document.getElementById('wrapper');
        var loadingWrapper = document.createElement('div');
        loadingWrapper.className = 'loading-wrapper';
        // loading type对应的不同的动画
        var loadingView = document.createElement('div');
        loadingView.className = 'loading-view';
        // loading 内的文本标签
        var tipView = document.createElement('div');
        tipView.className = 'tip-view';
        tipView.innerText = 'loading';
        html = `
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
            `;
        loadingView.innerHTML = html;
        loadingWrapper.appendChild(loadingView);
        loadingWrapper.appendChild(tipView);
        wrap.appendChild(loadingWrapper);
}