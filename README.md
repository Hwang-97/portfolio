<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #contents{
            margin-left: auto;
            margin-right: auto; 
            width: 500px;
            height: 900px;
        }
        #tbl{
            border:10px solid black;
            width: 500px;
            height: 600px;
        }
        .ball{
            border:7px solid black;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-left: 15px;
            float: left;
            animation-name: key1;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: ease-in;
        }
        @keyframes key1{
            from{
                transform: translate(0px,0px);
            }
            to{
                transform: translate(0px,550px);
            }
        }
        #ball1{
            animation-duration: 1s;
            background-color: red;
        }
        #ball2{
            background-color: orange;
            animation-duration: 0.5s;
        }
        #ball3{
            background-color: yellow;
            animation-duration: 0.7s;
        }
        #ball4{
            background-color: green;
            animation-duration: 1.1s;
        }
        #ball5{
            background-color: blue;
            animation-duration: 0.9s;
        }
        #ball6{
            background-color: indigo;
            animation-duration: 1.3s;
        }
        #ball7{
            background-color: violet;
            animation-duration: 1.2s;
        }
    </style>
</head>
<body>
    <div id ="main">
        <div id= "contents">
            <h1>animation + keyframe</h1>
            <p>▒공 튀기시오.</p>
            <div id = "tbl">
                <div id="ball1" class="ball"></div>
                <div id="ball2" class="ball"></div>
                <div id="ball3" class="ball"></div>
                <div id="ball4" class="ball"></div>
                <div id="ball5" class="ball"></div>
                <div id="ball6" class="ball"></div>
                <div id="ball7" class="ball"></div>
            </div>
        </div>
    </div>
</body>
</html>
