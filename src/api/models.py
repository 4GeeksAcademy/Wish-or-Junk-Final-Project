from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import DateTime

db = SQLAlchemy()

liked_post = db.Table(
    "liked_post",
    db.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey('user.id')
    ),
    db.Column(
        "liked_post_id",
        db.Integer,
        db.ForeignKey('post.id')
    ),
)

disliked_post = db.Table(
    "disliked_post",
    db.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey('user.id')
    ),
    db.Column(
        "disliked_post_id",
        db.Integer,
        db.ForeignKey('post.id')
    ),
)

favorite_article = db.Table(
    "favorite_article",
    db.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey('user.id')
    ),
    db.Column(
        "apod_article_id",
        db.Integer,
        db.ForeignKey('apod_article.id')
    ),
)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), default=True)

    liked_post = db.relationship(
        "Post",
        secondary=liked_post,
        primaryjoin=(id == liked_post.c.user_id),
        backref=db.backref(
            "Liked By Users",
            uselist=True
        ),
        uselist=True
    )

    disliked_post = db.relationship(
        "Post",
        secondary=disliked_post,
        primaryjoin=(id == disliked_post.c.user_id),
        backref=db.backref(
            "Disliked By Users",
            uselist=True
        ),
        uselist=True
    )

    favortie_apod_article = db.relationship(
        "Apod_article",
        secondary=favorite_article,
        primaryjoin=(id == favorite_article.c.user_id),
        backref=db.backref(
            "Favorited By Users",
            uselist=True
        ),
        uselist=True
    )

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "posts": [post.serialize() for post in self.posts]
            # do not serialize the password, its a security breach
        }


class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    title = db.Column(db.String(120))
    body = db.Column(db.Text)
    created_date = db.Column(db.DateTime)

    user = db.relationship(
        "User", uselist=False,
        backref=db.backref("posts", uselist=True)
    )

    def __repr__(self):
        return f'<Post {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "author_id": self.author_id,
            "title": self.title,
            "body": self.body,
            "created_date": self.created_date,
            "comments": [comment.serialize() for comment in self.comments],
            "image": [image.serialize() for image in self.images],
        }


class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    body = db.Column(db.Text)
    created_date = db.Column(db.DateTime)

    user = db.relationship(
        "User", uselist=False,
        backref=db.backref("comments", uselist=True)
    )

    post = db.relationship(
        "Post", uselist=False,
        backref=db.backref("comments", uselist=True)
    )

    def __repr__(self):
        return f'<Comment {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "author_id": self.author_id,
            "post_id": self.post_id,
            "body": self.body,
            "created_date": self.created_date,
        }


class Image(db.Model):
    __tablename__ = 'image'
    id = db.Column(db.Integer, primary_key=True)
    image_link = db.Column(db.String(256))
    upload_date = db.Column(db.DateTime)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))

    post = db.relationship(
        "Post", uselist=False,
        backref=db.backref("image", uselist=True)
    )

    def __repr__(self):
        return f'<Image {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "image_link": self.image_link,
            "upload_date": self.upload_date,
            "post_id": self.post_id,
        }


class Apod_article(db.Model):
    __tablename__ = 'apod_article'
    id = db.Column(db.Integer, primary_key=True)
    origin_id = db.Column(db.String(15))

    def __repr__(self):
        return f'<Article {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "origin_id": self.origin_id,
        }
