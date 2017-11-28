function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}

let form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", function(event) {

    let index = 0;
    // form.elements.forEach((e)=>{
    //   if(e.checked){
    //     index++;
    //   }
    // })
    let formElementsArray = toArray(form.elements)
    formElementsArray.forEach((e)=>{
      if(e.checked){
        console.log(e)
        index++;
      }
    })
    document.getElementById("summary").innerHTML = index+ " out of 15"
    event.preventDefault();
  });
