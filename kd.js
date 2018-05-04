var onEnterViewPort = function(entries, observer) {
  entries.forEach(function(entry) {
    console.log(entry);
    // Fade in when we enter the viewport
    if (entry.intersectionRatio !== 0) {
      entry.target.classList.add('in');
    }
    // Fade back out when we leave the viewport
    else {
      entry.target.classList.remove('in');
    }
  })
}

var observer =  new IntersectionObserver(onEnterViewPort , {
});

var panels= document.querySelectorAll('.panel');
for(var i = 0; i < panels.length; ++i) {
  observer.observe(panels[i]);
}
