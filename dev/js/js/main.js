//=============
// Variables
//=============
var api = 'https://dummyjson.com';

$(document).ready(function () {
    // getProducts();
    getCategories();
})

//=======================
// Get All Products 
//=======================

var getProducts = (page = 0) => {
    const limit = 10;
    fetch(`${api}/products?limit=${limit}&skip=${limit * page}`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => console.log(err))
        .finally(() => $('.preloader').fadeOut(300))
}

var page = 1;
const nextPage = () => {
    getProducts(page);
    page++;
    console.log(page)
}

const prevPage = () => {
    --page;
    console.log(page)
    getProducts(page);
}

//=========================
// Table Rsesult HTML
//=========================
var setProducts = (data) => {
    $('.dataTable tbody').html('')
    data.map((el, index) => $('.data-table').append(`<tbody>${result(el, index)}</tbody>`))
}

//=======================
// Get a single product
//=======================
const productDetailes = async (id) => {

    $('.preloader').fadeIn(300)

    await fetch(`${api}/products/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            $('.preloader').fadeOut(300)
            $('#modal').modal('show')
            $('.modal-title').html(`${data.title}`);
            $('.product-detailes').html(singleProductResult(data));
        }).catch(err => {
            console.log(err);
            $('.preloader').fadeOut(300)
        })
        .finally(() => {
            $('.preloader').fadeOut(300)
        });

    console.log('ID: ', id)
}

//==============================
// Get all categories
//==============================
const getCategories = () => {
    fetch(`${api}/products/categories`)
        .then(res => res.json())
        .then(data => $('.select-category').append(data.map(el => `<option class="" valu="${el}">${el}</option>`)))
}

//==============================
// Get products of a category
//==============================           
//fetch(`${api}/products/category/smartphones`).then(res => res.json()).then((data) => console.log(data));

//=======================
// Get Table Data 
//=======================
var getTableData = (target) => {
    // fetch the data from the api
    fetch(`${api}/${target}`)
        // convert the data to json
        .then(res => res.json())
        .then(data => {
            // store the data target in a variable
            var result = data[target];
            if (target == 'users') {
                usersResult(result)
            } else if (target == 'products') {
                productResult(result)
            } else if (target == 'posts') {
                postsResult(result)
            } else if (target == 'products/categories') {
                // we used the (data) instead of (result) because the result is an array 
                categoriesResult(data)
            }
        })
        .catch(err => {
            console.log(err)
            $('.preloader').fadeOut(300);
        })
        .finally(() => {
            $('#data-table').DataTable()
            $('.preloader').fadeOut(300);
        })
}
