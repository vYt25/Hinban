<?php

namespace App\Http\Controllers;

use App\Unit;

use App\User;
use App\Color;
use App\Draft;
use App\Country;
use App\Process;
use App\Category;
use App\Division;
use App\Material;
use App\RequestKind;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function rndJapaneseAdvisors()
    {
        return User::rnd_ja();
    }


    public function index()
    {
        return view('home');
    }

    public function draftDelete(Request $req)
    {
        Draft::where('id',  $req->draftId)->update(['deleted_at' => date('Y-m-d H:i:s')]);
    }

    public function draftList(Request $req)
    {
        return Draft::select('*', DB::raw('SUBSTRING(drafts.created_at,1,10) as date'))->where('userId', $req->user)->where('deleted_at', null)->get();
    }

    public function lists()
    {

        return $lists = [
            'category' => Category::select('categories.*', 'divisions.COM_CD', 'divisions.DIV_NM')->join('divisions', 'divisions.DIV_CD', 'categories.DIV_CD')->get(),
            'color' => Color::all(),
            'division' => Division::all(),
            'country' => Country::all(),
            'material' => Material::all(),
            'requestKind' => RequestKind::all(),
            'unit' => Unit::all(),
            'process' => Process::all()
        ];
    }

    public function notification()
    {
        $val = DB::select("SELECT Data1.countA, Data2.countC FROM (SELECT COUNT(*) as countA FROM batches WHERE class = 'a')  AS Data1, 
        (SELECT COUNT(*) as countC FROM batches WHERE class = 'c') AS Data2")[0];
        return ['a' => $val->countA, 'c' => $val->countC];
    }
}
