document.getElementById('logo').setAttribute('draggable', false);
window.onscroll = function () { scrollFunction() };
window.onorientationchange = function () { scrollFunction() };

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
        if (document.getElementById("headerbackground")!=null) {
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
            document.getElementById("navbar").style.height = "150px";
            document.getElementById("navbar-right").style.marginRight = "250px";
            document.getElementById("logo").style.marginLeft = "250px";
        }
        if (document.getElementById("headerbackground")!=null) {
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
            'Mercenaries_the_Witch',
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

        strReplace(myStr) {
            let newStr = myStr.replace(/_/g, " ");
            return newStr
        },
    },

    mounted() {

    }

})