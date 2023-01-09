//=============
// Variables
//=============
var api = 'https://dummyjson.com';

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
                usersResult(target, result)
            } else if (target == 'products') {
                productResult(target, result)
            } else if (target == 'posts') {
                postsResult(target, result)
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

//=======================================
// Delete Data based on ID and target
//=======================================
const deleteData = (target, id) => {
    console.log('id: ', id)
    // sweet alert
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('yes delete it')
            // send the request to the api
            fetch(`${api}/${target}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isDeleted) {
                        $(`tr#${id}`).fadeOut(300, () => $(`#${id}`).remove())
                        // jquery toast
                        $.toast({
                            heading: 'Success',
                            text: 'Data deleted successfully',
                            showHideTransition: 'slide',
                            icon: 'success',
                            position: 'top-right',
                            hideAfter: 3000
                        })
                        // update data table after delete
                        $('#data-table').DataTable()
                    }else{
                        $.toast({
                            heading: 'Error',
                            text: 'Something went wrong',
                            showHideTransition: 'slide',
                            icon: 'error',
                            position: 'top-right',
                            hideAfter: 3000
                        })
                        console.log('Something went wrong')
                    }
                })
                .catch(err => console.log(err));
        }
    })

}