<?php

echo "<section class=answerPhp>";

// декодирование json
$obj = json_decode($_POST["x"], false);

$email_str = $obj->email;
$user_str = $obj->user;
$password_str = $obj->password;

// проверка на правильность прищедних данных
if(	preg_match('/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/', $email_str) && 
	preg_match('/[A-Z]{1,1}[a-z]{0,}/', $user_str) && 
	preg_match('/[0-9a-fA-F]{4,8}/', $password_str)){

	echo "<h3> Результат выполнения запроса с обработкой в mail.php</h3>";

	echo "Значение передаваемое формой:<br>";

	echo json_encode($obj);

	echo "<br>Декодируемая строка JSON<br>";

	foreach ($obj as $key => $value) {
	 	echo "$key = $value<br>";
	}

} else {
	
    echo "Была добущена ошибка в заполнении формы";
}

 echo "</section>";

?>
