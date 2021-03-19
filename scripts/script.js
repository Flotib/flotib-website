document.getElementById('logo').setAttribute('draggable', false);
window.onscroll = function () { scrollFunction() };
window.onorientationchange = function () { scrollFunction() };
window.onresize = function () { scrollFunction() };

function currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}

function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        document.getElementById("navbar").style.textShadow = "0px 0px 0px transparent";
        document.getElementById("navBackground").style.backgroundColor = "black";
        if (screen.availHeight > screen.availWidth) {
            document.getElementById("logo").style.fontSize = "60px";
            document.getElementById("navbar").style.height = "220px";
            //document.getElementById("navbar-right").style.marginRight = "180px";
            document.getElementById("logo").style.marginLeft = "180px";
            document.getElementById("navbutton").style.marginRight = "110px";
            document.getElementById("navmenubutton").style.marginRight = "110px";
        } else {
            document.getElementById("logo").style.fontSize = "25px";
            document.getElementById("navbar").style.height = "80px";
            document.getElementById("navbar-right").style.marginRight = "18%";
            document.getElementById("logo").style.marginLeft = "18%";
        }
        if (document.getElementById("headerbackground") != null) {
            document.getElementById("headerbackground").style.filter = "blur(3px)";
        }
    } else {
        document.getElementById("navbar").style.textShadow = "0px 0px 9px #9dbfffde";

        document.getElementById("navBackground").style.backgroundColor = "transparent";
        if (screen.availHeight > screen.availWidth) {
            document.getElementById("logo").style.fontSize = "55px";
            document.getElementById("navbar").style.height = "180px";
            //document.getElementById("navbar-right").style.marginRight = "120px";
            document.getElementById("logo").style.marginLeft = "120px";
            document.getElementById("navbutton").style.marginRight = "70px";
            document.getElementById("navmenubutton").style.marginRight = "70px";
        } else {
            document.getElementById("logo").style.fontSize = "35px";
            document.getElementById("navbar").style.height = "160px";
            document.getElementById("navbar-right").style.marginRight = "250px";
            document.getElementById("logo").style.marginLeft = "250px";
        }
        if (document.getElementById("headerbackground") != null) {
            document.getElementById("headerbackground").style.filter = "blur(0px)";
        }
    }
}

var app = new Vue({
    el: '#app',
    data: {
        galleryImage: [
            {
                name: 'Flotib',
                realname: 'Flotib studying',
                commission: false,
            },
            {
                name: 'MercenariesWitch',
                realname: 'Mercenaries - The Witch',
                commission: false,
            },
            {
                name: 'Mercenaries',
                realname: 'Mercenaries',
                commission: false,
            },
            {
                name: 'Elune',
                realname: 'Elune',
                commission: false,
            },
            {
                name: 'Faelya2',
                realname: 'Faelya the Night Fae',
                commission: false,
            },
            {
                name: 'KnightHollow',
                realname: 'Knight Hollow',
                commission: false,
            },
            {
                name: 'Shaflow',
                realname: 'Shaflow',
                commission: false,
            },
            {
                name: 'FaelenariaFace',
                realname: 'Faelenaria face',
                commission: false,
            },
            {
                name: 'Faelenaria',
                realname: 'Faelenaria',
                commission: false,
            },
            {
                name: 'Anathelle',
                realname: 'Anathelle',
                commission: false,
            },
            {
                name: 'James',
                realname: 'James',
                commission: true,
            },
            {
                name: 'Amorvia',
                realname: 'Amorvia',
                commission: true,
            },
            {
                name: 'Ashtinn2',
                realname: 'Ashtinn warships battle',
                commission: true,
            },
            {
                name: 'Ashtinn',
                realname: 'Ashtinn',
                commission: true,
            },

            {
                name: 'Kamelia',
                realname: 'Kamelia',
                commission: true,
            },
            {
                name: 'Veckiuss',
                realname: 'Veckiuss',
                commission: true,
            },
            {
                name: 'William',
                realname: 'William',
                commission: true,
            },
            {
                name: 'Faelya',
                realname: 'Faelya',
                commission: false,
            },
            {
                name: 'Kyrian',
                realname: 'Kyrian',
                commission: false,
            },
            {
                name: 'TheobaldAbigailLandscape',
                realname: 'Theobald and Abigail (landscape)',
                commission: true,
            },
            {
                name: 'Theobald_and_Abigail',
                realname: 'Theobald and Abigail',
                commission: true,
            },
            {
                name: 'Jil',
                realname: 'Jil the Paladin',
                commission: true,
            },
            {
                name: 'Cathedral',
                realname: 'Paladin Cathedral',
                commission: false,
            },
        ],
        selectedImage: null,
        showCopyright: false,
    },

    computed: {

    },

    methods: {
        imageOrientation(imgname) {
            img = new Image()
            img.src = '../img/artwork/' + imgname + '.jpg'

            img.onload = function () {

                if (img.naturalWidth > img.naturalHeight) {
                    return false
                } else if (img.naturalWidth < img.naturalHeight) {
                    return true
                } else {
                    return false
                }
            }
        },

        /* ---REWORKED---
        strArtNameReplace(myStr) {
            let newStr = myStr.replace(/_/g, " ");
            return newStr
        },*/
    },

    mounted() {

    }

})