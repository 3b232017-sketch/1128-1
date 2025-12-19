var sum = function (a, b) {
    return a + b
};

//alert(sum(10, 20));
//window.alert(sum(10, 20));

/*function greet() {
    const name = document.getElementById("username").value;
    console.log(name);
}

function greetUser(){
    const name = document.getElementById("username").value;
    document.getElementById("resultUser").textContent = name + "安安你好!";
}*/

function getUserName() {
    const name = document.getElementById("userName").value;
    //...
    //...
    //...
    //呼叫執行事件函數
    showMessage(name);
}

function showMessage(name) {
    document.getElementById("resultUser").textContent = name + "安安你好!";
}
