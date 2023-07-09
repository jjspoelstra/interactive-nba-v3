import { connectDB } from "../../database";
import { NextResponse } from "next/server";

export async function GET(request) {
  const year = request.url.slice(-4);
  const db = await connectDB(year);
  
  const collections = await db.listCollections().toArray();
  const collectionData = [];

  for (const collection of collections) {
    const collectionName = collection.name;
    const data = await db.collection(collectionName).find({}).toArray();
    collectionData.push({
      collectionName,
      data
    });
  }
  
  return NextResponse.json(collectionData);
}
