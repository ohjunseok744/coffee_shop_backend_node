import Cart from '../models/Cart.js';

export const addCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteCart = async (req, res) => {
  try {
    // 여기에 카트 삭제 로직을 구현합니다.
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCart = async (req, res) => {
  try {
    // 여기에 특정 사용자의 카트를 가져오는 로직을 구현합니다.
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllCarts = async (req, res) => {
  try {
    // 여기에 특정 사용자의 카트를 가져오는 로직을 구현합니다.
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};