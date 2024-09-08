const HASURA_GRAPHQL_ENGINE_HOSTNAME = "tlztcf-3000.csb.app";
const HASURA_CLOUD_HOSTNAME = "pollmama-auth.hasura.app";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_CLOUD_HOSTNAME}/v1/graphql`;
export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_CLOUD_HOSTNAME}/v1/graphql`;
export const authClientId = "gyisue7aOrOo18mBXYp6pXouN3zFRH42";
export const authDomain = "dev-fy3ocdcw7iswau6z.us.auth0.com";
export const callbackUrl = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/callback`;
