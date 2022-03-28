// 创建myHeading变量 使用querySelector() 函数获取标题的引用，并储存在变量中
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';



// 获取h1的点击事件与匿名函数绑定
// document.querySelector('h1').onclick = function () {
//     alert('Mozilla');
// }

// 创建变量my_h1并获取h1内容存储于my_h1
let my_h1 = document.querySelector('h1');
//获取h1的点击事件与匿名函数绑定
my_h1.onclick = function(){ 
    alert('Hello World !');
}



// 创建变量my_imgage并获取img内容存储于my_image
let my_image = document.querySelector('img');
//获取my_imgage的点击事件与匿名函数绑定
my_image.onclick = function(){
    // 创建变量my_src并获取my_imgage中的src储存于my_src
    let my_src = my_image.getAttribute('src');
    if(my_src === 'images/firefox.jpg'){
        // 路径为图1 将路径改为图2
        my_image.setAttribute('src','images/firefox2.jpg');
    }
    else{
        // 路径为非图1 将路径改为图1
        my_image.setAttribute('src','images/firefox.jpg');
    }
}



// 创建变量并获取按钮和标题的引用
let my_button = document.querySelector('button');
let my_heading = document.querySelector('h1');

// 创建函数设置用户名
function setUserName(){
    // 弹出窗口让用户输入数据并存储于my_name中
    let my_name = prompt('请输入你的名字。');
    // 判断输入是否合法
    // 输入为空 重新输入
    if(!my_name || my_name === null){
        setUserName();
    }
    // 输入合法
    else{
        // localStorage 将数据存在流量器中供后续读取 setItem() 创建数据项并赋值
        localStorage.setItem('name',my_name);
        my_heading.textContent = '欢迎来到Mozilla,'+my_name+'。';    
    }
    
}

// 检测name是否存在过 
// 不存在 调用setUserName()获取用户名
if(!localStorage.getItem('name')){
    setUserName();
}
// 存在 获取已经存在的用户名
else{
    let store_name = localStorage.getItem('name');
    my_heading.textContent = '欢迎来到Mozilla,'+store_name+'。';
}

// 将切换用户按钮与新注册用户名绑定
my_button.onclick = function(){
    setUserName();
}