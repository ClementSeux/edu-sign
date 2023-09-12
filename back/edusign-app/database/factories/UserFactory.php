<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'login' => 'f.name',
            'firstname' => $this->faker->firstName(),
            'name' => $this->faker->name(),
        ];
    }



}
