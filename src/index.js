let s = 0;
let m = 0;
let h = 0;

const clock =()  => {
  let segundosDp;
  let minutosDp;
  let horasDp;

  segundosDp = document.getElementById("segundosDp");
  minutosDp = document.getElementById("minutosDp");
  horasDp = document.getElementById("horasDp");

  contador(segundosDp, minutosDp, horasDp);
};

const contador = (segundos, minutos, horas) => {
  window.setInterval(() => {
    if (s === -1) {
      s = 59;
      m--;
      if (m === 0) {
        m = 59;

        h--;
      }
    }

    if (s < 10) {
      segundos.innerHTML = "0" + s;
    } else {
      segundos.innerHTML = s;
    }
    if (m < 10) {
      minutos.innerHTML = "0" + m + ":";
    } else {
      minutos.innerHTML = m + ":";
    }
    if (h < 10) {
      horas.innerHTML = "0" + h + ":";
    } else {
      horas.innerHTML = h + ":";
    }

    s--;
  }, 1000);
};

const iniciar = () => {
  let horas = document.getElementById("horas").value;
  let minutos = document.getElementById("minutos").value;
  let segundos = document.getElementById("segundos").value;  

  h= horas;
  m= minutos;
  s= segundos;

  clock(horas, minutos, segundos);
};

