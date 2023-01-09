const table = $('.dataTable tbody')
//=========================
// Products Table HTML
//=========================
const productResult = (target, data) => {
    return data.map((el, index) => {
        const { id, title, brand, category, price, discountPercentage, rating, thumbnail } = el;
        return table.append(`
        <tr id="${id}">
            <td class="text-center"> ${index + 1}</td>
            <td>
                <span class="d-flex align-items-center">
                    <img class="product-img ms-3 rounded-circle" src="${thumbnail}" alt="${title}" />
                    <span class="mx-3">${title}</span>
                </span>
            </td>   
            <td class="text-center">${category}</td>
            <td class="text-center">${brand}</td> 
            <td class="text-center">
                <del class="mx-2 text-danger">${(price * discountPercentage).toFixed(2)}</del>
                <span><b>&#36;</b>${price}</span>
            </td>
            <td class="text-center">
                <span class="d-flex align-items-center justify-content-center">
                    <ion-icon class="mx-2" style="color:#FFD700" name="star"></ion-icon>
                    ${rating}
                </span>
            </td>
            <td>${actionsTableElements(target, id)}</td>
        
        </tr>
    `)
    });
}

//====================================
// Single Product Result HTML
//====================================
const singleProductResult = (data) => {
    return data.map(el => {
        var { title, brand, category, description, price, discountPercentage, rating, thumbnail, images } = el;
        return table.append(`
    <div class="d-flex">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${thumbnail}" />
                    </div>
                    <ul class="images-list d-flex mt-2">
                        ${(images).map(img => `<li><img src="${img}" /></li>`)}
                    </ul>
                </div>
                <div class="product-content px-3">
                    <h3>${title}</h3>
                    <ul class="list-unstyled">
                        <li>
                            <ion-icon name="pricetag"></ion-icon>
                            <span class="mx-2">${brand}</span>
                        </li>
                        <li>
                            <ion-icon name="layers"></ion-icon>
                            <span class="mx-2">${category}</span>
                        </li>
                    </ul>
                    <p>${description}</p>
                    
                    <hr/>
                    
                    <div class="d-flex">
                        <div class="d-flex align-items-center">
                            <span class="qty me-2">QTY: </span>
                            <select class="form-select">
                                ${[...Array(10)].map((_, i) => `<option ${i == 0 && 'selected'} value="${i + 1}">${i + 1}</option>`)}
                            </select>
                        </div>
                        
                        <button onclick="alert(${JSON.stringify(el)})" type="button" class="btn btn-primary d-flex align-items-center justify-content-between mx-3">
                            <ion-icon class="mx-1" name="cart"></ion-icon>
                            Add to cart
                        </button>
                    </div>

                    <hr/>
                    <h4 class="my-3">Price</h4>
                    <div class="d-flex align-items-center">
                        <del class="mx-2 text-danger">${(price * discountPercentage).toFixed(2)}</del>
                        <span><b>&#36;</b>${price}</span>
                    </div>
<br/>
                    <h4 class="my-3">Rating</h4>
                    <div class="d-flex align-items-center">
                        <ion-icon class="mx-2" style="color:#FFD700" name="star"></ion-icon>
                        <span>${rating}</span>
                    </div>
                    <hr/>
                </div>
            </div>
    `)
    }
    );
}



//=====================================
// Users Table HTML Content
//=====================================
const usersResult = (target, data) => {
    return data.map((el, index) => {
        var { id, firstName, maidenName, lastName, email, phone, birthDate, address, image } = el;
        return table.append(`
            <tr id="${id}">
                <td class="text-center"> ${index + 1}</td>
                
                <td>
                    <span class="d-flex align-items-center">
                        <img class="product-img ms-3 rounded-circle" src="${image}" alt="${firstName} ${maidenName} ${lastName}" />
                        <span class="mx-3">${firstName} ${maidenName} ${lastName}</span>
                    </span>
                </td>
                        
                <td class="text-center">${email}</td>
                
                <td class="text-center">${phone}</td>
                
                <td class="text-center">  ${birthDate} </td>

                <td class="text-center">  ${address.address} </td>
                
                <td>
                    ${actionsTableElements(target, id)}
                </td>
            
            </tr>
    `)
    });
}

