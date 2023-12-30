resource "auth0_action" "add_user_geolocation_information" {
  name    = "Add user geolocation information"
  runtime = "node18"
  deploy  = true
  code    = <<-EOT
/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  const { timeZone } = event.request.geoip;

  if (event.authorization) {
    api.idToken.setCustomClaim("timeZone", timeZone);
  }
};
  EOT

  supported_triggers {
    id      = "post-login"
    version = "v3"
  }
}
