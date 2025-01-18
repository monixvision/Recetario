$(document).ready(function(){
    //este es el código para subir haciendo un scroll automático
    $('#flecharriba-tortilla').click(function() {
      $('html, body').animate({
        scrollTop: 0}, 500); // 500 milisegundos para la animación
    });
  //este es el código para que la ventana del navegador se ajuste al alto de los contenidos
   function ajustarViewBox() {
      // Inicializamos las variables para calcular los límites del contenido visible
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  
      // Iterar sobre cada grupo dentro del SVG
      $("svg > g").each(function () {
        if ($(this).css("display") !== "none") {
          $(this).find("rect, circle, ellipse, path, polygon, polyline, line, text").each(function () {
            const bbox = this.getBBox(); // Obtener los límites del elemento
            minX = Math.min(minX, bbox.x);
            minY = Math.min(minY, bbox.y);
            maxX = Math.max(maxX, bbox.x + bbox.width);
            maxY = Math.max(maxY, bbox.y + bbox.height);
          });
        }
      });
  
      // Ajustamos el viewBox si hay contenido visible
      if (minX < Infinity && minY < Infinity && maxX > -Infinity && maxY > -Infinity) {
        const width = maxX - minX;
        const height = maxY - minY;
        $("svg").attr("viewBox", `${minX} ${minY} ${width} ${height}`);
      } else {
        // Si no hay elementos visibles, establecer un viewBox predeterminado
        $("svg").attr("viewBox", "0 0 1920 1080");//el 1080 lo puedes modificar, sería el alto cuando está todo oculto
      }
    }
  
    // Llamamos a la función inicialmente para ajustar el viewBox
   ajustarViewBox();
  
    // Escuchamos eventos que puedan cambiar la visibilidad de los elementos
    $(window).on("resize", ajustarViewBox);
  
	
        $("#sinsonido-homepage, #sinsonido-tortilla, #sinsonido2-tortilla").click(musica);
        $("#sonido-homepage, #sonido-tortilla, #sonido2-tortilla").click(musica); 
    var sound = false;		
    function musica(){	
    
      if (!sound) {
    
        $("#musica")[0].play(); 
        $("#sinsonido-homepage, #sinsonido-tortilla, #sinsonido2-tortilla").hide();
          $("#sonido-homepage, #sonido-tortilla, #sonido2-tortilla").show();
         sound=true;
       
      } else{
    
     $("#musica")[0].pause(); 
          $("#sinsonido-homepage, #sinsonido-tortilla, #sinsonido2-tortilla").show();
      $("#sonido-homepage, #sonido-tortilla, #sonido2-tortilla").hide();
         sound=false;
      }	
    }

    $('#flechabajo-homepage, #click-homepage').click(function() {
        $('#grupo-homepage').hide();
        $('#grupo-seleccion').show();
        ajustarViewBox();
    });

$('#flechavolver-seleccion').click(function() {
    $('#grupo-seleccion').hide();
    $('#grupo-homepage').show();
    ajustarViewBox();
});


$('#tiempo1-seleccion').click(function() {
    $('#tiempo1-seleccion').hide();
    $('#circulotiempo1-seleccion').show();
});

$('#tiempo2-seleccion').click(function() {
    $('#tiempo2-seleccion').hide();
    $('#circulotiempo2-seleccion').show();
});


$('#rectangulocroquetas-seleccion').click(function() {
    $('#textocroquetaprx-seleccion').fadeIn(100);
});

$('#flechavolver-seleccion').click(function() {
    $('#grupo-seleccion').hide();
    $('#grupo-homepage').show();
    ajustarViewBox();
});

$('#rectangulotortilla-seleccion').click(function() {
    $('#grupo-seleccion').hide();
    $('#grupo-tortilla').show();
    ajustarViewBox();
});

$('#flechavolver-tortilla').click(function() {
    $('#grupo-tortilla').hide();
    $('#grupo-seleccion').show();
    ajustarViewBox();
  });

  $('#abuelita1-tortilla').click(function() {
    $('#bocadillo1-tortilla').fadeIn(200);
    $('#dialogoindicacion1-tortilla, bocadilloblanco-tortilla').fadeIn(400);
  });
  

  $('#personas-tortilla').click(function() {
    $('#personas-tortilla').hide();
    $('#cuatro-tortilla').show();
  });

  $('#aceite-tortilla').click(function() {
    $('#textoaceite-tortilla').show();
    $(this).addClass('parar'); // MIRAR ESTO
  });
  
  $('#huevos-tortilla').click(function() {
    $('#textohuevos-tortilla').show();
  });

  $('#cebolla-tortilla').click(function() {
    $('#textocebolla-tortilla').show();
  });
  
  $('#patatas-tortilla').click(function() {
    $('#textopatatas-tortilla').show();
  });

  $('#sal-tortilla').click(function() {
    $('#textosal-tortilla').show();
  });

  $('#cuenco-tortilla').click(function() {
    $('#textocuenco-tortilla').show();
  }); 

  $('#sartenuten_tortilla').click(function() {
    $('#textosarten-tortilla').show();
  }); 

  $('#espatula-tortilla').click(function() {
    $('#textoespatula-tortilla').show();
  }); 

  $('#tabla-tortilla').click(function() {
    $('#textotabla-tortilla').show();
  }); 

  $('#plato-tortilla').click(function() {
    $('#textoplato-tortilla').show();
  }); 

  $('#pelador-tortilla').click(function() {
    $('#textopelador-tortilla').show();
  }); 

  $('#cuchillo1-tortilla').click(function() {
    $('#textocuchillo-tortilla').show();
});

$('#cubiertos-tortilla').click(function() {
  $('#textocubiertos-tortilla').show();
});

document.getElementById('abuelita2-tortilla').addEventListener('click', function() {
  const bocadillos = document.querySelectorAll("[id*='bocadillocentro']"); // Selecciona todos los elementos que contienen 'bocadillocentro'
  
  bocadillos.forEach((bocadillo, index) => {
      // Mostrar el bocadillo después de un retraso
      setTimeout(() => {
          bocadillo.style.display = 'block'; // Cambiar a display block
          bocadillo.style.opacity = 1; // Cambiar la opacidad para que aparezca
      }, index * 500); // Retraso de 500ms por cada elemento
  });
  $('#alerta1-tortilla').show(3000);
});

$('#boton1-tortilla').click(function() {
  $('#paso1-tortilla').show();
});

$('#verdescrip1-tortilla').click(function() {
  $('#textoinfo1-tortilla').fadeToggle();
});

});