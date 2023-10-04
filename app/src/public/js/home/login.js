"use strict";

// ejs에서 연결되어 쓰이는 script파일
// 프론트 단에서 작동하는 js파일이라고 생각하면 됨.

const id = document.querySelector("#id"),
    pw = document.querySelector('#pw'),
    loginbtn = document.querySelector("button");

loginbtn.addEventListener('click', login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value
    };

    fetch("/login", {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).
    then((res) => res.json()).
    then((res) => {
        if (res.success){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error(("로그인 중 에러 발생"));
    });


}

