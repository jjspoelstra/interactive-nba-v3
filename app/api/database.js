import { MongoClient } from 'mongodb';

export async function connectDB(year) {
  try {
    let dbString
    if (year == 2023){
      dbString = process.env.DB_STRING_1977_1990_2023
    } else if (year < 2023 && year >= 2007){
      dbString = process.env.DB_STRING_2007_2022
    } else if (year < 2007 && year >= 1991){
      dbString = process.env.DB_STRING_1991_2006
    }
    const dbURI = `${dbString}/${`stats_${year}`}`;
    console.log(dbURI)
    const client = new MongoClient(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await client.connect();
    console.log(`MongoDB Connected to database: ${`stats_${year}`}`);
    return client.db(`stats_${year}`); // Returning the db instance
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
