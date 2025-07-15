import { talkToBruce } from "../../lib/bruce";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;
    const response = await talkToBruce(message);
    return res.status(200).json({ reply: response });
  }
  res.status(405).end(); // Method Not Allowed
}
