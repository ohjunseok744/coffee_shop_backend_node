import User from '../models/User.js'; // User 모델 가져오기
import bcrypt from 'bcryptjs'; // bcryptjs 라이브러리 가져오기

// Update User
export const updateUser = async (req, res) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await User.findById(req.params.id);
      if (req.body.password) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const updatedUser = await User.findByIdAndUpdate(
          req.user.id,
          {
            $set: { ...req.body, password: hashedPassword },
          },
          { new: true }
        );
        const { password, ...updatedInfo } = updatedUser._doc;
        return res.status(200).json(updatedInfo);
      } else {
        const updatedUser = await User.findByIdAndUpdate(
          req.user.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        const { password, ...updatedInfo } = updatedUser._doc;
        return res.status(200).json(updatedInfo);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
};


// Delete User
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Single User
export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userInfo } = user._doc;
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get User Stats
export const getUserStats = async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.getFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
