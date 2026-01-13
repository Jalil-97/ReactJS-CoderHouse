import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebaseConfig.js"

export const getProductos = async (categoria) => {
  const productosCollection = collection(db, "products")

  const consulta = categoria
    ? query(productosCollection, where("categoria", "==", categoria))
    : productosCollection

  const snapshot = await getDocs(consulta)

  return snapshot.docs.map(doc => ({
    id: doc.id,      
    ...doc.data()
  }))
}

export const getUnProducto = async (id) => {
  const productoRef = doc(db, "products", id)
  const snapshot = await getDoc(productoRef)

  if (!snapshot.exists()) {
    return null
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  }
}
