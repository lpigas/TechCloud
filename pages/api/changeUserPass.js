export default async function (req, res) {
  const { newPassword, sub } = JSON.parse(req.body);

  const data = await fetch("https://dev-4r036n52.eu.auth0.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "SRyfvvpMD7RgRp4euqQuLvxRUo3WYjMr",
      client_secret:
        "_VwZqnAAwPlMUoOh-R8ZC66YOgYjmUf3fBYQrb4nV30WMWDNQHqWNBB_50gV1CUB",
      audience: "https://dev-4r036n52.eu.auth0.com/api/v2/",
    }),
  });
  const accesstoken = await data.json();
  // console.log(accesstoken)

  try {
    const data = await fetch(
      "https://dev-4r036n52.eu.auth0.com/api/v2/users/" + sub,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accesstoken.access_token}`,
        },
        body: JSON.stringify({
          password: newPassword,
          connection: "TechCloud",
        }),
      }
    );
    const datas = await data.json();
  } catch (error) {
    console.log(error);
  }

  res.json({
    message: "ok",
  });
}
