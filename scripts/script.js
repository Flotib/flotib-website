document.getElementById('logo').setAttribute('draggable', false);
window.onscroll = function () { scrollFunction() };
window.onorientationchange = function () { scrollFunction() };

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
            document.getElementById("navbar-right").style.marginRight = "180px";
            document.getElementById("logo").style.marginLeft = "180px";
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
            document.getElementById("navbar-right").style.marginRight = "120px";
            document.getElementById("logo").style.marginLeft = "120px";
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
            'Cathedral',
            'Jil',
            'Theobald_and_Abigail',
            'Theobald_and_Abigail_landscape',
            'Kyrian',
            'Faelya',
            'William',
            'Veckiuss',
            'Kamelia',
            'Ashtinn',
            'Ashtinn_second_pose',
            'Amorvia',
            'James',
            'Anathelle',
            'Faelenaria',
            'Faelenaria_face',
            'Shaflow',
            'Knight_Hollow',
            'Faelya_the_Night_Fae',
            'Elune',
            'Mercenaries',
            'Mercenaries_-_The_Witch',
            'Flotib_studying',
        ],
        selectedImage: null,
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

        strArtNameReplace(myStr) {
            let newStr = myStr.replace(/_/g, " ");
            return newStr
        },
    },

    mounted() {

    }

})