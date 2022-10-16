function traerInformacionCinema(){
    $.ajax({
        url : 'https://129.213.162.234:8080/api/Cinema',
        type : 'GET',
        dataType : 'JSON',

        success : function(respuesta) {
            console.log(respuesta);
            pintarRespuestaCinema(respuesta.items)
        }
    });

} 

function pintarRespuestaCinema(items){

    let myTable ='<table class="table table-dark table-striped" >';
    myTable+="<tr>";
    myTable+='<th class="centrado">#</th>';
    myTable+='<th class="centrado">Propietario</th>';
    myTable+='<th class="centrado">Capacidad</th>';
    myTable+='<th class="centrado">Categoria</th>';
    myTable+='<th class="centrado">Sala</th>';
    myTable+='<th class="centrado">Eliminar</th>';
//    myTable+='<th class="centrado">Descripción</th>';
    myTable+="</tr>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+='<td class="centrado">'+items[i].id+'</td>';
        myTable+='<td class="centrado">'+items[i].owner+'</td>';
        myTable+='<td class="centrado">'+items[i].capacity+'</td>';
        myTable+='<td class="centrado">'+items[i].category_id+'</td>';
        myTable+='<td class="centrado">'+items[i].name+'</td>';
        myTable+="<td <button class='text-danger' onclick='borrarElementoCinema("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado").append(myTable);
} 

function guardarInformacionCinema(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url : 'https://129.213.162.234:8080/api/Cinema',
        type : 'POST',
        data:myData,
        dataType : 'JSON',
        success : function(respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionCinema();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacionCinema(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url : 'https://129.213.162.234:8080/api/Cinema',
        type : 'PUT',
        data:dataTosend,
        contentType:"application/JSON",
        datatype : 'JSON',
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionCinema();
            alert("Se ha actualizado")
        },
    });
}



function borrarElementoCinema(idElemento){
    let myData={
        id:idElemento
    };  
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url : 'https://129.213.162.234:8080/api/Cinema',
        type : 'DELETE',
        data:dataTosend,
        contentType:"application/JSON",
        dataType : 'JSON',
        success : function(respuesta) {
            $("#resultado").empty(),
            traerInformacionCinema();
            alert("Se ha eliminado")
        },
    });

} 