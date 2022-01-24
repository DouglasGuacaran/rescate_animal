$(document).ready(function () {

  $('#correo').on('keyup', function() {
    let re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
    if(!re) {
        $('#error').show();
        $('#success').hide();
    } else {
        $('#error').hide();
        $('#success').show();
    }
  }),
  lettersOnlyCheck = (element)=>  {
    let regEx = /^[a-zA-Z\s]+$/;
    let nombres = element.value
    if(nombres.match(regEx)) {
      return true;
      }
    else
      {
      alert("Por favor ingrese solo letras.");
      return false;
      }
  }

  $("#formulario").validate({
    rules: {
      email:{
        required: true
      },
      rut:{
        required: true,
        number: true,
        minlength: 3,
        maxlength: 8,
      },
      digito: {
        minlength: 1,
        maxlength: 1,
        required:  true,
      },
      nombre: {
        required: true,
      },
      telefono: {
        required: true,
        digits: true,
        minlength: 3,
        maxlength: 15,
      },
    },
    messages : {
      email:{
        required: 'debe ingresar algún correo electrónico'
      },
      rut : { 
        required:'Escriba el rut', 
        number:'Sólo deben ser números sin punton ni guión', 
        minlength:'Por favor ingrese al menos tres caracteres', 
        maxlength:'debe ingresar el RUT sin incluir el dígito verificador'
      },
      digito:{
        minlength: 'Agregue al menos un número',
        maxlength: 'Sólo se permite un dígito verificador',
        required: 'debe ingresar su dígito verificador'
      },
      nombre: {
        required: "Ingrese su nombre completo",
      },
      fechaNac: {
        required: "Ingrese su fecha de nacimiento",
      },
      telefono: {
        required: "Por favor ingrese un número telefónico",
        digits:"Por favor ingrese solo dígitos",
        minlength: "Debe tener más de 3 caracteres",
        maxlength: "No puede tener mas de 80 caracteres",
      },
      marca: {
        required: "Ingrese la marca del vehículo",
        minlength: "Debe tener más de 3 caracteres",
        maxlength: "No puede tener mas de 15 caracteres",
      },
      modelo: {
        required: "Ingrese el modelo del vehículo",
        minlength: "Debe tener más de 3 caracteres",
        maxlength: "No puede tener más de 15 caracteres",
      },
    },
    
    submitHandler: function (formulario) {
    },
  }),
  $('#digito').on('keyup', function() {
    console.log($("#digito").val());
    if (
      $("#digito").val() == "k" ||
      $("#digito").val() <= 8 &&
      $("#digito").val() >= 0
    ) {
        let mensaje = document.getElementById("errordigito");
        if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
            mensaje.innerHTML = "";
        }
    }else {
        let mensaje = document.getElementById("errordigito");
      mensaje.innerHTML = "ingrese un digito del 0 a el 8 o una letra k";
    }
  }),
  TDate = ()=> {
    let UserDate = document.getElementById("userdate").value;
    let ToDate = new Date();
    ToDate.setFullYear(2001,12,0)
    if (new Date(UserDate).getTime() >= new Date(ToDate).getTime()) {
      alert("Error, La fecha seleccionada debe ser previo al 01/01/2002");
      return false;
    }else{
      return true;
    }
  },
  $('#fechaNac').on('click', function(value, element, params) {
    let fecha = $('#fechaNac').value;
  })
  var RegionesYcomunas = {
    "regiones": [{
        "NombreRegion": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
      {
        "NombreRegion": "Tarapacá",
        "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
      {
        "NombreRegion": "Antofagasta",
        "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
      {
        "NombreRegion": "Atacama",
        "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
      {
        "NombreRegion": "Coquimbo",
        "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
      {
        "NombreRegion": "Valparaíso",
        "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
      {
        "NombreRegion": "Región del Libertador Gral. Bernardo O’Higgins",
        "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
      {
        "NombreRegion": "Región del Maule",
        "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
      {
        "NombreRegion": "Región del Biobío",
        "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
    },
      {
        "NombreRegion": "Región de la Araucanía",
        "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
    },
      {
        "NombreRegion": "Región de Los Ríos",
        "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
      {
        "NombreRegion": "Región de Los Lagos",
        "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
      {
        "NombreRegion": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
      {
        "NombreRegion": "Región de Magallanes y de la Antártica Chilena",
        "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
      {
        "NombreRegion": "Región Metropolitana de Santiago",
        "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón","Santiago Centro", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
    }]
  }
  jQuery(document).ready(function () {
  
    var iRegion = 0;
    var htmlRegion = '<option value="sin-region">Seleccione región</option><option value="sin-region">--</option>';
    var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';
  
    jQuery.each(RegionesYcomunas.regiones, function () {
      htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
      iRegion++;
    });
  
    jQuery('#regiones').html(htmlRegion);
    jQuery('#comunas').html(htmlComunas);
    jQuery('#regiones').change(function () {
      var iRegiones = 0;
      var valorRegion = jQuery(this).val();
      var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
      jQuery.each(RegionesYcomunas.regiones, function () {
        if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
          var iComunas = 0;
          jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
            htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
            iComunas++;
          });
        }
        iRegiones++;
      });
      jQuery('#comunas').html(htmlComuna);
    });
    jQuery('#comunas').change(function () {
      if (jQuery(this).val() == 'sin-region') {
        alert('selecciones Región');
      } else if (jQuery(this).val() == 'sin-comuna') {
        alert('selecciones Comuna');
      }
    });
    jQuery('#regiones').change(function () {
      if (jQuery(this).val() == 'sin-region') {
        alert('selecciones Región');
      }
    })
  })
})
