function createProduct (name, price) {
  let stock = 10;

  return {
    name,
    price,
    checkStock(){
      console.log(stock);
    },
    buy(qty){
      if(qty <= stock){
        stock -= qty;
        console.log(`${qty} pice book ${stock} pice left`)
      }else{
        console.log(`we only have ${stock} pices left`);
      }
    },
    refile(qty){
      stock += qty;
      console.log(`refile the stock - ${stock} pice now`);
    }
  }
}

let iphone = createProduct("iphone", 70000);
let kitcat = createProduct("kitcat", 70000);