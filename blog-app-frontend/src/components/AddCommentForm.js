import { useState } from "react";
import axios from "axios";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
	const [name, setName] = useState("");
	const [commentText, setCommentText] = useState("");

	const addComment = async () => {
		const response = await axios.post(`/api/articles/${articleName}/comments`, {
			postedBy: name,
			text: commentText,
		});
		const updatedArticle = response.data;
		onArticleUpdated(updatedArticle);
		setCommentText("");
		setName("");
	};

	return (
		<div id="add-comment-form">
			<h3>Add a Comment</h3>
			<form>
				<div className="form-group">
					<label htmlFor="name">
						Name:
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="comment">
						Comment:
						<textarea
							className="form-control"
							id="comment"
							name="comment"
							rows="4"
							cols="50"
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)}
							required
						></textarea>
					</label>
				</div>
				<button type="submit" className="btn btn-primary" onClick={addComment}>
					Add Comment
				</button>
			</form>
		</div>
	);
};
export default AddCommentForm;
