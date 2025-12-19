var user = {
    name: 'xuan',
    age: '20',
    showMsg: function () {
        alert("hi ,我是" + this.name + ",今年" + this.age + "歲");
    }
};

//user.name = "某某";
//user.age = "8";
document.getElementById("name").placeholder = user.name;
document.getElementById("age").placeholder = user.age;
document.getElementById("user").innerHTML = user.name + "<br>" + user.age + "歲</br>";

//alert(user.name+user.age)

var score = {
    chinese: 100,
    english: 88,
    math: 89,
    showMsg: function () {
        alert("國文" + this.chinese + "英文" + this.english + "數學" + this.math);
    }
};