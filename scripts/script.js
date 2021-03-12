document.getElementById('logo').setAttribute('draggable', false);
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        document.getElementById("navbar").style.textShadow = "0px 0px 0px transparent";
        document.getElementById("navbar").style.padding = "10px";
        document.getElementById("navbar-right").style.marginRight = "18%";
        document.getElementById("logo").style.marginLeft = "22%";
        document.getElementById("navContent").style.backgroundColor = "black";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("headerbackground").style.filter = "blur(3px)";
    } else {
        document.getElementById("navbar").style.textShadow = "0px 0px 9px #9dbfffde";
        document.getElementById("navbar").style.padding = "50px";
        document.getElementById("navbar-right").style.marginRight = "15%";
        document.getElementById("logo").style.marginLeft = "15%";
        document.getElementById("navContent").style.backgroundColor = "transparent";
        document.getElementById("logo").style.fontSize = "35px";
        document.getElementById("headerbackground").style.filter = "blur(0px)";
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