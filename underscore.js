
function underscore(){

average: function(arr){
   var total = 0;
   for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
    var avg = total / arr.length;
       return (avg);
},


  include: function(x,y){
    var result = [];
  for (var i in x) {
       if (x[i] == y){
           return true;
  },
  }return false;
    },   
    

first: function(array){
return((array).slice(0,1));
},

last: function(array){
  return((array).slice(-1));
},

max: Function(array){
    var result = '';
    for(var i=0;i<array.length;i++){
       if (array[i]>=result){
           result = array[i];
       }
    }return(result);
},

min: function(array){
var result = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] < value) {
    result = array[i];
    
  }
}return result;
},

shuffle: function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
},
difference: function(x,y){
  var result = [];
  for (var i in x) {
  if (x[i] != y){
  result.push(x[i]);
  }
  }return(result);
    },   
    

random: function(array,x){
     var result = [];
for(var i=0;i<x;i++){
     result.push(array[Math.floor(Math.random() * array.length)]);
}    return((result));  
},

  pluck: function(stooges){
  var result = [];
  for(var i in stooges){
      result.push(stooges[i].name);
  }return(result);
  }
}
