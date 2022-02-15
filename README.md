🙆‍♂️Portfolio🙆‍ 

👉https://hwang-97.github.io/portfolio/portfolio.html

![image (2)](https://user-images.githubusercontent.com/85034286/153595977-f79bb8bc-3dad-4748-96ec-dfb97a8cf9a6.png)

>  HTML , CSS , JavaScript를 활용하여 제작한 포트폴리오 입니다. <br />
>  수업종료 후 약간의 시간을 투자하여 7일간 진행된 프로젝트 입니다. 현재 계속해서 업그레이드 중입니다. <br />

<br />

# 📌 Table Of Contents
* [📖 Introduction](#-introduction)
* [🔎 Detail](#-detail)
* [💡 Review](#-review)

<br />
<br />
<br />


# 📖 Introduction
### 1. 프로젝트 개요
*  HTML , CSS ,JavaSctipt를 사용해서 제작한 첫번째 포트폴리오 입니다. 원페이지로 제작하였습니다.
<br />

### 2. 개발 환경
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
* 해당 프로젝트는 HTML , CSS ,JavaSctipt를 사용해서 진행하였습니다.
* 개발 도구로는 Eclipse와 Tomcat을 사용하였습니다.
* GitHub를 사용해서 형상관리 중입니다.
<br />

### 3. 프로젝트 내용
![ezgif-7-ba6b53c840](https://user-images.githubusercontent.com/85034286/153598944-58b870c5-6f4b-4aeb-a52e-c6162f756024.gif)
#### 3-1. 프로필
* ![image](https://user-images.githubusercontent.com/85034286/153597827-9757d305-5260-4c5e-bc6b-940b973913dc.png) 
* 팝업창처럼 내려오게 Z 인덱스로 구현하였습니다. 개인 프로필을 보여줍니다.

#### 3-2. 프로젝트 리스트
* ![image](https://user-images.githubusercontent.com/85034286/153598127-00030c77-53d6-401e-b35f-03df27afc7a6.png)
* 모든 프로젝트를 나타냅니다 . 화살표는 누르면 다른 프로젝트를 볼 수 있습니다.

<br />
<br />
<br />


# 🔎 Detail
### 1. 주요 코드
* 타이핑 효과를 나타낸 코드이며 3항 연산자와 재귀를 주 기술로 사용했습니다.
    ```javascript
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
    ```
* Class 명명법과 구조만 지킨다면 프로젝트 페이지를 N장 추가해도 깨지지 않게 구현하였습니다.
    ```css
   .project_row{
    height: 100%;
    width: 100%;
    display: block;
    }
    .project_row .project_img{
        padding-top: 4%;
        width: 60%;
        height: 75%;
        float: left;
    }
    .project_row .project_img>img{
        height: 100%;
        width: 100%;
    }
    .project_row .project_contents{
        margin-top: 0px;
        padding-left: 1%;
        width: 39%;
        height: 85%;
        float: left;
    }
    .project_row .project_contents::after{
        clear: left;
    }
    .project_row .project_contents img{
        width: 8%;
    }
    ```
        
    * 제작 당시 javascript html css 만 알고 있어서 페이징효과를 아래 코드 처럼 나타 내었고 
    * Class 명명법만 지킨다면 프로젝트를 몇개 추가하든지 동작이 가능하게 설계하였습니다.
   
    ```javascript
    const pageArr = document.getElementsByName('project');
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
    ```
    
<br />
<br />

# 💡 Review
### 1. 후기
* 해당 페이지는 순수 JavaScript , Css , HTML 를 사용하였으며, 원페이지와 팝업 형태로 구현할려고 하니 어려움이 많았습니다.
* 하지만 편한 툴을 사용하지 않고 직접 기능을 상상하며 구현해 보니 기초 지식이 탄탄해 지는 계기가 되었습니다.

<br />
<br />

### 2. 개선 요구 사항
* JQuery와 BootStrap 등을 사용하면 더욱 완성도 있는 페이지를 제작할 수 있을것 같고 , 내용 역시 계속해서 업데이트 되어야 합니다.

<br />
<br />
<br />
