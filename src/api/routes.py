"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Post, Comment
from api.utils import generate_sitemap, APIException

api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/posts", methods=["GET"])
def get_posts():
    posts = Post.query.all()
    """ 
    GET all posts
    """
    return jsonify(posts=[post.serialize() for post in posts])


@api.route("/posts/<int:id>", methods=["GET"])
def get_post(id):
    """
    GET posts by ID
    """
    post = Post.query.filter_by(id=id).first()
    if post:
        return jsonify(post=post.serialize())
    return jsonify(message=f"No post with ID: {id} found", post=None)


@api.route("/posts", methods=["POST"])
def post_posts():
    """
    POST new post
    """
    post_data = request.json
    new_post = Post(
        author_id=post_data.get("authror_id", 1),
        title=post_data.get("title", "Untitled"),
        body=post_data.get("body", "The pic says it all!"),
    )

    db.session.merge(new_post)
    db.session.commit()
    return "", 204


@api.route("/comments", methods=["GET"])
def get_comments():
    """
    GET all comments
    """
    comments = Comment.query.all()
    if comments:
        return jsonify(comments=[comment.serialize() for comment in comments])
    return jsonify(message="No Comments Found", comments=None)


@api.route("/comments/<int:id>", methods=["GET"])
def get_comment(id):
    """
    GET comment by ID
    """
    comments = Comment.query.filter_by(id=id).first()
    if comments:
        return jsonify(comments=comments.serialize())
    return jsonify(message=f"Comment ID {id} not found", comments=None)


@api.route("/comments", methods=["POST"])
def new_comments():
    """
    POST
    """
    comment_data = request.json
    new_comment = Comment(
        author_id=comment_data.get("author_id", 1),
        body=comment_data.get("body", "Is that your wish? Or just more junk?"),
        post_id=comment_data.get("post_id",None)

    )
    
    db.session.merge(new_comment)
    db.session.commit()
    return "", 204
