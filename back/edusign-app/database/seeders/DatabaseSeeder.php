<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        \App\Models\User::factory()->create([
            'login' => 'b.durand',
            'firstname' => 'bob',
            'name' => 'durand',
            'updated_at' => now(),
            'created_at' => now(),
        ]);
    }
}
