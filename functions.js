function traerInformacionB() {
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/Bicicleta/Bicicleta",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaB(respuesta.items);
            }
        }
    );
}
function pintarRespuestaB(items) {
    $("#resultadoB").empty();

    let myTable="<table>";
    myTable += "<tr><th>idbicicleta</th><th>Marca</th><th>Modelo</th><th>Id Categoria</th><th>Nombre</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idbici+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].idcategory+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td><button onclick='borrarElmentoB("+items[i].idbicicleta+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable += "</table>";
    $("#resultadoB").append(myTable);
}

function guardarInformacionB() {
    let myData = {id:$("#idbici").val(),brand:$("#brand").val(),model:$("#model").val(),category_id:$("#idcategory").val(),name:$("#name").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/Bicicleta/Bicicleta",
            type:"POST",
            data: dataToSend,
            datatype:"JSON",
            content:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Insercion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function editarInformacionB() {
    let myData = {id:$("#idbici").val(), brand:$("#brand").val(),model:$("#model").val(),category_id:$("#idcategory").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/Bicicleta/Bicicleta",
            type:"PUT",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Actualizacion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function borrarElmentoB(idbici1) {
    let myData = {id:idbici1.val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/Bicicleta/Bicicleta",
            type:"DELETE",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Borrado Exitoso");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

            //Funcionalidad clientes


function traerInformacionC() {
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaC(respuesta.items);
            }
        }
    );
}
function pintarRespuestaC(items) {
    $("#resultadoC").empty();

    let myTable="<table>";
    myTable += "<tr><th>idCliente</th><th>Nombre</th><th>Email</th><th>Age</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idcliente+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td><button onclick='borrarElmentoC("+items[i].idCliente+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable += "</table>";
    $("#resultadoC").append(myTable);
}

function guardarInformacionC() {
    let myData = {id:$("#idcliente").val(),name:$("#nameC").val(),email:$("#email").val(),age:$("#age").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type:"POST",
            data: dataToSend,
            datatype:"JSON",
            content:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Insercion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function editarInformacionC() {
    let myData = {id:$("#idcliente").val(), name:$("#nameC").val(),email:$("#email").val(),age:$("#age").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type:"PUT",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Actualizacion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function borrarElmentoC(idcliente1) {
    let myData = {id:idcliente1.val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type:"DELETE",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Borrado Exitoso");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}



                //Funcionalidad Message

function traerInformacionM() {
    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaM(respuesta.items);
            }
        }
    );
}
function pintarRespuestaM(items) {
    $("#resultadoM").empty();

    let myTable="<table>";
    myTable += "<tr><th>idMensaje</th><th>Mensaje</th></tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].idmensage+"</td>";
        myTable+="<td>"+items[i].message+"</td>";
        myTable+="<td><button onclick='borrarElmentoM("+items[i].idmensage+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable += "</table>";
    $("#resultadoM").append(myTable);
}

function guardarInformacionM() {
    let myData = {id:$("#idmessage").val(),messagetext:$("#message").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type:"POST",
            data: dataToSend,
            datatype:"JSON",
            content:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Insercion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function editarInformacionM() {
    let myData = {id:$("#idmensage").val(), messagetext:$("#message").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type:"PUT",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Actualizacion Exitosa");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}

function borrarElmentoM(idmensaje1) {
    let myData = {id:idmensaje1.val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax(
        {
            url:"https://g2e09ee6deb0680-dbciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type:"DELETE",
            data: dataToSend,
            datatype:"JSON",
            contentType:'application/json',
            success:function(respuesta){
                console.log(respuesta);
                alert("Borrado Exitoso");
            },
            error:function(xhr,status) {
                alert("Operacion no completada, "+ xhr.status)
            }
        }
    );
}