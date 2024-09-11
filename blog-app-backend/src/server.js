import express from "express";
import { db, connectToDb } from "./db.js";

const app = express();
app.use(express.json());

// Endpoint to get article based on name
app.get("/api/articles/:name", async (req, res) => {
	const { name } = req.params;

	const article = await db.collection("articles").findOne({ name });

	if (article) {
		res.status(200).json(article);
	} else {
		res.sendStatus(404).send("Article not found");
	}
});

app.put("/api/articles/:name/upvote", async (req, res) => {
	const { name } = req.params;

	await db.collection("articles").updateOne({ name }, { $inc: { upvotes: 1 } });

	const article = await db.collection("articles").findOne({ name });

	if (article) {
		res.status(200).json(article);
	} else {
		res.status(404).send(`Article ${name} not found`);
	}
});

// Endpoint to add a comment to an article
app.post("/api/articles/:name/comments", async (req, res) => {
	const { postedBy, text } = req.body;
	const { name } = req.params;

	await db
		.collection("articles")
		.updateOne({ name }, { $push: { comments: { postedBy, text } } });

	const article = await db.collection("articles").findOne({ name });

	if (article) {
		res.status(200).json(article);
	} else {
		res.status(404).send(`Article ${name} not found`);
	}
});

connectToDb(() => {
	console.log("Connected to database");
	app.listen(3001, () => {
		console.log("Server is running on http://localhost:3001");
	});
});
