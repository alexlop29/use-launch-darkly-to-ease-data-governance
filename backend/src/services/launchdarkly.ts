import * as ld from "@launchdarkly/node-server-sdk";

const EU_TIMEZONES = [
  "Europe/Vienna",
  "Europe/Brussels",
  "Europe/Sofia",
  "Europe/Zagreb",
  "Asia/Famagusta",
  "Asia/Nicosia",
  "Europe/Prague",
  "Europe/Copenhagen",
  "Europe/Tallinn",
  "Europe/Helsinki",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Busingen",
  "Europe/Athens",
  "Europe/Budapest",
  "Europe/Dublin",
  "Europe/Rome",
  "Europe/Riga",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Malta",
  "Europe/Amsterdam",
  "Europe/Warsaw",
  "Atlantic/Azores",
  "Atlantic/Madeira",
  "Europe/Lisbon",
  "Europe/Bucharest",
  "Europe/Bratislava",
  "Europe/Ljubljana",
  "Africa/Ceuta",
  "Atlantic/Canary",
  "Europe/Madrid",
  "Europe/Stockholm",
];

const locationContext: ld.LDContext = {
  kind: "user",
  key: "european-users",
  name: "European Users",
  location: EU_TIMEZONES,
};

export { locationContext };
