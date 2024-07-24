// src/controllers/product.js
import Product from '../models/Product.js';

// 새 제품 추가 컨트롤러
export const addProduct = async (req, res) => {
  try {
    // 새로운 제품 객체 생성, img 필드는 업로드된 파일 URL 또는 기본 URL
    const newProduct = new Product({
      ...req.body,
      img: req.file ? `/uploads/${req.file.filename}` : req.body.img,
    });
    // 제품 저장
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 제품 수정 컨트롤러
export const updateProduct = async (req, res) => {
  try {
    // 제품 업데이트, img 필드는 업로드된 파일 URL 또는 기본 URL
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
          img: req.file ? `/uploads/${req.file.filename}` : req.body.img,
        },
      },
      { new: true } // 업데이트된 문서 반환 옵션
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 제품 삭제 컨트롤러
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

// 단일 제품 조회 컨트롤러
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 모든 제품 조회 컨트롤러
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
