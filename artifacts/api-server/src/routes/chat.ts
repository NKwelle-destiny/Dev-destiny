import { Router } from "express";
import { openai } from "@workspace/integrations-openai-ai-server";
import { textToSpeech } from "@workspace/integrations-openai-ai-server/audio";

const router = Router();

const SYSTEM_PROMPT = `You are the AI assistant for Nkwelle Destiny Nkumbe's personal portfolio website. 
Destiny is a full-stack developer, UI/UX designer, and graphic artist. 
Answer questions about Destiny's skills, projects, experience, and services in a friendly, concise, and professional manner.
Key facts:
- Name: Nkwelle Destiny Nkumbe
- Skills: HTML, CSS, Tailwind CSS, JavaScript, SQL, React, React Native, Web Development, App Development, Graphic Design, UI/UX Design
- Services: Web Development, App Development, UI/UX Design, Graphic Design
- Email: nkwelledestiny923306@gmail.com
- Phone: 651453986
- Projects include: FinFlow (mobile finance app), Saveur (restaurant platform), Pulse Design System, ConnectHub (social app), ShopEase (e-commerce dashboard), BrandForge (brand identity)
Keep responses concise (2-3 sentences max) and conversational. If asked something you don't know, suggest contacting Destiny directly.`;

router.post("/chat", async (req, res) => {
  try {
    const { message, history } = req.body as {
      message: string;
      history: Array<{ role: "user" | "assistant"; content: string }>;
    };

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).slice(-10),
      { role: "user", content: message },
    ];

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await openai.chat.completions.create({
      model: "gpt-5.4",
      max_completion_tokens: 256,
      messages,
      stream: true,
    });

    let fullResponse = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        fullResponse += content;
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true, fullResponse })}\n\n`);
    res.end();
  } catch (err) {
    req.log.error({ err }, "Chat error");
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to process chat message" });
    }
  }
});

router.post("/tts", async (req, res) => {
  try {
    const { text } = req.body as { text: string };

    if (!text || typeof text !== "string") {
      res.status(400).json({ error: "Text is required" });
      return;
    }

    const audioBuffer = await textToSpeech(text.slice(0, 500), "alloy", "mp3");

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", audioBuffer.length);
    res.send(audioBuffer);
  } catch (err) {
    req.log.error({ err }, "TTS error");
    res.status(500).json({ error: "Failed to generate voice" });
  }
});

export default router;