//============================
// Posts Table HTML Content
//============================
const postsResult = (target, data) => {
    return data.map((el, index) => {
        var { id, thumbnail, title, excerpt, tags, categories, date } = el;
        return table.append(`
            <tr id="${id}">
                <td class="text-center"> ${index + 1}</td>
                <td style="width:300px">
                    <div class="d-flex align-items-center">
                        <img class="post-img rounded" width="60" height="60" style="object-fit:cover" src="${thumbnail}" alt="${title.rendered}" />
                        <div class="mx-3">
                        <span class="d-block">${title.rendered} </span> 
                        <span class="d-block text-secondary">${moment(date).format("Do / MMM / YYYY")}</span>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <span class="mx-1">${excerpt.rendered.substring(0, 50) + '...'}</span>
                </td>
                <td class="text-center">
                    <span class="mx-1">${tags.map(tag => `<span class="badge badge-primary mx-2">${tag.name}</span>`)}</span>
                </td>
               <td class="text-center">
                <span class="mx-1">${categories.map(cat => `<span class="badge badge-primary mx-2">${cat.name}</span>`)}</span>
            </td>
            <td>${actionsTableElements(target, id)}</td> </tr >
    `)
    });
}

//=================================
// Brands Table HTML Content
//==================================
const brandsResult = (target, data) => {
    return data.map((el, index) => {
        const { id, name, link } = el;
        return table.append(`
            <tr id = "${index}" >
                <td class="text-center"> ${index + 1}</td>
                <td>${name} </td>
                <td class="text-center"> <a href="${link}" class="btn btn-primary btn-sm">Official Website</a></td>
                <td style="width:150px">${actionsTableElements(target, index)}</td>
            </tr>
    `)
    });
}

//=================================
// Ctegories Table HTML Content
//==================================
const categoriesResult = (target, data) => {
    return data.map((el, index) => {
        const { id, name, description, image } = el;
        return table.append(`
            <tr id = "${id}" >
                <td class="text-center"> ${index + 1}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <img class="product-img ms-3 rounded-circle" src="${image}" alt="${name}" />
                        <span class="mx-2">${name}</span>
                    </div>
                </td>
                <td class="text-center"> ${description}</td>
                <td style="width:150px">${actionsTableElements(target, id)}</td>
            </tr>
    `)
    });
}

//=================================
// Roles Table HTML Content
//==================================
const rolesResult = (target, data) => {
    return data.map((el, index) => {
        const { id, name, description, permitions } = el;
        return table.append(`
            <tr id = "${id}" >
                <td class="text-center"> ${index + 1}</td>
                <td>
                        <span class="mx-2"><b>${name}</b></span>
                </td>
                <td class="text-center">
                        ${permitions.map((item) => `<span style="font-size: 15px" class="mx-2 badge badge-primary">${item.name}</span>`)}
                </td>
                <td class="text-center"> ${description}</td>
                <td style="width:150px">${actionsTableElements(target, id)}</td>
            </tr>
    `)
    });
}

//=====================================
// Actions Table HTML Content
//=====================================
const actionsTableElements = (target, id) => {
    return `
    <div class="d-flex justify-content-center" >
            <button onclick="showUpdateData('${target}','show',${id})"  style="font-size:17px;width:35px;height:35px" class="btn px-1" onclick="productDetailes(${id})" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" data-mdb-toggle="modal" data-mdb-target="#mainModal">
                <ion-icon class="text-info " name="eye"></ion-icon>
            </button>
            
            <button onclick="showUpdateData('${target}','edit',${id})" style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" data-mdb-toggle="modal" data-mdb-target="#mainModal">
                <ion-icon class="text-primary " name="create"  data-bs-toggle="tooltip" title="disabledd tooltip"></ion-icon>
            </button>
        
            <button onclick="deleteData('${target}',${id})" style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                <ion-icon class="text-danger " name="close" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></ion-icon>
            </button>
        </div >
    `;
}


