from __future__ import annotations

import logging

import boto3
from botocore.exceptions import ClientError

from app.config import settings

logger = logging.getLogger("everystack.storage")

_client = None


def get_s3_client():
    global _client
    if _client is None:
        _client = boto3.client(
            "s3",
            endpoint_url=settings.S3_ENDPOINT,
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_DEFAULT_REGION,
        )
    return _client


def ensure_bucket():
    client = get_s3_client()
    try:
        client.head_bucket(Bucket=settings.S3_BUCKET)
    except ClientError:
        logger.info("creating bucket %s", settings.S3_BUCKET)
        client.create_bucket(Bucket=settings.S3_BUCKET)


def upload_file(key: str, data: bytes, content_type: str = "application/octet-stream") -> str:
    client = get_s3_client()
    client.put_object(Bucket=settings.S3_BUCKET, Key=key, Body=data, ContentType=content_type)
    logger.info("uploaded %s (%d bytes)", key, len(data))
    return key


def get_download_url(key: str) -> str:
    client = get_s3_client()
    return client.generate_presigned_url(
        "get_object",
        Params={"Bucket": settings.S3_BUCKET, "Key": key},
        ExpiresIn=3600,
    )
