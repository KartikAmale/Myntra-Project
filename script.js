 let bagItems;
onLoad();
 function onLoad(){
 let bagItemsStr = localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
 displayItemsOnHomePage();
 displayBagIcon();
 }


 function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
 }

 function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText =bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
 }

 function displayItemsOnHomePage(){

    let itemsContainerElement = document.querySelector('.items_container');
    if(!itemsContainerElement){
        return;
    }
let innerHtml = ''
items.forEach(item => {


    innerHtml += `
<div class="item_container">
          <img class="item_image" src="${item.image}" alt="Item Image ">
          <div class="rating">
            ${item.rating.stars} ★ | ${item.rating.count}
          </div>
          <div class="company_name">${item.company}</div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price"> Rs ${item.current_price}</span>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}
            % OFF)</span>
          </div>
          <button class="btn_add_bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`

});
itemsContainerElement.innerHTML = innerHtml;

 }


// let item = {
//     item_image : 'Image/1.png',
//     rating: {
//         stars: 4.5,
//         noOfReviews: 1400,
//     },
//     company_name: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     current_price: 606,
//     original_price: 1045,
//     discount: 42,
// }

// itemsContainerElement.innerHTML = `
// <div class="item_container">
//           <img class="item_image" src="${item.item_image}" alt="Item Image ">
//           <div class="rating">
//             ${item.rating.stars} ★ | ${item.rating.noOfReviews}
//           </div>
//           <div class="company_name">${item.company_name}</div>
//           <div class="item_name">${item.item_name}</div>
//           <div class="price">
//             <span class="current_price"> Rs ${item.current_price}</span>
//             <span class="original_price">Rs ${item.original_price}</span>
//             <span class="discount">(${item.discount}
//             % OFF)</span>
//           </div>
//           <button class="btn_add_bag">Add to Bag</button>
//         </div>`;