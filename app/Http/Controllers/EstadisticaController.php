<?php

namespace App\Http\Controllers;

use App\Classes\MPDFClass;
use App\Models\LandingForm;
use App\Models\Sms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class EstadisticaController extends Controller
{
    public function records(Request $request)
    {
        $sms = Sms::query();
        $records = [];
        $type = $request->type;
        $year = substr($request->year, 0, 4);
        if ($type == 'year' || $type == 'month' || $type == 'day') {
            $sms = $sms->where(DB::raw('YEAR(created_at)'), $year);
            if ($type == 'year') {
                $sms = $sms->selectRaw("MONTH(created_at) AS text, COUNT(created_at) AS value")->groupByRaw("text");
            }
        }
        if ($type == 'month' || $type == 'day') {
            $sms = $sms->where(DB::raw('MONTH(created_at)'), $request->month);
            if ($type == 'month') {
                $sms = $sms->selectRaw("DAY(created_at) AS text, COUNT(created_at) AS value")->groupByRaw("text");
            }
        }
        if ($type == 'day') {
            $sms = $sms->where(DB::raw('DAY(created_at)'), $request->day);
            if ($type == 'day') {
                $sms = $sms->selectRaw("HOUR(created_at) AS text, COUNT(created_at) AS value")->groupByRaw("text");
            }
        }
        $records[] = $sms->get();
        $records[] = $sms->where('status', 'ENTREGADO')->get();
        $records[] = $sms->where('status', '!=', 'ENTREGADO')->get();

        return compact('records');
    }
}
