btns = document.getElementsByClassName("card");
//console.log(btns);

var turn = 1;

popup = document.getElementsByClassName("model-box")[0]; // 题目信息弹窗

popup_h2 = popup.children[1];
popup_h3 = popup.children[2];

content_dist = {
    "1-1": "Credits AT FC",
    "1-2": "尊师 miss+bad不大于6",
    "1-3": "Bonus time 114514",
    "1-4": "12及以上 对手调设置AP",
    "1-5": "Break Over AT FC",

    "2-1": "键最大15 FC",
    "2-2": "321 acc大于等于99.30%",
    "2-3": "社区3dan pass",
    "2-4": "retribution acc大于等于99.30%",
    "2-5": "15及以上 三人接力FC",

    "3-1": "horizon blue FC",
    "3-2": "Fuli Auto Buster 双人AP",
    "3-3": "狂喜兰舞AT 不转板FC",
    "3-4": "ESM Legacy FC",
    "3-5": "Crave Wave AP",

    "4-1": "clock paradox AP",
    "4-2": "钟 acc大于等于99.30%",
    "4-3": "burn无多押提示FC",
    "4-4": "时停acc大于等于99.30%",
    "4-5": "15 拇指 FC",

    "5-1": "Stasis AT acc大于等于99.00%",
    "5-2": "MARENOL 114514",
    "5-3": "microwave AP",
    "5-4": "开心病 1gFC",
    "5-5": "混乱 颜色反转FC"
};

cur_block = 0;

for(let i=0;i<25;i++) {
    btns[i].addEventListener("click", function () {
        popup.style.opacity = 1;
        popup.style["pointer-events"] = "all";

        text = btns[i].children[1].children[0].innerHTML;
        popup_h2.innerHTML = content_dist[text];

        cur_block = (Number(text[0]) - 1) * 5  + Number(text[2]) - 1;
    })
}

popup_btns_yes = popup.children[3].children[0]; // 弹出页面两个确认挑战是否成功的按钮
popup_btns_no = popup.children[3].children[1];

popup_btns_yes.addEventListener("click", function(){
    popup.style.opacity = 0;
    popup.style["pointer-events"] = "none";

    // 显示题目具体内容
    text = btns[cur_block].children[1].children[0].innerHTML;
    btns[cur_block].children[1].style.padding = "16px";
    heading = btns[cur_block].children[1].children[1];
    heading.innerHTML = content_dist[text];
    heading.style["font-size"] = "1rem";
    heading.style["padding-left"] = "16px";

    if(turn) {
        btns[cur_block].children[0].setAttribute('style',"background-image: url(images/dingzhen.jpg)");
    }
    else {
        btns[cur_block].children[0].setAttribute('style',"background-image: url(images/menchan.jpg)");
    }
    turn = 1 - turn;
})

popup_btns_no.addEventListener("click", function(){
    // 显示题目具体内容
    text = btns[cur_block].children[1].children[0].innerHTML;
    btns[cur_block].children[1].style.padding = "16px";
    heading = btns[cur_block].children[1].children[1];
    heading.innerHTML = content_dist[text];
    heading.style["font-size"] = "1rem";
    heading.style["padding-left"] = "16px";

    popup.style.opacity = 0;
    popup.style["pointer-events"] = "none";
})