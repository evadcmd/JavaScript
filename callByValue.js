function add(obj) {
    // 讓 obj 變成一個新的 object
    obj = {
      number: obj.number + 1
    }
  }
    
  var o = {number: 10}
  add(o)
  console.log(o.number)