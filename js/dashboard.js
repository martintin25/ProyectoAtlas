$(document).ready(function(){
    $('#tablaUsuarios').DataTable({
        language:{
            search: "Buscar",
            lengthMenu: "Mostrar _MENU_ Registros",
            info: "Mostrar _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "No hay datos disponibles en la tabla",
            paginate:{
                first: "Primero",
                last: "Ultimo",
                next: "Siguiente",
                previous: "Anterior"
            }
        }
    });
});

document.querySelectorAll('.btnEliminar').forEach(function(boton){
boton.addEventListener('click' , function(){
    Swal.fire({
        title: 'Estas seguro?',
        text: 'Usuario eliminado',
        icon: 'warning',
        showCancelButton :true,
        confirmButtonColor:'#DD403A',
        cancelButtonText:'Si, eliminar',
        confirmButtonText:'Cancelar',
       
    }).then((result)=>{
       if(result.isConfirmed){
 
        Swal.fire({
            icon:'success',
            title:'Eliminado',
            text:'El usuario fue eliminado correctamente',
              confirmButtonColor:'#DD403A'
 
        });
    }
});
 
});
 
});
 
