import { Product } from '../types/interfaces';
import { firestore } from '../utils/firebase';

export const getAllProducts = async(req: any, res: any) => {
    const allProducts: any = [];
    try {
        const products = await firestore.collection('products').limit(25).get();
        products.forEach((product) => {
            allProducts.push(product);
        })
        return res.status(200).json(allProducts);
    } catch (e) {
        return res.status(400).error(e.message)
    }
} 
export const getProductsByCategory = async(req: any, res: any) => {
    const allProducts: any = [];
    const category = req.query.category;
    try {
        const products = await firestore.collection('products').where('category', '==', category).limit(25).get();
        products.forEach((product) => {
            allProducts.push(product);
        })
        return res.status(200).json(allProducts);
    } catch (e) {
        return res.status(400).error(e.message)
    }
} 

export const addProduct =async(req: any, res: any) => {
    const product: Product = {
        ownerId: req.user.id,
        ownerName: req.user.name,
        ownerAvatar: req.user.avatar,
        ownerEmail: req.user.email,
        productName: req.body.name,
        category: req.body.category,
        productAspectRatio: req.body.aspectRatio,
        prizeinRupees: req.body.number,
        addedDate: new Date().toISOString(),
        thumbnail: req.body.thumbnail
    }
    try {
        await firestore.collection('products').add(product);
        return res.status(200);
    } catch (e) {
        return res.status(400).error(e.message)
    }
} 
