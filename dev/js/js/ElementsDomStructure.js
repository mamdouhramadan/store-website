const table = $('.dataTable tbody')
//=========================
// Products Table HTML
//=========================
const productResult = (data) => {
    return data.map((el, index) => {
        const { title, brand, category, price, discountPercentage, rating, thumbnail } = el;
        return table.append(`
        <tr>
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
            <td>${actionsTableElements(el)}</td>
        
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
const usersResult = (data) => {
    return data.map((el, index) => {
        var { firstName, maidenName, lastName, email, phone, birthDate, address, image } = el;
        return table.append(`
            <tr>
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
                    ${actionsTableElements(data)}
                </td>
            
            </tr>
    `)
    });
}

//============================
// Posts Table HTML Content
//============================
const postsResult = (data) => {
    return data.map((el, index) => {
        var { title, body, tags, reactions } = el;
        return table.append(`
            <tr>
                <td class="text-center"> ${index + 1}</td>
                <td>
                <img class="post-img ms-3 rounded-circle" src="https://picsum.photos/50/50" alt="${title}" />
                <span class="mx-2">${title}</span>
                </td>
                <td class="text-center"> ${body.substring(0,50)}</td>
                <td class="text-center post-tage"> 
                    ${tags.map(tag => `<span class="badge bg-primary mx-1">${tag}</span>`)}
                 </td>
                <td class="text-center"> 
                    <i class="fas fa-comment"></i> 
                    <span class="mx-1">${reactions}</span>
                </td>
                <td>${actionsTableElements(el)}</td>
                </tr>
    `)
    });
}

//=================================
// Ctegories Table HTML Content
//==================================
const categoriesResult = (data) => {
    return data.map((el, index) => {
        
        return table.append(`
            <tr>
                <td class="text-center"> ${index + 1}</td>
                <td>
                    <span class="mx-2">${el}</span>
                </td>
                <td style="width:150px">${actionsTableElements(index)}</td>
            </tr>
    `)
    });
}

//=====================================
// Actions Table HTML Content
//=====================================
const actionsTableElements = (data) => {
    return `
        <div class="d-flex justify-content-center">
            <button style="font-size:17px;width:35px;height:35px" class="btn px-1" onclick="productDetailes(${data.id})" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                <ion-icon class="text-info " name="eye"></ion-icon>
            </button>
            
            <button onclick="alert(${data.id})" style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                <ion-icon class="text-primary " name="create"  data-bs-toggle="tooltip" title="Disabled tooltip"></ion-icon>
            </button>
        
            <button onclick="alert(${data.id})" style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                <ion-icon class="text-danger " name="close" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></ion-icon>
            </button>
        </div>
    `;
}