import  usersModel from "./models/users.models.js";

export default class Users {
    constructor() {
        console.log('Working users with DB');
    }

    getByEmail = async(email) => {
        const user = await usersModel.findOne({email}).lean();
        return user;
    }

    save = async(user) => {
        const result = await usersModel.create(user);
        return result; 
    }

    getUserById = async (id) => {
        const result = await usersModel.findById({ _id: id}).lean();
        return result;
    }
    
    addCartToUser = async (userId, cartId) => {
        try {
            // Buscar al usuario por su ID
            const user = await usersModel.findById(userId);
    
            if (!user) {
                req.logger.error('Usuario no encontrado');
                return;
            }
    
            if (!user.carts || user.carts.length === 0) {
                // Si el usuario no tiene un carrito, crea uno nuevo
                await usersModel.findByIdAndUpdate(userId, { $push: { carts: { cart: cartId } } }, { new: true });
            } else {
                req.logger.warn('El usuario ya tiene un carrito');
            }
        } catch (error) {
            req.logger.error('Error al agregar carrito al usuario:', error);
        }
    }
} 