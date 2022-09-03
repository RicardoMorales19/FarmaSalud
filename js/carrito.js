let vectorDondeSeGuardaElPedido = [];

function IniciarProductosAutomaticamente(){
    guardarDatosDelCarrito('00214','Aloe Vera Gel','200.00','0','images/Aloe vera gel.jpg');
    guardarDatosDelCarrito('85416','Eucerin Crema para Manos','150.70','0','images/eucerin crema manos.jpg');
    guardarDatosDelCarrito('532015','Caja de Mascarillas Negras','230.85','0','images/mascarilla negra.jpg');
    guardarDatosDelCarrito('210341','Ensure Advance','390.35','0','images/100.webp');
    guardarDatosDelCarrito('965142','Glucerna 900g','550.35','0','images/200.webp');
    guardarDatosDelCarrito('5142031','PediaSure 1.6kg','420.00','0','images/600.webp');
    guardarDatosDelCarrito('001362','Caja Centrum Silver','250.35','0','images/700.webp');
    guardarDatosDelCarrito('7631010','60 Gomas Benet Zinc + Vitamina','180.05','0','images/900.webp');
    guardarDatosDelCarrito('900740','Redoxitos Plus 25 gomitas','105.30','0','images/1000.webp');
    guardarDatosDelCarrito('633140','Kit Accu Chek','620.17','0','images/Accu-chek.jpg');
    guardarDatosDelCarrito('003214','Acla-Med','111.00','0','images/acla-med.jpg');
    guardarDatosDelCarrito('1130241','Amoxicilina Acido Clavulanico','32.41','0','images/amoxicilina.jpg');
    guardarDatosDelCarrito('5541263','Caja 40 Tabletas Aspirina 500mg','330.00','0','images/aspirina.jpg');
    renderizarCarrito();
}

function finalizarPedido(){
    alert('El pedido se ha Enviado y Finalizado');
}

function guardarDatosDelCarrito(codigo, descripcion, precio, cantidad, imagen){
    vectorDondeSeGuardaElPedido.push(
        {
            codigo: codigo,descripcion: descripcion,precio: precio,cantidad: cantidad,imagen: imagen
        }
    );
}

var totalDelPedido=0;
function renderizarCarrito(){
    totalDelPedido=0;
    let salidaFinalDelCarrito = '';
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        salidaFinalDelCarrito +=
        `
        <tr>
        <td>${recorridoDelPedido.codigo}</td>
        <td>${recorridoDelPedido.descripcion}<img src="${recorridoDelPedido.imagen}" width="70"></td>
        <td><button onclick="quitarProductoDelPedido('${recorridoDelPedido.codigo}');"><i class="fa fa-trash-o" style="font-size:24px"></i></button> <button onclick="sumarCantidad('${recorridoDelPedido.codigo}');">+</button> <button onclick="restarCantidad('${recorridoDelPedido.codigo}');">-</button> ${recorridoDelPedido.cantidad}</td>
        <td>${recorridoDelPedido.precio}</td>
        <td>${recorridoDelPedido.cantidad*recorridoDelPedido.precio}</td>
        </tr>
        `
        totalDelPedido+=recorridoDelPedido.cantidad*recorridoDelPedido.precio;
    }
    document.getElementById('detalleDelPedido').innerHTML = salidaFinalDelCarrito;
    document.getElementById('total').innerHTML = totalDelPedido;
}

function quitarProductoDelPedido(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

var vectorUtilizadoTemporalmente=[]

function restarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente-1;
            if(elCarritoTieneLaCantidadSiguiente>1){
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                    }
                );
            }
            if(elCarritoTieneLaCantidadSiguiente<=1){
                alert("No se puede restar la cantidad por que tiene solo uno, utilize la opcion elminar.");
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                    }
                );
            }
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

function sumarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente+1;
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                }
            );
        
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}