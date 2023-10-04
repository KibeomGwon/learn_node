"use strict";

// control파일, 여기서 아마 비즈니스 로직이 수행 됨.

const output = {

    hello : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
}

const users = {
    id : ["user1", "user2", "user3"],
    pw : ["1111", "2222", "3333"],
};

const process = {
    login : (req,res)=>{
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if( users.pw[idx] === pw ){
                return res.json({
                    success :true,
                });
            }
            return res.json({
                success : false,
                msg : "로그인에 실패했습니다."
            });
        }
    },
}


module.exports = {
    output,
    process
};

// 오브젝트 key : value 형태에서 키 값만 적어주면
// 키 값의 이름에 해당되는 value값을 자동으로 할당된다.
// { output } === { output : output }
