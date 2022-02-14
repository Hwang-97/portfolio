let i = 0,
    j = 0;

const textArray = ["Development", "Coding", "Algorithm"];
const speed = 110;
target = document.getElementById("textID");

function txtnum() {
    j == textArray.length - 1 ? j = 0 : j++;
}

function type() {
    i < textArray[j].length ? (target.innerHTML += textArray[j].charAt(i), i++, setTimeout(type, speed)) : setTimeout(remove, speed);
}

function remove() {
    0 <= i ? (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, speed)) : (type(), txtnum());
}

type();
//=====================================================================================================================typing ▲
let content2 = document.getElementById('content2ID');
let content3 = document.getElementById('content3ID');
let content4 = document.getElementById('content4ID');

const profilebtn = document.getElementById('profilebtn');
const projectbtn = document.getElementById('projectbtn');
const skillbtn = document.getElementById('skillbtn');

const pageArr = document.getElementsByName('project');

profilebtn.onclick = profileAni;
projectbtn.onclick = projectAni;
skillbtn.onclick = certificateAni;

function profileAni() {
    if (content2.className == 'contentOff' || content2.className=='contentStart'){
        profilebtn.className = 'button_click';
        content2.className = 'contentOn';
    }
}
function projectAni() {
    if (content3.className == 'contentOff' || content3.className=='contentStart'){
        projectbtn.className = 'button_click';
        content3.className = 'contentOn';
        pageArr[0].style.opacity=1;
    }
}
function certificateAni() {
    if (content4.className == 'contentOff' || content4.className=='contentStart'){
        skillbtn.className = 'button_click';
        content4.className = 'contentOn';
    }
}
//=====================================================================================================================pageON ▲
const cencleButton = document.getElementsByClassName('cencle');
cencleButton[0].onclick = contentCencle1;
cencleButton[1].onclick = contentCencle2;
cencleButton[2].onclick = contentCencle3;

function contentCencle1(){
    profilebtn.className = 'button';
    content2.className = 'contentOff';
}
function contentCencle2(){
    projectbtn.className = 'button';
    content3.className = 'contentOff';
    resetProjectPage();
    pageArr[0].style.opacity=0;
}
function contentCencle3(){
    skillbtn.className = 'button';
    content4.className = 'contentOff';
}
//====================================================================================================================pageOFF ▲
const left = document.getElementById("leftBtn");
const right = document.getElementById('rightBtn');
const maxPage = pageArr.length;
const pagePreName = "#project";
let page=0;

const resetProjectPage = function (){
    for(let i =1 ; i<maxPage ; i++){
        pageArr[i].style.display="none";
    }
    page=0;
    pageArr[0].style.display="";
}
resetProjectPage();

left.onclick = function(){
    if(page!=0){
        if(page!=maxPage){
            pageArr[page].style.display="none";
            page--;
        }
        pageArr[page].style.display="";
    }else{
        page=0;
        alert("첫 페이지 입니다.");
    }
};
right.onclick = function(){
    if(page<maxPage-1){
        pageArr[page].style.display="none";
        page++;
        pageArr[page].style.display="";
    }else{
        page=maxPage-1;
        alert("마지막 페이지 입니다.");
    }
};
// ========================================================================================================================
const gitHubLink = document.getElementById('gitHubLink');
const blogeLink = document.getElementById('blogeLink');
const contactLink = document.getElementById('contactLinkId');

const contactCard = document.getElementById('contactCard');

gitHubLink.onclick = function(){
    window.location.href="https://github.com/Hwang-97";
};
blogeLink.onclick = function(){
    window.location.href="https://beginner-programmer.tistory.com/";
};
contactLink.onclick = function(){
    if(contactCard.className == 'contactCardOff'){
        contactLink.className='contactLink_click';
        contactCard.className = 'contactCardOn';
    }else if(contactCard.className == 'contactCardOn'){
        contactCard.className = 'contactCardOff';
        contactLink.className='contactLink';
    }
}
// ==========================================================================================================================
const project1_Link = document.getElementById('project1_Link');
const project2_Link = document.getElementById('project2_Link');
const project3_Link = document.getElementById('project3_Link');
const project4_Link = document.getElementById('project4_Link');
const project6_Link = document.getElementById('project6_Link');
const project7_Link = document.getElementById('project7_Link');
const project8_Link = document.getElementById('project8_Link');
const project9_Link = document.getElementById('project9_Link');
const project10_Link = document.getElementById('project10_Link');


project1_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/ToyProject_Calculator";
}
project2_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/toyProject_team";
}
project3_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/Java_5team_Project";
}
project4_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/Academy_Management_Program-Team";
}
project6_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/Goguma";
}
project7_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/ChatbotProject";
}
project8_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/portfolio";
}
project9_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/Hwang-97/CopyTodayFile";
}
project10_Link.onclick=function(){
    window.open("about:blank").location.href="https://github.com/uplusm2/Ozone";
}