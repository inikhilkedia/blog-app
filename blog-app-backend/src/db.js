import { MongoClient } from "mongodb";

let db;

const connectToDb = async (cb) => {
	const client = new MongoClient("mongodb://127.0.0.1:27018");
	await client.connect();
	db = client.db("blog-app-db");
	cb();
};

export { connectToDb, db };
