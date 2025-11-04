let Bank = (function () {
  let bankbalance = 12000;

  function checkBalance (){
    console.log(bankbalance)
  };

  function setbalance (val) {
    bankbalance = val;
  }

  function withdrow (val) {
    if(val <= bankbalance) {
      bankbalance -= val;
      console.log(bankbalance)
    }
  }

  return {
    checkBalance,
    setbalance,
    withdrow
  }
})();

Bank.withdrow(1000);