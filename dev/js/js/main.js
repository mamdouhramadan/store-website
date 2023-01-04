//=============
// Variables
//=============
var api = 'https://dummyjson.com';

$(document).ready(function () {
    getProducts();
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
        .finally(() => $('.preloader').hide(300))
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
    $('.products-table tbody').html('')
    data.map((el, index) => $('.products-table tbody').append(result(el, index)))
}


//=========================
// Single Product Data 
//=========================

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

//=======================
// Search products
//=======================
const searchProduct = async () => {

    let query = $('#search').val();
    let search = $('#search').closest('.input-group');

    if (query != '') {
        alert(query)
        await fetch(`${api}/products/search?q=${query}`)
            .then(res => res.json())
            //.then(data => console.log(data.products))
            .then(data => {
                let { products } = data
                if (products.length < 1) {
                    $.toast({
                        heading: 'Error',
                        text: 'There is no data ',
                        showHideTransition: 'fade',
                        icon: 'error',
                        position: 'top-left',
                    })
                }
                setProducts(products)
            });
        search.removeClass('border-danger')
        $('.clear-search').removeClass('d-none')
    } else {
        search.addClass('border-danger').css('border-width', '2px')
    }
}

//======================
// Clear Search Result 
//=====================
const clearSearch = () => {
    getProducts();
    $('.clear-search').addClass('d-none')

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