window.onload = () => {
    var len1 = document.getElementById('text1').offsetHeight;
    var len2 = document.getElementById('text2').offsetHeight;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= len1+len2) {
            var video = $('#myvideo');
            video[0].play();
        }
    })

}



function imageCapture() {

    var video = document.getElementById("myvideo");
    console.log(video.duration);
    // video.play();
    // video.pause();
    video.currentTime = video.duration;
    video.pause();
    setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            dataUrl = canvas.toDataURL("image/jpeg", 1.0);  //图片二进制格式   
            saveFile(dataUrl, 'capture.jpg');
            document.body.appendChild(canvas);
        });
    }, 100)


    var saveFile = function (data, filename) {
        let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');  //img表示生成img元素或a元素或则可以放图片地址的元素

        save_link.href = data;              //img  元素中图片引入用src，a元素中图片的引入用href等等
        save_link.download = filename;    // 下载的名称
        var event = document.createEvent('MouseEvents');//创建event事件
        console.log(event);
        //initMouseEvent 方法用于初始化通过 DocumentEvent 接口创建的 MouseEvent 的值, 详见下文：
        event.initEvent('click', true, false);
        save_link.dispatchEvent(event);
    }
}


