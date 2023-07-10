import { connectDB } from "../../database";
import NodeCache from "node-cache";
import { NextResponse } from "next/server";

const cache = new NodeCache();

export async function GET(request) {
  const year = request.url.slice(-4);

  // Check if data exists in the cache
  const cachedData = cache.get(year);
  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  // Data not found in the cache, fetch from the database
  const db = await connectDB(year);

  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map((collection) => collection.name);

  const collectionData = [];
  for (const collectionName of collectionNames) {
    const data = await db.collection(collectionName).find({}).toArray();
    collectionData.push({
      collectionName,
      data
    });
  }

  
  cache.set(year, collectionData, 100000); 

  return NextResponse.json(collectionData);
}
