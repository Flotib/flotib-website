document.getElementById('logo').setAttribute('draggable', false);
window.onscroll = function () { scrollFunction() };
window.onorientationchange = function () { scrollFunction() };
window.onresize = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
        document.getElementById("navbar").style.textShadow = "0px 0px 0px transparent";
        document.getElementById("navBackground").style.backgroundColor = "black";
        if (screen.availHeight > screen.availWidth) {
            document.getElementById("logo").style.fontSize = "60px";
            document.getElementById("navbar").style.height = "220px";
            //document.getElementById("navbar-right").style.marginRight = "180px";
            document.getElementById("logo").style.marginLeft = "180px";
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
                name: 'Losare',
                realname: 'Losare',
                commission: true,
            },
            {
                name: 'EsauAndHisMask',
                realname: 'Two sides of Esau',
                commission: true,
            },
            {
                name: 'Elyzara',
                realname: 'Elyzara',
                commission: false,
            },
            {
                name: 'Plstryme&Alexah',
                realname: 'Plstryme and Alexah',
                commission: true,
            },
            {
                name: 'Lumydre',
                realname: 'Lumydre',
                commission: true,
                album: [
                    {
                        name: 'Lumydre2',
                        realname: 'Lumydre variant',
                        commission: true,
                    },
                ],
            },
            {
                name: 'Erelisse',
                realname: 'Erélisse',
                commission: false,
                album: [
                    {
                        name: 'ErelisseNaked',
                        realname: 'Erélisse - mirror nightmare',
                        commission: false,
                    },
                ],
            },
            {
                name: 'AnalisseAyden',
                realname: 'Adventurers vs Kobolds',
                commission: true,
                album: [
                    {
                        name: 'Analisse',
                        realname: 'Analisse',
                        commission: true,
                    },
                    {
                        name: 'Ayden',
                        realname: 'Ayden',
                        commission: false,
                    },
                ],
            },
            {
                name: 'FlotibPainting',
                realname: 'Flotib painting an elf',
                commission: false,
            },
            {
                name: 'Flotib',
                realname: 'Flotib studying',
                commission: false,
            },
            {
                name: 'Mercenaries',
                realname: 'Mercenaries',
                commission: false,
                album: [
                    {
                        name: 'MercenariesWitch',
                        realname: 'Mercenaries - The Witch',
                        commission: false,
                    },
                ],
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
                realname: 'Faelenaria',
                commission: false,
                album: [
                    {
                        name: 'Faelenaria',
                        realname: 'Faelenaria looks at her reflection',
                        commission: false,
                    },
                ],
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
                realname: 'Ashtinn',
                commission: true,
                album: [
                    {
                        name: 'Ashtinn',
                        realname: 'Ashtinn',
                        commission: true,
                    },
                ],
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
                name: 'Theobald_and_Abigail',
                realname: 'Theobald and Abigail',
                commission: true,
                album: [
                    {
                        name: 'TheobaldAbigailLandscape',
                        realname: 'Theobald and Abigail (landscape)',
                        commission: true,
                    },
                ],
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
        navOpen: false,
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

        scrollToId(id) {
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        }

        /* ---REWORKED---
        strArtNameReplace(myStr) {
            let newStr = myStr.replace(/_/g, " ");
            return newStr
        },*/
    },

    mounted() {

    }

})