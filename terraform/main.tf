provider "aws" {
  allowed_account_ids = [local.account_number]
  region              = "us-east-1"
}

provider "aws" {
  region = "eu-west-1"
  alias  = "eu-west-1"
}

provider "launchdarkly" {
  access_token = var.launchdarkly_access_token
}

provider "auth0" {
  domain        = var.auth0_domain
  client_id     = var.auth0_client_id
  client_secret = var.auth0_client_secret
}

terraform {
  required_version = "1.6.6"

  backend "s3" {
    key     = "use-launch-darkly-to-ease-data-governance/terraform.tfstate"
    encrypt = "true"
    bucket  = "tfstate-748954057513"
    region  = "us-east-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.31.0"
    }
    launchdarkly = {
      source  = "launchdarkly/launchdarkly"
      version = "2.17.0"
    }
    auth0 = {
      source  = "auth0/auth0"
      version = "1.1.1"
    }
  }
}
