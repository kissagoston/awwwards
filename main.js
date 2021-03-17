function _load() {

    /* preloeader = a bordó %-os aniáció betöltése ami betöltés után */
    let preloader = ` <div id="preloader">

                        <div class="box">
                            <div class="percent">

                                <div class="percentNum" id="count">0</div>
                                <div class="percentB">%</div>
                            </div>

                            <div id="water" class="water">

                            </div>
                        </div>
                    
                    </div>
                    `;
    /* pageContent = az oldal teljes tartalma */
    let pageContent = `  <!-- A betu logo -->
    <a href="./" id="logo" class="page-link xxlh"> <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -10 2020 2020">
            <path class="letter"
                d="M518.46,1374.27h114L982.43,446.41h31.11L1366,1374.27h115.34v18.14H1082.22v-18.14h143.85L1090,1014.41H789.32L653.24,1374.27H797.1v18.14H518.46Zm421.2-755.5L797.1,995.41l285.12.45Z"
                transform="translate(-0.5 -0.5)" stroke-width="0"></path>
            <path style="fill: none !important;" class="outline"
                d="M1000,1994.5C450.75,1994.5,5.5,1549.25,5.5,1000S450.75,5.5,1000,5.5s994.5,445.25,994.5,994.5"
                transform="translate(-0.5 -0.5)" stroke-miterlimit="100" stroke-width="24"></path>
        </svg></a>
 
    <!-- jobb mobile fancy hamburger menu -->
    <a href="#" id="menu-button" class="xxlh"><span></span></a>
 
    <!-- cirle es AUTUMN  -->
    <div id="hero">
        <div class="ellipse">
            <p class="tag overline">LONDON • BERLIN</p>
        </div>
        <div id="title-container" style="transform: translate(-50%, 0px);">
            <h1 id="title"> 
                <span style="transition-delay: 0s;">A</span> 
                <span style="transition-delay: 0.0285714s;">U</span> 
                <span style="transition-delay: 0.1571429s;">T</span>
                <span style="transition-delay: 0.2857143s;">U</span>
                <span style="transition-delay: 0.314286s;">M</span>
                <span style="transition-delay: 0.442857s;">N</span>
            </h1>
        </div>
    </div>
    <!-- END cirle es AUTUMN  -->
 
    <!-- social link jobb oldalt lent -->
    <div id="flink"> <a href="./" class="page-link xxlh lt">New <br>Business</a> </div>
    
    <!-- business link ball oldalt lent -->
    <div id="social"> 
        <a href="#" target="_blank" class="xlh" title="Instagram">In</a>
        <a href="#" target="_blank" class="xlh" title="Dribbble" >Dr</a>
        <a href="#" target="_blank" class="xlh" title="Behance  ">Be</a> 
    </div>
 
    <!-- Nagy A betu vízjel -->
    <div class="watermark"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="525 446 945 940">
            <path
                d="M518.46,1374.27h114L982.43,446.41h31.11L1366,1374.27h115.34v18.14H1082.22v-18.14h143.85L1090,1014.41H789.32L653.24,1374.27H797.1v18.14H518.46Zm421.2-755.5L797.1,995.41l285.12.45Z"
                transform="translate(-0.5 -0.5)" stroke-width="0"></path>
        </svg>
    </div>
 
                      `;

    // "bordó" preloader betöltése a HTML-be
    document.getElementById('root').insertAdjacentHTML('beforeend', preloader);
    // vajszinü telejes oldal betöltése a HTML -be 
    document.getElementById('root').insertAdjacentHTML('beforeend', pageContent); // pagecontent betöltése a HTML-be






    /* ***************   CSAK a preloader-hez tartozo dolgok ****************  */

    //azért itt declaráljuk hogy a füvénybe lássuk az előző értéket.
    let cnt = document.getElementById("count");  // itt látszik a szám része  57% -> pl: 45 -> ez nincs benne % 
    let percent = 0; // ez latszik a bordó kör közepén 1-töl -> 100% ig
    let water = document.getElementById("water"); // barna növekedés alulról (ez tölti meg a circle-t)
        /* ez egy DIV ami translate( 0, 100%)-al lefelé el van tolva majd az Y tengelyen a 100% 
           csökken ahogy az percent változó növekszik a vége translate(0,0) */

  
    let percentageSpeed = 10 //ms    // default: 10 - ez szabalyozza   (milisecundum 1000 = 1sec)


    /* that is starting the applying tag,class#loaded class on elements with transition/opacity/transform animation */
    function showTheWebPage() {
        // console.log(Date() + ' Loaded func. added class="loaded" to body, '); // loaded class-ra indul az animacio
        document.querySelector('body').classList.add('loaded');
        document.getElementById('preloader').outerHTML = "";   // ki töröljük a preloader div-et internal CSS-el eggyüt
    }


    /* preloader div hide/fade opacity:0 with transition --- after next function remove it.*/
    function animationHide() {
        document.getElementById('preloader').classList.add("hide"); // itt tunik el a 100% kiírása

        setTimeout(showTheWebPage, 500); // def 500 mennyi idő mulva induljon a A logo, betük ,hamburger icon animáció. 
        // a vajszinü- oldal (loaded class-ra indul be es jelennek meg ay elemek opacity:0 -> opacity:1 re transitionnal)
        // a beúszó logó & hamburger menü translate(20px,0)+opacity:0  -> translate(0,0)+opacity:1 transition miatt van animació
    }


    /* 1-100-ig számól */
    function percent_calculation() {
        //debugger
        percent++; // növeljük a számlálót (1-100-ig)
        cnt.innerHTML = percent;
        water.style.transform = 'translate(0' + ',' + (100 - percent) + '%)';


        if (percent === 100) {
            /* 100% mostmár nem kell többet meghivjuk, töröljük a timer listából timerünket-t */
            clearInterval(interval);

            // mennyi ideig lássuk a 100%- ot mielőtt fade-eljük/hide-oljuk a bordó preloadert 1000 = 1 másodperc
            setTimeout(animationHide, 2500);
        }

    }

    /* 100-szor fog végig menni IF vizsgálja a 100-at és 100-mál kilép percentage-ot
    default 10 milisec gyorsan betöltődik- milyen gyors legyen a betöltés */
    let interval = setInterval(percent_calculation, percentageSpeed);
    // 1-100ig számláló funtion - id jet tároljuk hogy 100-nal ki tudjuk törölni a clearinterval( interval );



}


window.addEventListener('load', _load);