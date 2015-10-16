<?php

$apiUrl = "api/v1";

$app->get($apiUrl.'/start',          'MainController@start');
$app->post($apiUrl.'api/statements', 'MainController@getStatements');
$app->post($apiUrl.'api/result',     'MainController@getResult');
