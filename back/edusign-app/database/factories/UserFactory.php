<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
                'firstname' => $this->withFaker()->firstName(),
                'name' => $this->withFaker()->lastName(),
                'status' => $this->withFaker()->randomElement(['enseignant', 'eleve']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }


}
