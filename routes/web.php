<?php

use App\Http\Controllers\homeController;
use App\Http\Controllers\TorneoviewController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('inicio');

Route::get('/torneo', [homeController::class, 'verTorneo'])->name('verTorneo');
Route::get('/torneo/crear', [TorneoviewController::class, 'create'])->name('torneoform');
Route::get('/torneo/{id}', [homeController::class,'show'])->name('torneoview');

Route::post('/guardarTorneo', [TorneoviewController::class,'guardarTorneo'])->name('guardarTorneo');

Route::get('/equipo', [homeController::class,'verEquipos'])->name('verEquipo');
Route::get('/equipo/crear', [TorneoviewController::class, 'showEquipo'])->name('equipoform');
Route::get('/equipo/{id}',[homeController::class,'showJugadoresEquipo'])->name('jugadoresEquipo');

Route::get('/equipo/{id}/jugador/crear', [TorneoviewController::class, 'agregarJugador'])->name('agregarJugador');