//=========================
// Table Rsesult HTML
//=========================
const result = (data, index) => {
    return `
        <tr>
            <td class="text-center"> ${index + 1}</td>
            
            <td>
                <span class="d-flex align-items-center">
                    <img class="product-img ms-3 rounded-circle" src="${data.thumbnail}" alt="${data.title}" />
                    <span class="mx-3">${data.title}</span>
                </span>
            </td>
                    
            <td class="text-center">${data.category}</td>
            
            <td class="text-center">${data.brand}</td>
            
            <td class="text-center">
                <del class="mx-2 text-danger">${(data.price * data.discountPercentage).toFixed(2)}</del>
                <span><b>&#36;</b>${data.price}</span>
            </td>

            <td class="text-center">
                <span class="d-flex align-items-center">
                    <ion-icon class="mx-2" style="color:#FFD700" name="star"></ion-icon>
                    ${data.rating}
                </span>
            </td>
            <td>
                <button style="font-size:17px;width:35px;height:35px" class="btn px-1" onclick="productDetailes(${data.id})" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <ion-icon class="text-info " name="eye"></ion-icon>
                </button>
                
                <button style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <ion-icon class="text-primary " name="create"  data-bs-toggle="tooltip" title="Disabled tooltip"></ion-icon>
                </button>
            
                <button style="font-size:17px;width:35px;height:35px" class="btn px-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <ion-icon class="text-danger " name="close" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></ion-icon>
                </button>
            </td>
        
        </tr>
    `;
}


//
//
//
const singleProductResult = (data) => {
    return `
    <div class="d-flex">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${data.thumbnail}" />
                    </div>
                    <ul class="images-list d-flex mt-2">
                        ${(data.images).map(el => `<li><img src="${el}" /></li>`)}
                    </ul>
                </div>
                <div class="product-content px-3">
                    <h3>${data.title}</h3>
                    <ul class="list-unstyled">
                        <li>
                            <ion-icon name="pricetag"></ion-icon>
                            <span class="mx-2">${data.brand}</span>
                        </li>
                        <li>
                            <ion-icon name="layers"></ion-icon>
                            <span class="mx-2">${data.category}</span>
                        </li>
                    </ul>
                    <p>${data.description}</p>
                    
                    <hr/>
                    
                    <div class="d-flex">
                        <div class="d-flex align-items-center">
                            <span class="qty me-2">QTY: </span>
                            <select class="form-select">
                                ${[...Array(10)].map((_, i) => `<option ${i == 0 && 'selected'} value="${i + 1}">${i + 1}</option>`)}
                            </select>
                        </div>
                        
                        <button type="button" class="btn btn-primary d-flex align-items-center justify-content-between mx-3">
                            <ion-icon class="mx-1" name="cart"></ion-icon>
                            Add to cart
                        </button>
                    </div>

                    <hr/>

                    <hr/>
                </div>
            </div>
            `;
}