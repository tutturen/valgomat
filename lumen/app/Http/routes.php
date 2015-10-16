<?php

$apiUrl = "api/v1";

$app->get($apiUrl.'/start',       'MainController@start');
$app->post($apiUrl.'/statements', 'MainController@getStatements');
$app->post($apiUrl.'/result',     'MainController@getResult');
