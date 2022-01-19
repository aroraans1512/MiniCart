let data =[
    {
      "id": 123442,
      "name": "Product 1",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product1.jpeg",
      "price": 39,
      "currency": "$"
    },
    {
      "id": 123443,
      "name": "Product 2",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product2.jpeg",
      "price": 39,
      "currency": "$"
    }
  ];
fetch("https://dnc0cmt2n557n.cloudfront.net/products.json")
.then((res)=>res.json()).then((res1)=>{
let final=  res1.products.map(function(row) {
    return { id : parseFloat(row.id), name : row.title,
      desc:row.desc, image:row.image,price:parseFloat(row.price),
    currency:row.currency}
 });
  console.log("final:",final);
return  final;});
console.log(data);
export default data;