<?php

use Illuminate\Database\Seeder;

class StatementTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Models\Statement::class, 20)->create()->make();
    }
}
