<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{   
    //define properti
    public $status;
    public $message;
    public $resource;

    /**
     * __construct
     * 
     * @param mixed $status
     * @param mixed $message
     * @param mixed $recource
     * @return void
     */
    public function __construct($status, $message, $recource)
    {
        parent::__construct($recource);
        $this->status = $status;
        $this->message = $message;
    }

    /**
     * toArray
     * 
     * @param mixed $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'success' => $this->status,
            'message' => $this->message,
            'data'    => $this->resource
        ];
    }

}
