//=============
// Variables
//=============
// var api = 'https://dummyjson.com';
var api = 'http://localhost:3000';

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
            var result = data;
            console.log('target:', target)
            console.log('result:', result)
            if (target == 'users') {
                usersResult(target, result)
            } else if (target == 'products') {
                productResult(target, result)
            } else if (target == 'posts') {
                postsResult(target, result)
            } else if (target == 'categories') {
                categoriesResult(target, result)
            } else if (target == 'brands') {
                brandsResult(target, result)
            }else if (target == 'orders') {
                ordersResult(target, result)
            }else if (target == 'roles') {
                rolesResult(target, result)
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
    sweetAlert('warning', 'Are you sure?', "You won't be able to revert this!")
        .then((result) => {
            if (result.isConfirmed) {
                // send the request to the api
                fetch(`${api}/${target}/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.isDeleted) {
                            $(`tr#${id}`).fadeOut(300, () => $(`#${id}`).remove())
                            toast('success', 'Data deleted successfully')
                            // update data table after delete
                            $('#data-table').DataTable()
                        } else {
                            toast('error', 'Something went wrong')
                        }
                    })
                    .catch(err => {
                        toast('error', 'Something went wrong, Contact Admin')
                        console.log(err)
                    });
            }
        })

}

//=======================================
// Update Data based on ID and target
//=======================================
const showUpdateData = (target, type, id) => {
    var title = type == 'edit' ? 'Edit' : 'View';
    // show data to edit
    fetch(`${api}/${target}/${id}`)
        .then(res => res.json())
        .then(data => {
            // check if type is edit or view to show/hide the save button
            if (type != 'edit') {
                $('.btn-save').hide();
            } else {
                $('.btn-save').show();
            }
            // check the target to show the right data
            if (target == 'products') {
                $('.modal-title').html(title + ' Product');
                $('.modal-body').html(showEditProductResult(type, data));
                $('#modal').modal('show');
            } else if (target == 'users') {
                $('.modal-title').html(title + ' User');
                $('.modal-body').html(showEditUserResult(type, data));
                $('#modal').modal('show');
            } else if (target == 'posts') {
                $('.modal-title').html(title + ' Post');
                $('.modal-body').html(showEditPostResult(type, data));
                $('#modal').modal('show');
            } else if (target == 'categories') {
                $('.modal-title').html(title + ' Category');
                $('.modal-body').html(showEditCategoryResult(type, data));
                $('#modal').modal('show');
            } else if (target == 'brands') {
                $('.modal-title').html(title + ' Brand');
                $('.modal-body').html(showEditBrandResult(type, data));
                $('#modal').modal('show');
            } else {
                toast('error', 'Something went wrong, Contact Admin')
            }
            // check the type to disable/enable the inputs
            checkModalType(type);
        }).catch(err => {
            toast('error', 'Something went wrong, Contact Admin')
            console.error(err)
        }
        );
}