//=====================================
// Edit Product Result
//=====================================
const showEditProductResult = (data) => {
    const { title, price, description, thumbnail, brand, category } = data;
    // check if type is edit or show

    return `
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" value="${title}" >  
                </div>  
                <div class="mb-3">  
                    <label for="price" class="form-label">Price</label>
                    <input type="number" class="form-control" id="price" value="${price}" >  
                </div>
                <div class="mb-3">  
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" >${description}</textarea>
                </div>
                <div class="mb-3">
                    <label for="brand" class="form-label">Brand</label>
                    <select class="form-select" id="brand" >
                        <option value="${brand}">${brand}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category" >
                        <option value="${category}">${category}</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-md-6">

                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input class="form-control" type="file" id="image">
                </div>
                <div class="mb-3">
                    <img src="${thumbnail}" class="img-fluid" alt="${title}">
                </div>
            </div>
        </div>
    `;
}

//=====================================
// Edit User Result
//=====================================
const showEditUserResult = (data) => {
    const { firstName, maidenName, lastName, email, phone, university, image } = data;



    return `
        <div class="row">
            <div class="col-12">
                <div class="row" >   
                    <div class="mb-3 col-4">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" value="${firstName}" > 
                    </div>
                    <div class="mb-3 col-4">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" value="${maidenName}" > 
                    </div>
                    <div class="mb-3 col-4">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" value="${lastName}" > 
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${email}" >
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" value="${phone}" >
                </div>
                <div class="mb-3">  
                    <label for="university" class="form-label">University</label>
                    <input type="text" class="form-control" id="university" value="${university}" >
                </div>
                <div class="mb-3 row">
                    <div class="col-6">
                        <label for="image" class="form-label">Image</label>
                        <input class="form-control" type="file" id="image" > 
                    </div>
                    <div class="col-6">
                        <img src="${image}" class="img-fluid border" alt="${firstName + ' ' + maidenName + ' ' + lastName}">
                    </div> 
                </div> 
            </div>
        </div>
    `;
}

//=====================================
// Edit Post Result
//=====================================
const showEditPostResult = (data) => {
    const { id, title, content, thumbnail, categories, tags } = data;

    return `
        <div class="row">
            <div class="col-12">

                <div class="mb-3">

                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" value="${title.rendered}" >
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" >${content.rendered}</textarea>
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <select class="form-select" id="category" >
                        <option value="${categories[0]['id']}">${categories[0]['name']}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="tags" class="form-label">Tags</label>
                    <select class="form-select" id="tags" >
                        <option value="${tags[0]['id']}">${tags[0]['name']}</option>
                    </select>
                </div>
            </div>
            <div class="col-12 row">
                <div class="mb-3 col-6">
                    <label for="image" class="form-label">Image</label>
                    <input class="form-control" type="file" id="image" >
                </div>
                <div class="mb-3 col-6">
                    <img src="${thumbnail}" class="img-fluid" alt="${title}">
                </div>
            </div>
        </div>
    `;
}

//=====================================
// Edit Category Result
//=====================================
const showEditCategoryResult = (data) => {
    const { name, description, image } = data;

    return `
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" value="${name}" >  
                </div>
                <div class="mb-3">

                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" >${description}</textarea>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input class="form-control" type="file" id="image" >
                </div>
                <div class="mb-3">
                    <img src="${image}" class="img-fluid" alt="${name}">
                </div>
            </div>
        </div>
    `;
}

//=====================================
// Edit Brand Result
//=====================================
const showEditBrandResult = (data) => {
    const { name, link } = data;

    return `
        <div class="row">
            <div class="col-12 ">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" value="${name}" >
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Link</label>
                    <input class="form-control" id="description" rows="3"  value="${link}"/> 
                </div>
            </div>
        </div>
    `;
}
