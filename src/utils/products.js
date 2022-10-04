const products = [
    {id: 1, title:'AM', category: 'arctic', price: 100, description:'Arctic Monkeys', stock:5 , pictureUrl:'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163'},
    {id: 2, title:'Favourite Worst Nightmare', category: 'arctic', price: 100, description:'Arctic Monkeys', stock: 3 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface'},
    {id: 3, title:'Definitely Maybe', category: 'oasis', price: 100, description:'Oasis', stock:4 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b2737c8f18614002cc5542f6c7aa'},
    {id: 4, title:'Be Here Now', category: 'oasis', price: 100, description:'Oasis', stock:6 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963'}
]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
    return promise;
}

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id)) 
        setTimeout(() => {
            return resolve(result);  
        },);
    })
    return promise;
}

export const getProductsByCategory = (categoryName) => {
    const promise = new Promise ((resolve) => {
        const results = products.filter((product) => product.category === categoryName)
        setTimeout(() => {
            return resolve(results);
        }, 2000);
    })
    return promise;
}