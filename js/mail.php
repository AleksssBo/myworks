<?php

$recepient = "vikulin2021@mail.ru";
$sitename = "Сайт портфолио";

$name = trim($_GET["name"]);
$mail = trim($_GET["mail"]);
$text = trim($_GET["text"]);
$message = "Имя: $name \nE-mail: $mail \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");