<?php
namespace Garage;

abstract class VehicleType {
    protected $typeName;

    public function __construct($typeName) {
        $this->typeName = $typeName;
    }

    abstract public function getTypeInfo();
}
