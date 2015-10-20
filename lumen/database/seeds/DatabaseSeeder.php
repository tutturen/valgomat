<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call('PartiesTableSeeder');
        $this->call('TopicsTableSeeder');
        $this->call('StatementTableSeeder');
        $this->call('StatementAgreementTableSeeder');

        Model::reguard();
    }
}
