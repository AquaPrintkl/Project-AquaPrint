var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = function(){
    const contentpage = document.getElementById('main_content');
    setTimeout(function() {
        const loadingDiv = document.getElementById('loading');
        console.log(getComputedStyle(loadingDiv).display); // Log the computed style
        try {
            loadingDiv.style.display = 'none';
        }  catch (error) {
            console.log(error); // Log any errors
        }
        contentpage.style.display = 'block';
        console.log(loadingDiv.style.display,"hi")
    }, 3000 );
};

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: window.innerHeight * 2,
        width: `${window.innerHeight * 10}`,
        videoId: 'gwZB5j016Es',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'disablekb': 1,
            'modestbranding': 1,
            'rel': 0,
            'start': 18,
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}



        function onPlayerReady(event) {
            event.target.playVideo();
        }

const navbar = document.querySelector('nav');

let previousScrollY = 0;
let previousHeight = 0;
let navbarTop = 0;

// get the initial top position of the navbar
navbarTop = window.getComputedStyle(navbar, null).getPropertyValue("top");
navbarTop = parseInt(navbarTop, 10);

window.addEventListener("scroll", function(event) {
  const currentScrollY = window.scrollY;
  const nav_collaps = document.getElementById("navbarSupportedContent");
  const nav_height = getComputedStyle(nav_collaps).height;
  if (currentScrollY > previousScrollY) {
    // scroll down
    if (nav_collaps.classList.contains("show") && (nav_height === previousHeight)) {
        nav_collaps.classList.remove("show")
    } else if (nav_collaps.classList.contains("collapsing") === false && (nav_collaps.classList.contains("show") === false)) {
        navbar.style.top = (navbarTop - 70) + 'px';
    }
  } else if (currentScrollY < previousScrollY) {
    navbar.style.top = (navbarTop) + 'px';
  }
  previousScrollY = currentScrollY;
  previousHeight = nav_height;
});

const runColorMode = (fn) => {
    if (!window.matchMedia) {
      return;
    }
    
    const query = window.matchMedia('(prefers-color-scheme: dark)');
  
    fn(query.matches);
  
    query.addEventListener('change', (event) => fn(event.matches));
  }
  
  runColorMode((isDarkMode) => {
    if (isDarkMode) {
      document.getElementById("loading n").style.color = "white"
    } else {
      document.body.classList.remove('dark-mode');
    }
  })

container = document.getElementById("video_container")
relation = document.getElementById("introduction")

if (relation) {
  container.style.width = relation.style.width || window.getComputedStyle(relation).width;
} else {
  console.error("Could not copy width from #introduction to #video_container");
}
