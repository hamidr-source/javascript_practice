let products =[
  {title: "رب گوجه فرنگی" quantity: 8},
  {title:"روغن آفتابگردان" quantity: 0}
  {title:"تن ماهی" quantity: 5}
  {title: "ماهی" quantity: 0}
]
let pdroducts1 = products => {
  arr.map(q => 
         if(q.quantity !== 1){
            return{
            ...produtcs,
              quantity:1
            }
            else{
               return q
            }
  }
         )
}
