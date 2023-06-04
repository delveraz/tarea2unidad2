
const btnMenu = document.querySelector('.botonmenu');
const btnSeccion1 = document.getElementById("seccion1");
const btnSeccion2 = document.getElementById("seccion2");
const btnSaludar = document.querySelector("button[type='button']");
const btnGuardar = document.querySelector("button[type='submit']");
const btnCerrar = document.getElementById("cerrarmensaje");
const mensaje = document.getElementById("mensaje");
const contenido1 = document.getElementById("contenido1");
const contenido2 = document.getElementById("contenido2");

btnMenu.addEventListener('click', function () {
   document.getElementById('menudesplegable').classList.toggle('active');
  });
  
  btnSeccion1.addEventListener("click", function() {
    contenido1.style.display = "block";
    contenido2.style.display = "none"; 
  });

  btnSeccion2.addEventListener("click", function() {
   contenido2.style.display = "block";
   contenido1.style.display = "none"; 
 });

 btnSaludar.addEventListener("click", function() {
   mensaje.style.display = "block";
 });

 btnCerrar.addEventListener("click", function() {
   mensaje.style.display = "none";
 });

 btnGuardar.addEventListener('click', saveData)
 // Array para guardar los datos
var dataArray = [];

// Función que guarda los datos en la tabla
function saveData() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

  if (nombre !== '' && apellido !== ''&& email !== '') {
    var data = {
      nombre: nombre,
      apellido: apellido,
      email: email
    };

    dataArray.push(data);
    displayData();
    clearForm();
  }
}

// Función para mostrar los datos guardados
function displayData() {
  var dataList = document.getElementById("dataList");
  dataList.innerHTML = '';

  for (var i = 0; i < dataArray.length; i++) {
    var row = document.createElement("tr");
    
    var nombreCell = document.createElement("td");
    nombreCell.innerText = dataArray[i].nombre;

    var apellidoCell = document.createElement("td");
    apellidoCell.innerText = dataArray[i].apellido;
    
    var emailCell = document.createElement("td");
    emailCell.innerText = dataArray[i].email;
    
    var actionsCell = document.createElement("td");
    // crear el boton de eliminar
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteItem.bind(null, i));
    
    actionsCell.appendChild(deleteButton);
    
    row.appendChild(nombreCell);
    row.appendChild(apellidoCell);
    row.appendChild(emailCell);
    row.appendChild(actionsCell);
    
    dataList.appendChild(row);
  }
}

// Función para eliminar un elemento del array
function deleteItem(index) {
  dataArray.splice(index, 1);
  displayData();
}

// Función para limpiar el formulario después de guardar los datos
function clearForm() {
  document.getElementById("nombre").value = '';
  document.getElementById("apellido").value = '';
  document.getElementById("email").value = '';
}

