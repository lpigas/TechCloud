export default async function (req, res) {
  const { email } = JSON.parse(req.body);
  try {
    const data = await fetch(
      "https://dev-4r036n52.eu.auth0.com/dbconnections/change_password",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: "SRyfvvpMD7RgRp4euqQuLvxRUo3WYjMr",
          email: email,
          connection: "TechCloud",
        }),
      }
    );
  } catch (error) {
    console.log(error);
  }

  return res.json({ message: "see your email" });
}
