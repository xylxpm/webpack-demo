module.exports = function (css) {
    /* 这里的方法不会在打包的时候执行，它是在webpac把css插入到html中的时候执行，也即是说这里的方法是在浏览器端执行，所以可以拿到浏览器的dom之类的，判断浏览器类型。载入了几个css，就会执行几次*/
    console.log(css);
    console.log(window.innerHeight);

    if(window.innerWidth>=768){
        return css.replace('#c0c0c0','green');
    }else{
        return css.replace('#c0c0c0','orange');
    }





}
