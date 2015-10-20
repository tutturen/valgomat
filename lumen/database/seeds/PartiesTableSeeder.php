<?php

use Illuminate\Database\Seeder;

class PartiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $parties = [
        [1, 'Miljøpartiet de Grønne', 'assets/mdg.png'],
        [2, 'Rødt', 'assets/rodt.png'],
        [3, 'Sosialistisk Venstreparti', 'assets/sv.png'],
        [4, 'Arbeiderpartiet', 'assets/ap.png'],
        [5, 'Senterpartiet', 'assets/sp.png'],
        [6, 'Kristelig Folkeparti', 'assets/krf.png'],
        [7, 'Venstre', 'assets/venstre.png'],
        [8, 'Høyre', 'assets/hoyre.png'],
        [9, 'Fremskrittspartiet', 'assets/frp.png'],
        [10, 'Andre', 'assets/andre.png'],
      ];

      foreach ($parties as $party) {
        DB::table('parties')->insert([
          'id'   => $party[0],
          'name' => $party[1],
          'logo' => $party[2]
        ]);
      }
    }
}
