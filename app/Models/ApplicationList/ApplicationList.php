<?php

namespace App\Models\ApplicationList;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicationList extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Change Created at format
    public function getCreatedAtAttribute($date)
    {
        $convertDate = strtotime($date);

        return date('Y-m-d | H:i:s', $convertDate);
    }
}
