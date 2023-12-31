resource "launchdarkly_project" "use-launch-darkly-to-ease-data-governance" {
  key  = "use-launch-darkly-to-ease-data-governance"
  name = "use-launch-darkly-to-ease-data-governance"

  environments {
    key   = "production"
    name  = "Production"
    color = "EEEEEE"
  }

  environments {
    key   = "staging"
    name  = "Staging"
    color = "000000"
  }
}

resource "launchdarkly_feature_flag" "configure-european-infrastructure" {
  project_key = launchdarkly_project.use-launch-darkly-to-ease-data-governance.key
  key         = "configure-european-infrastructure"
  name        = "configure-european-infrastructure"
  description = "Enables the use of infrastructure in the EU region to store customer data"

  variation_type = "boolean"

  client_side_availability {
    using_environment_id = false
    using_mobile_key     = false
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }
}

/*
NOTE: (alopez)
Launch Darkly does not provide the functionality to manage flag targeting rules via Terraform,
and strongly advises against doing so. Given this functionality is not available, please see below
for guidelines on configuring the flag targeting rules in the Launch Darkly UI.

Create a target rule with the following configuration:
Name: Tracks a European timeZone
If `user` `timeZone` contains `Europe`
Serve Enabled

Configure the default rule:
When targetting is `On` and contexts don't match any targeting rules
Serve Disabled

References: https://docs.launchdarkly.com/guides/infrastructure/terraform
*/
