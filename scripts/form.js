$(document).ready(function () {
    $('#profesiones').change(function () {
        var ProfesionSeleccionada =$(this).val();

        if (ProfesionSeleccionada === 'Medico') {
            $('#categoria').html('<option value="" disabled selected>Seleccione una categoria</option><option value="Pediatra">Pediatra</option><option value="Cardiologo">Cardiologo</option><option value="Ginecologo">Ginecologo</option>');
          } else if (ProfesionSeleccionada === 'Docente') {
           
            $('#categoria').html('<option value="" disabled selected>Seleccione una categoria</option><option value="Nivel inicial">Nivel inicial</option><option value="nivel primario">Nivel Primario</option><option value="nivel secundario">Nivel Secunadario</option>');
          } else if (ProfesionSeleccionada === 'Comerciante') {
           
            $('#categoria').html('<option value="" disabled selected>Seleccione una categoria</option><option value="comercio interior">Comercio Interior</option><option value="comercioexterior">Comercio Exterior</option>');

          } else if (ProfesionSeleccionada === 'Abogado') {
           
            $('#categoria').html('<option value="" disabled selected>Seleccione una categoria</option><option value="penalista">Penalista</option><option value="laboral">Laboral</option><option value="familiar">Familiar</option>');
          }


      

        
    });

    $("#form").validate ({
        rules:{
            nombre:{
                required: true,
                maxlength: 20,
                minlength:4
            },
            Apellido:{
                required: true,
                maxlength:20,
                minlength:4
            },
            Direccion:{
                required: true,
                minlength:4
            },
            Profesiones:{
                required:true
            },
            categoria:{
                required:true
            },
            email:{
                required:true
            }


        },
        messages:{
            nombre:{
                required:"Debe ingresar un nombre",
                maxlength:"El nombre no debe tener mas de 20 caracteres",
                minlength:"El nombre debe tener al menos 4 caracteres"
            },
            Apellido:{
                required:"Debe ingresar un apellido",
                maxlength:"El apellido no debe tener mas de 20 caracteres",
                minlength:"El apellido debe tener al menos 4 caracteres"
            },
            Direccion:{
                required:"Coloque una direccion",
                minlength:"La direccion debe tener al menos 4 caracteres"
            },
            Profesiones:{
                required:"Seleccione una profesion"
            },
            categoria:{
                required:"Debe seleccionar una categoria"
            },
            email:{
                required:"Debe colocar un email"
            }


        },

        submitHandler: function(form){
            localStorage.setItem("nombre",$("#InputNombre").val())
            localStorage.setItem("Apellido",$("#InputApellido").val())
            localStorage.setItem("Direccion",$("#InputDireccion").val())
            localStorage.setItem("Codigo",$("#InputCodigo").val())
            localStorage.setItem("email",$("#InputEmail").val())
            localStorage.setItem("Profesiones",$("#profesiones").val())
            localStorage.setItem("categoria",$("#categoria").val())
            localStorage.setItem("observaciones",$("#observaciones").val())
            window.location.href = "div.html";
        }




    });


    
});