๐โโ๏ธPortfolio๐โ 

๐https://hwang-97.github.io/portfolio/portfolio.html

![image (2)](https://user-images.githubusercontent.com/85034286/153595977-f79bb8bc-3dad-4748-96ec-dfb97a8cf9a6.png)

>  HTML , CSS , JavaScript๋ฅผ ํ์ฉํ์ฌ ์ ์ํ ํฌํธํด๋ฆฌ์ค ์๋๋ค. <br />
>  ์์์ข๋ฃ ํ ์ฝ๊ฐ์ ์๊ฐ์ ํฌ์ํ์ฌ 7์ผ๊ฐ ์งํ๋ ํ๋ก์ ํธ ์๋๋ค. ํ์ฌ ๊ณ์ํด์ ์๊ทธ๋ ์ด๋ ์ค์๋๋ค. <br />

<br />

# ๐ Table Of Contents
* [๐ Introduction](#-introduction)
* [๐ Detail](#-detail)
* [๐ก Review](#-review)

<br />
<br />
<br />


# ๐ Introduction
### 1. ํ๋ก์ ํธ ๊ฐ์
*  HTML , CSS ,JavaSctipt๋ฅผ ์ฌ์ฉํด์ ์ ์ํ ์ฒซ๋ฒ์งธ ํฌํธํด๋ฆฌ์ค ์๋๋ค. ์ํ์ด์ง๋ก ์ ์ํ์์ต๋๋ค.
<br />

### 2. ๊ฐ๋ฐ ํ๊ฒฝ
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
* ํด๋น ํ๋ก์ ํธ๋ HTML , CSS ,JavaSctipt๋ฅผ ์ฌ์ฉํด์ ์งํํ์์ต๋๋ค.
* ๊ฐ๋ฐ ๋๊ตฌ๋ก๋ Eclipse์ Tomcat์ ์ฌ์ฉํ์์ต๋๋ค.
* GitHub๋ฅผ ์ฌ์ฉํด์ ํ์๊ด๋ฆฌ ์ค์๋๋ค.
<br />


### 3. ํ๋ก์ ํธ ๋ด์ฉ
![ezgif-7-ba6b53c840](https://user-images.githubusercontent.com/85034286/153598944-58b870c5-6f4b-4aeb-a52e-c6162f756024.gif)
#### 3-1. ํ๋กํ
* ![image](https://user-images.githubusercontent.com/85034286/153597827-9757d305-5260-4c5e-bc6b-940b973913dc.png) 
* ํ์์ฐฝ์ฒ๋ผ ๋ด๋ ค์ค๊ฒ Z ์ธ๋ฑ์ค๋ก ๊ตฌํํ์์ต๋๋ค. ๊ฐ์ธ ํ๋กํ์ ๋ณด์ฌ์ค๋๋ค.

#### 3-2. ํ๋ก์ ํธ ๋ฆฌ์คํธ
* ![image](https://user-images.githubusercontent.com/85034286/153598127-00030c77-53d6-401e-b35f-03df27afc7a6.png)
* ๋ชจ๋  ํ๋ก์ ํธ๋ฅผ ๋ํ๋๋๋ค . ํ์ดํ๋ ๋๋ฅด๋ฉด ๋ค๋ฅธ ํ๋ก์ ํธ๋ฅผ ๋ณผ ์ ์์ต๋๋ค.

<br />
<br />
<br />


# ๐ Detail
### 1. ์ฃผ์ ์ฝ๋
* ํ์ดํ ํจ๊ณผ๋ฅผ ๋ํ๋ธ ์ฝ๋์ด๋ฉฐ 3ํญ ์ฐ์ฐ์์ ์ฌ๊ท๋ฅผ ์ฃผ ๊ธฐ์ ๋ก ์ฌ์ฉํ์ต๋๋ค.
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
* Class ๋ช๋ช๋ฒ๊ณผ ๊ตฌ์กฐ๋ง ์งํจ๋ค๋ฉด ํ๋ก์ ํธ ํ์ด์ง๋ฅผ N์ฅ ์ถ๊ฐํด๋ ๊นจ์ง์ง ์๊ฒ ๊ตฌํํ์์ต๋๋ค.
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
        
    * ์ ์ ๋น์ javascript html css ๋ง ์๊ณ  ์์ด์ ํ์ด์งํจ๊ณผ๋ฅผ ์๋ ์ฝ๋ ์ฒ๋ผ ๋ํ ๋ด์๊ณ  
    * Class ๋ช๋ช๋ฒ๋ง ์งํจ๋ค๋ฉด ํ๋ก์ ํธ๋ฅผ ๋ช๊ฐ ์ถ๊ฐํ๋ ์ง ๋์์ด ๊ฐ๋ฅํ๊ฒ ์ค๊ณํ์์ต๋๋ค.
   
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
    //====================================================================================================================pageOFF โฒ
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
            alert("์ฒซ ํ์ด์ง ์๋๋ค.");
        }
    };
    right.onclick = function(){
        if(page<maxPage-1){
            pageArr[page].style.display="none";
            page++;
            pageArr[page].style.display="";
        }else{
            page=maxPage-1;
            alert("๋ง์ง๋ง ํ์ด์ง ์๋๋ค.");
        }
    };
    ```
    
<br />
<br />

# ๐ก Review
### 1. ํ๊ธฐ
* ํด๋น ํ์ด์ง๋ ์์ JavaScript , Css , HTML ๋ฅผ ์ฌ์ฉํ์์ผ๋ฉฐ, ์ํ์ด์ง์ ํ์ ํํ๋ก ๊ตฌํํ ๋ ค๊ณ  ํ๋ ์ด๋ ค์์ด ๋ง์์ต๋๋ค.
* ํ์ง๋ง ํธํ ํด์ ์ฌ์ฉํ์ง ์๊ณ  ์ง์  ๊ธฐ๋ฅ์ ์์ํ๋ฉฐ ๊ตฌํํด ๋ณด๋ ๊ธฐ์ด ์ง์์ด ํํํด ์ง๋ ๊ณ๊ธฐ๊ฐ ๋์์ต๋๋ค.

<br />
<br />

### 2. ๊ฐ์  ์๊ตฌ ์ฌํญ
* JQuery์ BootStrap ๋ฑ์ ์ฌ์ฉํ๋ฉด ๋์ฑ ์์ฑ๋ ์๋ ํ์ด์ง๋ฅผ ์ ์ํ  ์ ์์๊ฒ ๊ฐ๊ณ  , ๋ด์ฉ ์ญ์ ๊ณ์ํด์ ์๋ฐ์ดํธ ๋์ด์ผ ํฉ๋๋ค.

<br />
<br />
<br />
