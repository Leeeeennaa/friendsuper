function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date()
    out.innerHTML = today.toLocaleString('ru-RU');

    let out1 = document.getElementById('current-date1');
    let today1 = new Date()
    out1.innerHTML = today.toLocaleString('ru-SA');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date()
    out2.innerHTML = today.toLocaleString('ar-EG');

    let out3 = document.getElementById('current-date3');
    let today3 = new Date()
    out3.innerHTML = today.toLocaleString('el-GR');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date()
    out4.innerHTML = today.toLocaleString('en-PK');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date()
    out5.innerHTML = today.toLocaleString('zh-CN');
}

