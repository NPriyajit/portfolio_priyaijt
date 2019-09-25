function init() {
  const items = document.querySelectorAll(".nav-link");
  items.forEach(function(item, index) {
    item.addEventListener("click", function() {
      changeActive(this);
    });
  });

  function changeActive(box) {
    items.forEach(function(item) {
      item.classList.remove("active");
    });
    box.classList.add("active");
  }
}

function animate() {
  var textWrapper = document.querySelector(".hello");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({
      loop: false
    })
    .add({
      targets: ".name .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    })
    .add({
      targets: ".name .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
  setTimeout(showrealName, 4000);
}

function showrealName() {
  document.querySelector(".hello").innerHTML = "I'm N.Priyajit";
  var textWrapper = document.querySelector(".hello");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
}

function aboutSection() {
  document.querySelector(".desc").style.animationName = "aboutdesc";
  document.querySelector(".aboutMe > h2").style.animationName = "abouth2";
  document.querySelector(".aboutMe > h2").style.animationName = "abouth2";
  /*  var desc = document.querySelector(".desc");
    desc.innerHTML = desc.textContent.replace(
      /\S/g,
      "<span class='textdesc'>$&</span>"
    );

    anime
      .timeline({
        loop: false
      })
      .add({
        targets: ".desc .textdesc",
        translateX: [40, 0],
        translateZ: 02,
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      });*/
  var descs = document.querySelectorAll("#descdata");
  descs.forEach(function(desc) {
    desc.innerHTML = desc.textContent.replace(
      /\S/g,
      "<span class='textdesc'>$&</span>"
    );

    anime
      .timeline({
        loop: false
      })
      .add({
        targets: ".desc .textdesc",
        translateX: [40, 0],
        translateZ: 02,
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 1200,
        delay: (el, i) => 100 + 30 * i
      });
  });
}

function skillSection() {
  document.querySelector(".data").style.animationName = "programing";
  document.querySelector(".data1").style.animationName = "webdev";
  document.querySelector(".data2").style.animationName = "bckend";
  document.querySelector(".data3").style.animationName = "prsnl";

  var programs = document.querySelectorAll(".programminglang");
  programs.forEach(program => {
    const value = program.innerHTML;
    const width = program.getAttribute("setwidth");
    const name = program.getAttribute("name");
    const action = `<div class='progress'> <div class='progress-bar bg-dark' role='progressbar' style='width: ${width}' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'> ${width} </div> <div class="skillname">${name}</divs></div>`;
    program.addEventListener("mouseover", function() {
      this.innerHTML = action;
      setTimeout(() => {
        this.innerHTML = value;
      }, 3500);
    });
    program.addEventListener("mouseleave", function() {
      this.innerHTML = value;
    });
  });

  var webdv = document.querySelectorAll(".webdev");
  webdv.forEach(web => {
    const value = web.innerHTML;
    const width = web.getAttribute("setwidth");
    const name = web.getAttribute("name");
    const action = `<div class='progress'> <div class='progress-bar bg-dark' role='progressbar' style='width: ${width}' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'> ${width} </div> <div class="skillname">${name}</divs></div>`;
    web.addEventListener("mouseover", function() {
      this.innerHTML = action;
      setTimeout(() => {
        this.innerHTML = value;
      }, 3500);
    });
    web.addEventListener("mouseleave", function() {
      this.innerHTML = value;
    });
  });

  var bcknds = document.querySelectorAll(".backendlang");
  bcknds.forEach(bck => {
    const value = bck.innerHTML;
    const width = bck.getAttribute("setwidth");
    const name = bck.getAttribute("name");
    const action = `<div class='progress'> <div class='progress-bar bg-dark' role='progressbar' style='width: ${width}' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'> ${width} </div> <div class="skillname">${name}</div></div>`;
    bck.addEventListener("mouseover", function() {
      this.innerHTML = action;
      setTimeout(() => {
        this.innerHTML = value;
      }, 3500);
    });
    bck.addEventListener("mouseleave", function() {
      this.innerHTML = value;
    });
  });

  var prsns = document.querySelectorAll(".personalskill");
  prsns.forEach(prn => {
    const value = prn.innerHTML;
    const width = prn.getAttribute("setwidth");
    const name = prn.getAttribute("name");
    const action = `<div class='progress'> <div class='progress-bar bg-dark' role='progressbar' style='width: ${width}' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'> ${width} </div> <div class="skillname">${name}</divs></div>`;
    prn.addEventListener("mouseover", function() {
      this.innerHTML = action;
      setTimeout(() => {
        this.innerHTML = value;
      }, 3500);
    });
    prn.addEventListener("mouseleave", function() {
      this.innerHTML = value;
    });
  });
}

var about = document.querySelector(".abouticon");
about.addEventListener("click", function() {
  var abt = document.querySelector("#abouthead");
  var abtval = abt.getAttribute("val");
  if (abtval == "0") {
    aboutSection();
    abt.setAttribute("val", "1");
  }
});

function color() {
  var color = document.querySelector(".colormode");
  color.addEventListener("click", function() {
    document.querySelector(".frame").style.color = "black";
    //document.querySelector('.frame').style.backgroundColor = "red";

    document.querySelector("#home").style.background = "#d6d6d6";
    document.querySelector("#home").style.transition =
      "background-color 2s linear";

    color.classList.add("darkmode");
    color.innerHTML =
      "<i class='fa fa-moon-o' style=' margin - right: 5 px;'><span style='font-family: LatoLight; font-size:inherit;'> Dark Mode</span> ";
    color.classList.remove("colormode");
    dark();
  });
}

function dark() {
  var dark = document.querySelector(".darkmode");
  dark.addEventListener("click", function() {
    document.querySelector(".frame").style.color = "white";
    //document.querySelector('.frame').style.backgroundColor = "red";
    document.querySelector("#home").style.background = "#272525";
    dark.classList.add("colormode");
    dark.innerHTML =
      "<i class='fa fa-sun-o' style=' margin - right: 5 px;'><span style='font-family: LatoLight; font-size:inherit;'> Color Mode</span> ";
    dark.classList.remove("darkmode");
    color();
  });
}

function crausel() {
  var first = document.querySelector(".first .icon2");
  first.addEventListener("click", function() {
    var imgs = [
      "./images/elog/elog-login.png",
      "./images/elog/elog.png",
      "./images/elog/elog-vendor.png",
      "./images/elog/elog-detail.png"
    ];
    var n = imgs.length;
    var i = 0;
    document.querySelector(
      ".carousel-inner"
    ).innerHTML = ` <div class="carousel-item active"> <img class="d-block w-100 img${i +
      1}" src="${imgs[i]}" alt="First slide"> </div>`;
    for (i = 1; i < n; i++) {
      document.querySelector(".carousel-inner").innerHTML =
        document.querySelector(".carousel-inner").innerHTML +
        ` <div class="carousel-item"><img class="d-block w-100 img${i +
          1}" src="${imgs[i]}" alt="Second slide"> </div>`;
    }
    document.querySelector(".carousel").style.display = "initial";
  });

  var second = document.querySelector(".second .icon2");
  second.addEventListener("click", function() {
    var imgs = [
      "./images/elearn/elearn-login.png",
      "./images/elearn/elearn.png",
      "./images/elearn/elearn2.png",
      "./images/elearn/elearn3.png",
      "./images/elearn/learnc.png",
      "./images/elearn/elearn-exam.png",
      "./images/elearn/elearn-exam2.png",
      "./images/elearn/elearn-exam3.png"
    ];
    var n = imgs.length;
    var i = 0;
    document.querySelector(
      ".carousel-inner"
    ).innerHTML = ` <div class="carousel-item active"> <img class="d-block w-100 img${i +
      1}" src="${imgs[i]}" alt="First slide"> </div>`;
    for (i = 1; i < n; i++) {
      document.querySelector(".carousel-inner").innerHTML =
        document.querySelector(".carousel-inner").innerHTML +
        ` <div class="carousel-item"><img class="d-block w-100 img${i +
          1}" src="${imgs[i]}" alt="Second slide"> </div>`;
    }
    document.querySelector(".carousel").style.display = "initial";
  });

  var third = document.querySelector(".third .icon2");
  third.addEventListener("click", function() {
    var imgs = [
      "./images/fin/fin.png",
      "./images/fin/fin2.png",
      "./images/fin/finchat.png",
      "./images/fin/finchatroom.png"
    ];
    var n = imgs.length;
    var i = 0;
    document.querySelector(
      ".carousel-inner"
    ).innerHTML = ` <div class="carousel-item active"> <img class="d-block w-100 img${i +
      1}" src="${imgs[i]}" alt="First slide"> </div>`;
    for (i = 1; i < n; i++) {
      document.querySelector(".carousel-inner").innerHTML =
        document.querySelector(".carousel-inner").innerHTML +
        ` <div class="carousel-item"><img class="d-block w-100 img${i +
          1}" src="${imgs[i]}" alt="Second slide"> </div>`;
    }
    document.querySelector(".carousel").style.display = "initial";
  });

  var first1 = document.querySelector(".first1 .icon2");
  first1.addEventListener("click", function() {
    var imgs = [
      "./images/pass/pass.png",
      "./images/pass/pass2.png",
      "./images/pass/passabt.png",
      "./images/pass/passpriv.png",
      "./images/pass/passdark.png",
      "./images/pass/passdarkabt.png"
    ];
    var n = imgs.length;
    var i = 0;
    document.querySelector(
      ".carousel-inner"
    ).innerHTML = ` <div class="carousel-item active"> <img class="d-block w-100 img${i +
      1}" src="${imgs[i]}" alt="First slide"> </div>`;
    for (i = 1; i < n; i++) {
      document.querySelector(".carousel-inner").innerHTML =
        document.querySelector(".carousel-inner").innerHTML +
        ` <div class="carousel-item"><img class="d-block w-100 img${i +
          1}" src="${imgs[i]}" alt="Second slide"> </div>`;
    }
    document.querySelector(".carousel").style.display = "initial";
  });

  var close = document.querySelector(".close");
  close.addEventListener("click", function() {
    document.querySelector(".carousel").style.display = "none";
  });
}

var contactico = document.querySelector(".contacticon");
contactico.addEventListener("click", function() {
  document.querySelector(".contact > h2").style.animationName = "contacticon";
  document.querySelector(".contacticons").style.animationName = "contacticon";
  document.querySelector(".contacticons1").style.animationName = "contacticon";
  document.querySelector(".contacticons2").style.animationName = "contacticon";
  document.querySelector(".contacticons3").style.animationName = "contacticon";
  document.querySelector(".copyright").style.animationName = "copyright";
});

function navon() {
  if (document.querySelector(".navbar").style.display == "none") {
    navoff();
  } else {
    document.querySelector(".navbar").style.display = "none";
  }
}

function navoff() {
  document.querySelector(".navbar").style.display = "initial";
  document.querySelector(".navigation").style.left = "0.5%";
}

function load() {
  window.location.href = "#home";
}

init();
color();
animate();
crausel();
skillSection();
