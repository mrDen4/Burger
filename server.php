<?php 

    $name = $_POST['name'];
    $telephone = $_POST['telephon'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $housing = $_POST['housing'];
    $apartment = $_POST['apartment'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $buy = $_POST['buy'];
    

    $disturb = $_POST['disturb']; // 1 or null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';
    

    $mail_message = '
    <html>
    <head>
        <title>Ответ от сервера</title>
    </head>
    <body>
        <h1>Данные клиента</h1>
        <ul>
            <li> Имя: ' . $name . ' </li>
            <li> Телефон: ' . $telephone . ' </li>
            <li> Улица : ' . $street . ' </li>
            <li> Дом : ' . $house . ' </li>
            <li> Корпус : ' . $housing . ' </li>
            <li> Квартира : ' . $apartment . ' </li>
            <li> Этаж : ' . $floor . ' </li>
            <li> Комментарий : ' . $comment . ' </li>
            <li> Как оплачиваем? : ' . $buy . ' </li>
            <li> Не перезванивать? : ' . $disturb . ' </li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@burger.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('mr.den.saint@yandex.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = 'ok';
        $data['mes'] = 'Сообщение отправлено';
    }else{
        $data['status'] = 'no';
        $data['mes'] = 'Проблемы с формой';
    }

    echo json_encode($data);
?>