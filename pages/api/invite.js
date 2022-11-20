import { handleLogin } from "@auth0/nextjs-auth0";

export default async function invite(req, res) {
  try {
    await handleLogin(req, res, {
      authorizationParams: {
        screen_hint: "signup",
        response_type: "code",
        response_mode: "query",
      },
    });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
