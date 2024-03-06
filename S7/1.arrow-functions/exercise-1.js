const arrowFunction = (a = 10, b = 5) => {
    console.log(a + b)
}


arrowFunction(); //El resultado es 15 ya que hemos definido por defecto a=10 y b=5

arrowFunction(25); //El resultado es 30 ya que substituimos el valor de a = 20

arrowFunction(50, 50); // El resultado es 100 ya que substituimos tanto el valor a = 50 como el valor b = 50  


