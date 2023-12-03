import type { VercelRequest, VercelResponse } from "@vercel/node";
import { User, AddressSet } from "../db/models";

export default function handler(req: VercelRequest, res: VercelResponse) {
  User.sync()
    .then(() => console.log("User table created or successfully verified"))
    .catch(console.error);

  AddressSet.sync()
    .then(() =>
      console.log("AddressSet table created or successfully verified")
    )
    .catch(console.error);
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
