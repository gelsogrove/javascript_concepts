function Bike(model,color){
    this.model = model,
    this.color = color
  }
  Bike.prototype.getDetails = function(){
   return this.model+" bike is "+this.color;
  }
  var bikeObj1 = new Bike(‘BMW’,’Black’);
  console.log(bikeObj1.getDetails());