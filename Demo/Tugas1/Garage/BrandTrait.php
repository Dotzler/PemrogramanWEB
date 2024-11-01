<?php
namespace Garage;

trait BrandTrait {
    private $brand;

    public function setBrand($brand) {
        $this->brand = $brand;
    }

    public function getBrand() {
        return $this->brand;
    }
}
