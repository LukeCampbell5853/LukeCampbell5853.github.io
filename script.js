portrait = 0;
maxWidth = 0;
minWidth = 0;

function set_portrait(){
  var links = document.head.querySelectorAll("link");
  var hrefs = [];
  for (i=0, max = links.length; i<max; i++){
    var link = links[i]
    if (link.href.includes("landscape.css")){
      document.head.removeChild(link);
      hrefs[hrefs.length] = link.href.replace("landscape.css","portrait.css");
    }
  }
  for (i=0, max = hrefs.length; i<max; i++){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = hrefs[i];
    document.head.appendChild(link);
    console.log("switching to " + hrefs[i])
  }
  document.getElementById("navbar").children[0].innerHTML = "  &#8801  "
}

function set_landscape(){
  var links = document.head.querySelectorAll("link");
  var hrefs = [];
  for (i=0, max = links.length; i<max; i++){
    var link = links[i]
    if (link.href.includes("portrait.css")){
      document.head.removeChild(link);
      hrefs[hrefs.lenh] = link.href.replace("portrait.css","landscape.css");
    }
  }
  for (i=0, max = hrefs.length; i<max; i++){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = hrefs[i];
    document.head.appendChild(link);
    console.log("switching to " + hrefs[i])
  }
  document.getElementById("navbar").children[0].innerHTML = "LUKE CAMPBELL &#8801"
}

function set_display_mode() {
  console.log("resizing")
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (height>width && portrait!=1){
    set_portrait();
    portrait = 1;
  };
  if (width>height && portrait!=2){
    set_landscape();
    portrait = 2;
  };

  var navBubbles = document.getElementById("navbar").children;
  minWidth = navBubbles[0].offsetWidth;
  maxWidth = minWidth;
  for (i=1, max = navBubbles.length; i < max; i++){
    maxWidth = maxWidth + navBubbles[i].offsetWidth;
  };
  var navBar = document.getElementById("navbar");
  navBar.style.width = minWidth + "px";
};

window.onload = set_display_mode;
window.onresize = set_display_mode;

document.getElementById("navbar").onmouseover = function(){
  navBar = document.getElementById("navbar");
  var height = window.innerHeight;
  var width = window.innerWidth;
  if (maxWidth < (width - 0.05*height)){
    navBar.style.width = maxWidth + 1 + "px";
    console.log("no overflow");
  }else{
    navBar.style.width = (width - 0.05*height) + "px";
    console.log("overflow");
  };
}

document.getElementById("navbar").onmouseout = function(){
  navBar = document.getElementById("navbar")
  navBar.style.width = (minWidth+1) + "px";
}