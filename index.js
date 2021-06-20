let PRODUCTS = [{
    id:0,title:'Tesla Model S', body:'Some Tesla Model S information.', price:60000,img:'https://img.gazeta.ru/files3/670/13630670/tesla-pic905-895x505-19575.jpg'
},
{
    id:1,title:'Tesla Model 3',body:'Some Tesla Model 3 information.', price:30000,img:'https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png'
},{
    id:2,title:'Tesla Model X',body:'Some Tesla Model X information.', price:50000,img:'https://i.infocar.ua/i/12/4757/1400x936.jpg'
},
{
    id:3,title:'Tesla Model Y',body:'Some Tesla Model Y information.', price:45000,img:'https://auto.ironhorse.ru/wp-content/uploads/2019/03/modelY-front.jpg'
}
]
let $cards = render();
function render(){
    return cards = PRODUCTS.map(c => {
        return new Card({
            id:c.id,
            title:c.title,
            price:c.price,
            img:c.img,
            body:c.body
        });
    })
}

const priceModal = $.modal({
    title:'Price',
    closable:true,
    width:'400px',
    footerButtons:[
        {
            text:'Ok',style:'primary',handler(){
                priceModal.close();
            }
        }
    ]
});


document.addEventListener('click',event =>{
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const car = $cards.filter(card => card.id === id);

    if(btnType === 'price'){

        priceModal.setContent(`<p>Price of ${car[0].title}: <strong>${car[0].price}$</strong></p>`);
        priceModal.open();
    }if(btnType === 'remove'){
        const confirm = $.confirm({
            title:'Delte',
            content:`<p>You want to delete a ${car[0].title}.<br><strong>Are you sure ?</strong></p>`
        }).
        then(()=>{
            PRODUCTS = PRODUCTS.filter(car=>car.id !== id);
            $cards.forEach(c => c.delete())
            $cards = render();
        
        }).
        catch(()=>console.log("catch"));
    }
})


