<?php

use Illuminate\Database\Seeder;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
      $topicNames = [
        'Miljø og ressurser',
        'Arbeidsliv og næringsliv',
        'Skatter og avgifter',
        'Skole og oppvekst',
        'Helse',
        'Generelt',
        'Transport og infrastruktur',
        'Lokalmiljø'
      ];
      foreach ($topicNames as $topicName) {
        DB::table('topics')->insert([
          'name' => $topicName,
        ]);
      }
        
    }
}
