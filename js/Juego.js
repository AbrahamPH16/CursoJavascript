const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btEmpezar = document.getElementById('btnEmpezar')
const nav = document.querySelector('#nav');
const menu = document.querySelector('.menu');
var ULTIMO_NIVEL = 0;
var dif;
var contador = document.getElementById('contador');
var ultimo = document.getElementById('ultimo-nivel');
var dificultad = document.getElementById('dificultad');


class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 100)
    ultimo.innerHTML = ULTIMO_NIVEL;
    dificultad.innerHTML = dif;


  }
  inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }
  toggleBtnEmpezar() {
    if (btEmpezar.classList.contains('hide')) {
      btEmpezar.classList.remove('hide')
    } else {
      btEmpezar.classList.add('hide')
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarEventosClick()
    contador.innerHTML = this.nivel;
  }

  transformarNumeroAColor(num) {
    switch (num) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }

  }
  transformarColorANumero(color) {
    switch (color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }

  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 800 * i)
    }
  }
  iluminarColor(color) {
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 250)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }


  agregarEventosClick() {
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }
  eliminarEventosClick() {
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.transformarColorANumero(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++
      if (this.subnivel === this.nivel) {
        this.nivel++
        this.eliminarEventosClick()
        if (this.nivel === (ULTIMO_NIVEL + 1)) {
          this.ganoEljuego()
        } else {
          setTimeout(this.siguienteNivel, 1000)
        }
      }
    } else {
      this.perdioEljuego()
    }
  }

  perdioEljuego() {
    Swal.fire({
      icon: 'error',
      title: 'Has perdido :('
    })
      .then(() => {
        this.eliminarEventosClick()
        this.inicializar()
        hideShow();
      })

  }

  ganoEljuego() {
    Swal.fire({
      icon: 'success',
      title: 'Ganaste el Juego!!'
    })
      .then(this.inicializar)
      hideShow();
  }
}
function elegirDificultad(dificultad) {
  if (dificultad == 'Facil') {
    ULTIMO_NIVEL = 2;
    dif = 'Fácil';
  } else if (dificultad == 'Normal') {
    ULTIMO_NIVEL = 15;
    dif = 'Normal';
  } else if (dificultad == 'Dificil') {
    ULTIMO_NIVEL = 20;
    dif = 'Dificil';
  } else if (dificultad == 'Hardcore') {
    ULTIMO_NIVEL = 30;
    dif = 'Hardcore';
  }else{
    ULTIMO_NIVEL = Math.floor(Math.random() * 100);
    dif = 'Random';
  }
  return dificultad;
}

function hideShow() {
  menu.classList.toggle('is-active');
}

function validation(event) {
  if (true) {
    nav.addEventListener('click', hideShow);
  }
}
validation();


function empezarJuego() {
  var juego = new Juego()
}


