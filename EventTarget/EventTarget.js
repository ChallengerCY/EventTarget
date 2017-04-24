/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){

    $("body").on("click",body1);
    $("div").on("click",div1);
    $("div").on("click",div2);

})

function  body1(event){
    conlog(event);

}

function div1(event){
    conlog(event);
   /* event.stopPropagation();*/  /*阻止父级事件*/
    event.stopImmediatePropagation(); /*阻止除了当前事件以外的其他事件*/
}

function div2(event){
    conlog(event);

}

function conlog(event){
    console.log(event);
}