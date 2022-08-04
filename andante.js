var pa = document.getElementById("polloandante");
var papel = pa.getContext("2d");

var x = aleatorio(0, 420);
var y = aleatorio(0, 420);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

document.addEventListener("keydown", moverPollo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(pollo.cargaOK)
    {
        papel.drawImage(pollo.imagen, x, y);
    }
}

function moverPollo(evento)
{
    var movimiento = 1;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujar(pollo.imagen, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujar(pollo.imagen, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujar(pollo.imagen, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujar(pollo.imagen, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;       
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min - 1)) + min;
    return resultado;
}