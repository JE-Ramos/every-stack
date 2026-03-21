from __future__ import annotations

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/everystack"
    S3_ENDPOINT: str = "http://localhost:4566"
    S3_BUCKET: str = "everystack-uploads"
    AWS_ACCESS_KEY_ID: str = "test"
    AWS_SECRET_ACCESS_KEY: str = "test"
    AWS_DEFAULT_REGION: str = "us-east-1"
    PORT: int = 3001

    model_config = {"env_file": ".env", "extra": "ignore"}


settings = Settings()
