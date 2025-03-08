import { connectDB } from "../db/connectDB";
import Product from "../models/product.model";

export async function GET(request: Request) {
  await connectDB();

  try {
    const products = await Product.find({}).sort({ createdAt: -1 });

    return Response.json({ products }, { status: 200 });
  } catch (error: any) {
    console.log("Error in fetching products");

    return Response.json({ message: error.message }, { status: 400 });
  }
}
