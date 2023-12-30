module "us-east-1-documents" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "us-east-1-documents-for-node-app"
  acl    = "private"

  control_object_ownership = true
  object_ownership         = "ObjectWriter"
}

module "eu-west-1-documents" {
  providers = {
    aws = aws.eu-west-1
  }
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "eu-west-1-documents-for-node-app"
  acl    = "private"

  control_object_ownership = true
  object_ownership         = "ObjectWriter"
}
