"""initial schema with documents table and pgvector

Revision ID: 001_initial
Revises:
Create Date: 2026-03-21
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from pgvector.sqlalchemy import Vector

revision: str = "001_initial"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("CREATE EXTENSION IF NOT EXISTS vector")

    op.create_table(
        "documents",
        sa.Column("id", sa.UUID(), primary_key=True),
        sa.Column("title", sa.String(500), nullable=False),
        sa.Column("domain", sa.String(100), nullable=False, index=True),
        sa.Column("modality", sa.String(50), nullable=False),
        sa.Column("summary", sa.Text(), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("tags", sa.ARRAY(sa.String(100)), default=[]),
        sa.Column("s3_key", sa.String(1000), nullable=True),
        sa.Column("embedding", Vector(768), nullable=True),
        sa.Column("chunk_count", sa.Integer(), default=1),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
    )

    op.execute(
        "CREATE INDEX IF NOT EXISTS ix_documents_embedding "
        "ON documents USING hnsw (embedding vector_cosine_ops)"
    )


def downgrade() -> None:
    op.drop_table("documents")
    op.execute("DROP EXTENSION IF EXISTS vector")
