import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const products = [
  {id: 1, title:'AM', category: 'arctic', price: 100, description:'Arctic Monkeys', stock:5 , pictureUrl:'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163'},
  {id: 2, title:'Favourite Worst Nightmare', category: 'arctic', price: 100, description:'Arctic Monkeys', stock: 3 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface'},
  {id: 3, title:'Definitely Maybe', category: 'oasis', price: 100, description:'Oasis', stock:4 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b2737c8f18614002cc5542f6c7aa'},
  {id: 4, title:'Be Here Now', category: 'oasis', price: 100, description:'Oasis', stock:6 ,  pictureUrl:'https://i.scdn.co/image/ab67616d0000b27365b227c58f4d337f5d41a963'}
]

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}

