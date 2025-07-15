import { useState } from "react";

export default function BruceChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendToBruce() {
    setLoading(true);
    const res = await fetch("/api/bruce", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid gray", borderRadius: "8px" }}>
      <h2>💬 Talk to Bruce</h2>
      <textarea
        rows={3}
        placeholder="Ask Bruce anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={sendToBruce} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>
      {reply && (
        <div style={{ marginTop: "1rem", background: "#f4f4f4", padding: "1rem", borderRadius: "8px" }}>
          <strong>Bruce:</strong>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}
