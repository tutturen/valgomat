<?php

$factory->define(App\Models\User::class, function ($faker) {
  return [
      'gender' => rand(1, 2),
      'ageGroup' => rand(1, 8),
      'partyLastElection' => rand(1, 11),
      'municipality' => rand(1, 428)
    ];
});

$factory->define(App\Models\Statement::class, function ($faker) {
    return [
      'text' => $faker->sentence(10),
      'topicId' => rand(1, 8)
    ];
});

$factory->define(App\Models\Topic::class, function($faker) {
  return [
    'name' => $faker->words(2)
  ];
});
