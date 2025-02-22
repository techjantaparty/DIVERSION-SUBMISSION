import mongoose from "mongoose";

const LawyerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_rating: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
  },
  { timestamps: true }
);

const Lawyer =
  mongoose.models.Lawyer || mongoose.model("Lawyer", LawyerSchema);

export default Lawyer;
