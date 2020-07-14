const orders = (time, product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
  if(true){
    setTimeout(() => {
      resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
	    
    }, time);
   }else{
     reject(error(`=== Pedido para la ${table} de ${product}, no salió`));
   }	  
  });
}

function randomTime() { 
  const max = 8000;
  const min = 1000;
  return Math.floor(Math.random()*(max - min + 1) + min);
};

const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

const waiter = () => {
  orders(randomTime(), menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

waiter();


const waiter2 = () => {
  orders(randomTime(), menu.hotdog, table[0]).then((res) => console.log(res))
	return orders(randomTime(), menu.pizza, table[2]).then((res) => console.log(res))
    .catch((err) => console.error(err));
};

waiter2();

/*const waiter3 = async() => {
  orders(randomTime(), menu.hamburger, table[1]).then((res) => console.log(res))
    return orders(randomTime(), menu.hotdog, table[1]).then((res) => console.log(res))
      orders(randomTime(), menu.pizza, table[1]).then((res) => console.log(res))
     .catch((err) => console.error(err));
};

waiter3();*/