const div = document.querySelector('.container');

axios ('https://fakestoreapi.com/products')
.then((res) => {
    console.log(res.data)
    res.data.map((item) => {
        div.innerHTML += `
        <div class = "card">
        <h3> Title: ${item.title}</h3>
        <img src = "${item.image}" alt = "imgae product" width = "150px" 
        <h5> Price: ${item.price} <h5>
        </div>

        `
        
    })
})
.catch((err) => {
    console.log(err)
})


