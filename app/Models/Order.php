<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /** @var array */
    protected $fillable = ['product_id', 'quantity'];

    /** @var array */
    protected $casts = [
        'created_at' => 'datetime:H:i:s',
    ];

    /**
     * Products.
     *
     * @param void
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(\App\Models\Product::class);
    }

    use HasFactory;
}
