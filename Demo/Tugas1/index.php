<?php
require_once 'Garage/Car.php';

use Garage\Car;

$cars = [
    new Car("Model S", "Tesla", "Sedan", 2020),
    new Car("Mustang", "Ford", "Sports Car", 2018),
    new Car("Land Cruicer", "Toyota", "SUV", 2024),
    new Car("F32", "BMW", "Sedan", 2018)
];

foreach ($cars as $car) {
    $car->displayInfo();
    echo "<br>";
}