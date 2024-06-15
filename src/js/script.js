var nav = document.getElementById("nav");
var navDiv = document.getElementById("navDiv");

function togglemenu() {
    // Toggle the menu by changing its right position
    if (nav.style.right === "0px") {
        closemenu();
    } else {
        openmenu();
    }
}

function openmenu() {
    const nav = document.getElementById('nav');
    const navDiv = document.getElementById('navDiv');
    if (nav && navDiv) {
        nav.style.display = "block";
        // navDiv.style.height = "";
    }
}

function closemenu() {
    nav.style.display = "none";
}

var oopNav = document.getElementById("oopNav");

function openAssignment() {
    oopNav.style.zIndex = "200";
}

function closeAssignment(){
    oopNav.style.display = "none";
}

var itNav = document.getElementById("itNav");

function openItAssignment(){
    itNav.style.zIndex ="200";
}

var ormNav = document.getElementById("ormNav");

function openOrmAssignment(){
    ormNav.style.zIndex="200";
}

var seNav = document.getElementById("seNav");

function openSeAssignment(){
    seNav.style.zIndex="200";
}

document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('p1').style.display = 'none';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('p1').style.display = 'block';
});

document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('p2').style.display = 'none';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('p2').style.display = 'block';
});

document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('ppH1').style.display = 'block';
});
document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('ppH2').style.display = 'block';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('ppH1').style.display = 'none';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('ppH2').style.display = 'none';
});

document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('p1st').style.display = 'none';
});

document.getElementById('profile').addEventListener('mouseover', function() {
    document.getElementById('p2st').style.display = 'block';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('p1st').style.display = 'block';
});

document.getElementById('profile').addEventListener('mouseout', function() {
    document.getElementById('p2st').style.display = 'none';
});