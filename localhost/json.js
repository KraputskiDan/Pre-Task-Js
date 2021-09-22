// создание запроса
function createPost(e){
    e.preventDefault();
   
    let account = {
        user: checkUser(),
        password: checkPassword(),
        email: checkEmail(),
    }
     
    xhr = new XMLHttpRequest(); // инициализируем переменную новым объектом XMLHttpRequest

    xhr.open("POST", "mail.php"); // определяем параметры для запроса 
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // задаем значение заголовка HTTP запроса (указываем, что передаваемое значение на сервер кодируется в кортежах с ключом, разделенных символоми '&', с '=' между ключом и значением)
    xhr.send("x=" + JSON.stringify(account)); // отправляем запрос на сервер

    xhr.onreadystatechange = function() {
    // проверяем состояние запроса и числовой код состояния HTTP ответа
    if (this.readyState == 4 && this.status == 200) {
            document.getElementById("mail").innerHTML = this.responseText // находим элемент по id и изменяем его содержимое значением содержащим ответ сервера на запрос в виде текста
        }
    };
    alert(JSON.stringify(account))
}

// проверка правильности ввода имени пользователя
function checkUser(){
    let pattern = /[A-Z]{1,1}[a-z]{0,}/,
        str = document.querySelector("[name='user']").value;
    if (!pattern.test(str)) {
        alert(document.querySelector("[name='user']").title)
    }
    else {
        console.log(pattern.test(str));
        return str;
    }
}

// проверка правильности ввода пароля
function checkPassword(){
    let pattern = /[0-9a-fA-F]{4,8}/,
        str = document.querySelector("[name='password']").value;
    if (!pattern.test(str)) {
        alert(document.querySelector("[name='password']").title)
    }
    else {
        console.log(pattern.test(str));
        return str;
    }
}

//проверка правильности ввода почты
function checkEmail(){
    let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        str = document.querySelector("[name='email']").value;
    if (!pattern.test(str)) {
        alert(document.querySelector("[name='email']").title)
    }
    else {
        console.log(pattern.test(str));
        return str;
    }
}




