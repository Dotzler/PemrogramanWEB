<?php
namespace Garage;

require_once 'VehicleType.php';
require_once 'BrandTrait.php';
require_once 'Displayable.php';

class Car extends VehicleType {
    use BrandTrait, Displayable;

    private $name;
    private $manufactureYear;

    public function __construct($name, $brand, $typeName, $manufactureYear) {
        parent::__construct($typeName);
        $this->name = $name;
        $this->setBrand($brand);
        $this->manufactureYear = $manufactureYear;
    }

    public function getTypeInfo() {
        return "Type: $this->typeName";
    }

    public function getCarInfo() {
        return "Name: $this->name, Brand: " . $this->getBrand() . ", Year: $this->manufactureYear";
    }

    public function __toString() {
        return $this->getCarInfo() . ", " . $this->getTypeInfo();
    }
}
