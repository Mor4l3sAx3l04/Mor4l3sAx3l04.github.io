// 1
function ej1() {
  let capital = Number(document.getElementById("capital").value);
  if (capital < 0) {
    document.getElementById("res1").innerText = "Cantidad no válida";
    return;
  }
  let ganancia = capital * 0.02;
  let total = capital + ganancia;
  document.getElementById("res1").innerText = "Ganancia: " + ganancia + " | Total: " + total;
}

// 2
function ej2() {
  let sueldo = Number(document.getElementById("sueldo").value);
  let v1 = Number(document.getElementById("v1").value);
  let v2 = Number(document.getElementById("v2").value);
  let v3 = Number(document.getElementById("v3").value);

  if (sueldo < 0 || v1 < 0 || v2 < 0 || v3 < 0) {
    document.getElementById("res2").innerText = "Cantidad no válida";
    return;
  }

  let comision = (v1 + v2 + v3) * 0.10;
  let total = sueldo + comision;
  document.getElementById("res2").innerText = "Comisión: " + comision + " | Total: " + total;
}

// 3
function ej3() {
  let compra = Number(document.getElementById("compra").value);
  if (compra < 0) {
    document.getElementById("res3").innerText = "Cantidad no válida";
    return;
  }
  let pagoFinal = compra - (compra * 0.15);
  document.getElementById("res3").innerText = "Pago final: " + pagoFinal;
}

// 4
function ej4() {
  let p1 = Number(document.getElementById("p1").value);
  let p2 = Number(document.getElementById("p2").value);
  let p3 = Number(document.getElementById("p3").value);
  let examen = Number(document.getElementById("examen").value);
  let trabajo = Number(document.getElementById("trabajo").value);

  if (p1 < 0 || p2 < 0 || p3 < 0 || examen < 0 || trabajo < 0) {
    document.getElementById("res4").innerText = "Cantidad no válida";
    return;
  }

  let promedio = (p1+p2+p3)/3;
  let final = (promedio*0.55) + (examen*0.30) + (trabajo*0.15);

  document.getElementById("res4").innerText = "Calificación final: " + final.toFixed(2);
}

// 5
function ej5() {
  let nac = Number(document.getElementById("nac").value);
  let actual = Number(document.getElementById("actual").value);

  if (nac < 0 || actual < 0) {
    document.getElementById("res5").innerText = "Cantidad no válida";
    return;
  }

  let edad = actual - nac;
  document.getElementById("res5").innerText = "Edad: " + edad + " años";
}

// 6
function ej6() {
  let entrada = document.getElementById("palabras").value.split(",");
  let numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  let salida = entrada.map(p => {
    let i = numeros.indexOf(p.trim().toLowerCase());
    return i === -1 ? -1 : i;
  });
  document.getElementById("res6").innerText = "Resultado: [" + salida.join(", ") + "]";
}

// 7
function ej7() {
  let horas = Number(document.getElementById("horas").value);
  let pago = Number(document.getElementById("pagoHora").value);

  if (horas < 0 || pago < 0) {
    document.getElementById("res7").innerText = "Cantidad no válida";
    return;
  }

  let total;
  if (horas <= 40) {
    total = horas * pago;
  } else {
    let extras = horas - 40;
    if (extras <= 8) {
      total = (40*pago) + (extras*pago*2);
    } else {
      total = (40*pago) + (8*pago*2) + ((extras-8)*pago*3);
    }
  }
  document.getElementById("res7").innerText = "Pago total: " + total;
}

// 8
function ej8() {
  let salario = Number(document.getElementById("salario").value);
  let antig = Number(document.getElementById("antig").value);

  if (salario < 0 || antig < 0) {
    document.getElementById("res8").innerText = "Cantidad no válida";
    return;
  }

  let porc = 0;
  if (antig < 1) porc = 0.05;
    else if (antig < 2) porc = 0.07;
    else if (antig < 5) porc = 0.10;
    else if (antig < 10) porc = 0.15;
  else porc = 0.20;

  let utilidad = salario * porc;
  document.getElementById("res8").innerText = "Utilidad: " + utilidad;
}


    // 9 Validación formulario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const comentarios = document.getElementById("comentarios");
    const acepto = document.getElementById("acepto");
    const form = document.getElementById("registro");
    const res9 = document.getElementById("res9");

    // spans de error
    const errNombre = document.getElementById("err-nombre");
    const errEmail = document.getElementById("err-email");
    const errPassword = document.getElementById("err-password");
    const errComentarios = document.getElementById("err-comentarios");
    const errAcepto = document.getElementById("err-acepto");

    // patrones
    const emailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // min 6, 1 lower, 1 upper, 1 digit

    // funciones de validación por campo (devuelven true/false)
    function validarNombre() {
    const val = nombre.value.trim();
    if (val === "") {
        errNombre.innerText = "El nombre es obligatorio.";
        return false;
    }
    errNombre.innerText = "";
    return true;
    }

    function validarEmail() {
    const val = email.value.trim();
    if (val === "") {
        errEmail.innerText = "El email es obligatorio.";
        return false;
    }
    if (!emailPat.test(val)) {
        errEmail.innerText = "El email no tiene formato válido.";
        return false;
    }
    errEmail.innerText = "";
    return true;
    }

    function validarPassword() {
    const val = password.value;
    if (val.length < 6) {
        errPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
        return false;
    }
    if (!passwordPat.test(val)) {
        errPassword.innerText = "La contraseña debe contener minúscula, mayúscula y un dígito.";
        return false;
    }
    errPassword.innerText = "";
    return true;
    }

    function validarComentarios() {
    const val = comentarios.value.trim();
    if (val === "") {
        errComentarios.innerText = "Los comentarios son obligatorios.";
        return false;
    }
    if (val.length > 50) {
        errComentarios.innerText = "Los comentarios no deben exceder 50 caracteres.";
        return false;
    }
    errComentarios.innerText = "";
    return true;
    }

    function validarAcepto() {
    if (!acepto.checked) {
        errAcepto.innerText = "Debes aceptar las condiciones del servicio.";
        return false;
    }
    errAcepto.innerText = "";
    return true;
    }

    // validar cuando el campo pierde el foco (blur)
    nombre.addEventListener("blur", validarNombre);
    email.addEventListener("blur", validarEmail);
    password.addEventListener("blur", validarPassword);
    comentarios.addEventListener("blur", validarComentarios);
    acepto.addEventListener("change", validarAcepto);

    // validar todo al enviar
    form.addEventListener("submit", function(e) {
    e.preventDefault(); // evitamos envío real (simulación)

    const vNombre = validarNombre();
    const vEmail = validarEmail();
    const vPassword = validarPassword();
    const vComentarios = validarComentarios();
    const vAcepto = validarAcepto();

    if (vNombre && vEmail && vPassword && vComentarios && vAcepto) {
        res9.innerText = "Formulario válido. (Simulación: envío exitoso)";
        // aquí podrías enviar con fetch() a una API real si tuvieras servidor
    } else {
        res9.innerText = "Formulario inválido. Revisa los errores mostrados.";
    }
    });

    //10
    function removeScriptTags(html) {
      if (!html) return html;
        return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
      }

      // conectar botón
      document.getElementById("btnSanitizar").addEventListener("click", function() {
          const entrada = document.getElementById("htmlInput").value;
          const limpio = removeScriptTags(entrada);
      document.getElementById("res10").innerText = limpio;
    });