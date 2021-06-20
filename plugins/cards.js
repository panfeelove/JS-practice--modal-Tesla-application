function _createCard(options){
    const DEFAULT_WIDTH = '18rem';
    const PRICE = options.PRICE || 0;
    const ID = options.ID;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = options.width || DEFAULT_WIDTH;
    card.innerHTML = `
        <img class="card-img-top" src="${options.img}" alt="Card image cap">
        <div class="card-body" data-content>
            <h5 class="card-title">${options.title || 'Title'}</h5>
            <p class="card-text">${options.body || 'Content'}</p>
            <a href="#" class="btn btn-primary" data-btn = "price" data-id="${options.id}">Price</a> 
            <a href="#" class="btn btn-danger" data-btn = "remove" data-id="${options.id}">Delete</a> 
        </div> 
    `;

    document.body.querySelector('.card-wrapper').appendChild(card);

    return card
}

class Card{
    constructor(options){
        this.id = options.id;
        this.title = options.title;
        this.price = options.price;
        this.body = options.body;
        this.$card = _createCard(options);

    }

    delete(){
        this.$card.remove();
    }
}