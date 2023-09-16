"""empty message

Revision ID: 73fbb1977653
Revises: 78ffb90a4b7c
Create Date: 2023-09-11 22:57:55.355662

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '73fbb1977653'
down_revision = '78ffb90a4b7c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('apod_article',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('origin_id', sa.String(length=15), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorite_article',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('apod_article_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['apod_article_id'], ['apod_article.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=120), nullable=True),
    sa.Column('body', sa.Text(), nullable=True),
    sa.Column('created_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('body', sa.Text(), nullable=True),
    sa.Column('created_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('disliked_post',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('disliked_post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['disliked_post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('image',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image_link', sa.String(length=256), nullable=True),
    sa.Column('upload_date', sa.DateTime(), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('liked_post',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('liked_post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['liked_post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)

    op.drop_table('liked_post')
    op.drop_table('image')
    op.drop_table('disliked_post')
    op.drop_table('comment')
    op.drop_table('post')
    op.drop_table('favorite_article')
    op.drop_table('apod_article')
    # ### end Alembic commands ###