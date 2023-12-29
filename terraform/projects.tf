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
