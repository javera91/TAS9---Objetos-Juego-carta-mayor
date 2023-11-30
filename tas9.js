'use strict'
function Jugador (nickname, vidas, carta){
    this.nickname = nickname;
    this.vidas = vidas;
    this.carta = carta;
    this.disminuirVida = function () {
        this.vidas--
    }
    //función para devuelva el nombre y las vidas
}