<?php
namespace Garage;

trait Displayable {
    public function displayInfo() {
        echo $this;
    }
}
