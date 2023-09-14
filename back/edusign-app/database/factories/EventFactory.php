<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    private $shuffledElements;

    public function __construct()
    {
        parent::__construct();
        // Mélangez les éléments une seule fois
        $this->shuffledElements = $this->faker->randomElements(['Cours back', 'Cours front', 'Cours SQL'], 3, false);
    }

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $eventName = array_shift($this->shuffledElements);

        return [
            'name' => $eventName,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
