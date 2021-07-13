<?php header('Access-Control-Allow-Origin: *');  ?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>{{config('app.name')}}</title>

        <!-- Fonts -->
        
        {{-- Logo --}}
        <link rel="icon" href="{{asset('img/logo.png')}}">
        

        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('css/all.css')}}" >
        <link href="{{asset(mix('css/app.css'))}}" rel="stylesheet">
        {{-- <style>
            .htCommentTextArea{
                height:180px !important;
            }
        </style> --}}

    </head>
    <body>
        
        {{-- Application Body --}}
        <div id="app"></div>
        
        {{-- Scripts --}}
        <script src="{{asset(mix('js/app.js'))}}"></script>
    
    </body>
</html>
