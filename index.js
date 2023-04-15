const pizzas = [{
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a)  Las pizzas que tengan un id impar.
const pizzasIdimpar = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
})
const nombresPizzasIdImpar = pizzasIdimpar.map(pizza => pizza.nombre);
const respuesta1 = `Las pizzas con id impar son: ${nombresPizzasIdImpar.join(", ")}.`;
console.log(respuesta1);


//b) Responder: ¿Hay alguna pizza que valga menos de $600?
const hayMenos600 = pizzas.some((pizza) => {
    return pizza.precio < 600;
    }
)

if (hayMenos600) {
  console.log("Si,si hay una pizza cuyo precio es menor a $600")
}
else {
  console.log("No, no hay una pizza con un precio menor a $600")
}


// c) El nombre de cada pizza con su respectivo precio.
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} cuesta ${pizza.precio} pesos.`);
});

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
pizzas.forEach(pizza => {
  console.log(`Ingredientes ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});

