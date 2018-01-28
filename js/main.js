!function(){
    let duration=50
    function writeCode(prefix,code,fn){
        let container = document.querySelector("#code");
        let styleTag = document.querySelector("#styleTag");
        let n = 0;
        setTimeout(function run(){
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop=container.scrollHeight;
            if(n<code.length) {
                setTimeout(run,duration)
            }else{
                fn && fn.call();
            }
        },10)
    }
    let code = `
    .preview {
    /*height: 100vh;*/
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;

}

.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}

.nose {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
    border-radius: 11px;
}

.eye {
    height: 49px;
    width: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
}

.eye:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    border: 2px solid black;
    top: -1px;
}

.eye.left {
    right: 50%;
    margin-right: 90px;
}

.eye.right {
    left: 50%;
    margin-left: 90px;
}

.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}

.face.left {
    right: 50%;
    top: 85px;
    margin-right: 116px;
}

.face.right {
    left: 50%;
    margin-left: 116px;
}

.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    background: #FDE348;
    position: absolute;
    top: 55px;
}

.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}

.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.lowerLip-wrapper{
    bottom: 0;
    width: 300px;
    height: 110px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    /*border: 1px solid red;*/
    overflow: hidden;
    height: 100px;
    /*z-index: -1;*/
}
.lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip:after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 90px;
    background: #FC4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 80px;
}`
    writeCode("",code)
    $(".actions").on("click","button",function (e) {
        let $button = $(e.currentTarget);
        let speed=$button.attr('data-speed')
        $button.addClass("active").siblings(".active").removeClass("active");
        switch (speed) {
            case 'slow':
                duration = 100;
                break
            case "normal":
                duration=50
                break
            case "fast":
                duration=10
                break
        }

    })
}.call()