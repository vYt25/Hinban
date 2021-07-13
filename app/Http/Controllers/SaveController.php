<?php

namespace App\Http\Controllers;

use App\Item;
use App\User;
use App\Batch;
use App\Draft;
use App\Classes\Decode;
use App\BatchAttachment;
use App\Classes\Timestamp;
use Illuminate\Http\Request;
use App\Classes\StoreItemFiles;
use App\Classes\StoreBatchFiles;
use Illuminate\Support\Facades\DB;

class SaveController extends Controller
{
    //

    public function saveAsDraft(Request $req)
    {
        $draft = new Draft();
        $draft->create($req);
    }

    public function upload(Request $request)
    {
        // foreach ($request->file('files') as $key => $val) {
        //     echo $filename =  $request->file('files')[$key]->getClientOriginalName();
        //     echo '<br>';
        // }
        $batch = Decode::this($request['batch']);
        $items = Decode::this($request['items']);

        $timestamp = Timestamp::get();

        try {
            DB::beginTransaction();

            ///////////////////////////////////////////////////////////////////////////////////////
            //                              Batch Insert                                         //
            ///////////////////////////////////////////////////////////////////////////////////////
            $batchInsert = new Batch();
            $batchInsert->arrange($batch, $request, $timestamp)->create();

            ///////////////////////////////////////////////////////////////////////////////////////
            //                              Batch Attachment Insert                              //
            ///////////////////////////////////////////////////////////////////////////////////////
            if (isset($request->attachment_file)) {
                $batchAttachmentInsert = new BatchAttachment;
                $batchAttachmentInsert->arrange($batch, $request, $timestamp, $batchInsert->hinbanId)->create();
            }

            ///////////////////////////////////////////////////////////////////////////////////////
            //                              Items Insert                                         //
            ///////////////////////////////////////////////////////////////////////////////////////
            $itemInsert = new Item();
            $itemInsert->arrange($items, $request, $timestamp)->create();

            ///////////////////////////////////////////////////////////////////////////////////////
            //                              Store Item Files                                     //
            ///////////////////////////////////////////////////////////////////////////////////////
            $storeItemFiles = new StoreItemFiles;
            $storeItemFiles->store($request);

            ///////////////////////////////////////////////////////////////////////////////////////
            //                              Store Batch Files                                    //
            ///////////////////////////////////////////////////////////////////////////////////////
            if (isset($request->attachment_file)) {
                $storeBatchFiles = new StoreBatchFiles;
                $storeBatchFiles->store($request);
            }

            DB::commit();


            return Batch::select('id', 'hinbanId')->limit(1)->orderBy('id', 'desc')->first();
        } catch (ModelException $e) {
            DB::rollback();
            return $e->getMessage();
        }
    }
}
