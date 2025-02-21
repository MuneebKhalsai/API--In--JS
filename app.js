const div = document.querySelector('.container');

axios ('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data)
    res.data.map((item) => {
        div.innerHTML += `
        <div class = "card">
        <h3> Title: ${item.title.slice(0,20)}</h3>
        
        <img width = "170px" height="140px"  src = "${item.image}" alt = "imgae product"  >
        <h5> Description: ${item.description.slice(0,50)}</h5>
            <h5> Price: ${item.price} <h5>
        <div> <button> Add To Cart </button> </div>
    
        </div>

        `
        
    })
})
.catch((err) => {
    console.log(err)
})


