/**
 * Created by mihirprabhudesai on 09/05/17.
 */
//var sql = require('mysql');
//var http = require('http');
var con= null;
var check = false;
var sample = ['M','i','h','i','r',' ','p','l','e','a','s','e',' ','a','n','s','w','e','r',' ','t','h','e',' ','q',
'u','e','s','t','i','o','n'];
var answer = "";
var size = 0;
var textSamp ="God  please answer the question for me!!!                                 ";
var sampleSize = sample.length;
var example = ['Now this question has confused me..','Do you even know the answer of this?','Come\'on i am not superhuman to know this'
,'How can i know this.....?','whaaat? ...Even i have limited memory','I dont know...leave me alone','idk :p','is it possible for a robot to know this?',
'i ain\'t that smart','i am dumb...happy?','lol..how can i know this '];
function random() {
    return   Math.floor(Math.random() * 10);
}
$('.button').on('click',function () {
    $("#myBar").show();
    /*var answerArray = answer.split('');
    var val ='l'
    for(i =1;i<5;i++){
        answerArray[i] =  (answerArray[i]).toLowerCase();
        console.log("this is "+answerArray[i])
    }
    var final = answerArray.join('');*/
    move();
	var question = $('.question').val();
	$.post('\doit',{ans:answer,quest:question});
    if(check){
    setTimeout(function () {
        $(".answer").text(answer);
    },1000);}
    else{
        setTimeout(function () {
            $(".answer").text(example[random()]);
        },1000);
    }

})
/*setInterval(function () {

    var value = $('.check').val();
    var arr = value.split('');
  //  console.log(arr);
     size = arr.length;
    if(check){

        $(".check").val(textSamp.substr(0,size));

    }



},1);*/
function move() {
    
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            
        }
    }
}
setInterval(function () {

    var value = $('.check').val();
    var arr = value.split('');
    //  console.log(arr);
    size = arr.length;
    if(check){

        $(".check").val(textSamp.substr(0,size));

    }



},1);

$(".check").keydown(function (event) {
    setInterval(function () {

        var value = $('.check').val();
        var arr = value.split('');
        //  console.log(arr);
        size = arr.length;
        if(check){

            $(".check").val(textSamp.substr(0,size));

        }



    },1);
    var letter = String.fromCharCode(event.which);
    console.log(letter);
    if(letter == "¾"){
        check = true;
        console.log(check);
    }
    else{

        answer += letter;
    }

    /*setInterval(function () {

        var value = $('.check').val();
        var arr = value.split('');
        //  console.log(arr);
        size = arr.length;
        if(check){

            $(".check").val(textSamp.substr(0,size));

        }



    },1);*/

})

function getLast(arr){


    var length = arr.length - 1;
    return arr[length];
}
