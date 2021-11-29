// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

function horasSalarioMinimo(){
let obj = {};
	obj.salarioMinimo = 30000
	obj.horasPorDia = 8
	obj.diasPorSemana = 5
	obj.semanasPorMes = 31/7
	obj.horasPorSemana = obj.horasPorDia * obj.diasPorSemana
	obj.horasPorMes = obj.horasPorSemana * obj.semanasPorMes
  console.log(obj) 
 return obj.salarioMinimo / obj.horasPorMes
}
/*
function Pages() {
  const CanvasColor = {
    color: 1
  }
  DesignColors(CanvasColor)
  DesignView(CanvasColor)

  function DesignView(CanvasBG) {
    console.log(CanvasBG)
  }

  function DesignColors(props) {
    ColorButton(props)

    function ColorButton(color) {
      color.color = 2
    }
  }
}*/
// Pages()
let a = horasSalarioMinimo()
console.log(a)
