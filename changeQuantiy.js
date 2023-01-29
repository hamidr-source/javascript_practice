let commodity =[
  {title: "رب گوجه فرنگی", quantity: 8},
  {title:"روغن آفتابگردان", quantity: 0},
  {title:"تن ماهی" ,quantity: 5},
  {title: "ماهی", quantity: 0},
]
let changeQuantiy = products => {
    products.map(q => {
        if(q.quantity === 0){
            quantity = 1
            return({
                ...q,
                quantity
            })
            return q
        }   
    })
}
