const loading = document.getElementById("loading");
const products = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        // console.log(response);
        // let response = response.json()
        // console.log(response);
        // return response
        // console.log(response.json())
        return response.json();
    })
    .then((product) => {
        console.log(product);

        loading.style.display = "none";

        product.map((product) => {
            // console.log(product);
    

            products.innerHTML += 
        `
            <div class="card">
            <img src="${product.image}" alt="">
            <p>Category : ${product.category}</>
            <h3>${product.title}</h3>
            <h2>$${product.price}</h2>
            <button>Add To Cart</button>
        </div>
        `

        
        });
    })
    .catch( ( error ) => {
        loading.innerText = 'Something wents wrong! please try again...'
    })
