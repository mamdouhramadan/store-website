// Sweet Alert Function
function sweetAlert(type, title = "Are you sure?", text = "You won't be able to revert this!") {
    Swal.fire({
        title,
        text,
        icon: type,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });
}

//=========================
// Toast Function
//=========================
function toast(type, text) {
    const options = {
        hideAfter: 3000,
        position: 'top-right',
        showHideTransition: 'slide',
        icon: type,
        heading: type,
        text: text,
    }
    $.toast(options);
}

//===============================================
// check the type to disable/enable the inputs
//===============================================
const checkModalType = (type) => {
    if (type == 'edit') {
        $('.modal input,.modal select,.modal textarea').removeAttr('disabled');
    } else {
        $('.modal input,.modal select,.modal textarea').attr('disabled', 'disabled');
    }
}