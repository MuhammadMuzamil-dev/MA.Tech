import axios from "axios";
import { portfolioData } from "../data/portfolioData";

const HF_TOKEN =
  import.meta.env.VITE_HF_TOKEN ||
  import.meta.env.VITE_HUGGINGFACE_TOKEN ||
  import.meta.env.VITE_HUGGINGFACE_API_KEY ||
  "";

const API_URL = "https://router.huggingface.co/v1/chat/completions";
const MODEL = "Qwen/Qwen2.5-7B-Instruct:featherless-ai";

const portfolioContext = `
Owner: ${portfolioData.profile.name}
Title: ${portfolioData.profile.title}
Location: ${portfolioData.profile.location}
Status: ${portfolioData.profile.status}
Bio: ${portfolioData.profile.bio}
Education: ${portfolioData.profile.stats.find((stat) => stat.label === "Education")?.value || "Not specified"}
Projects count: ${portfolioData.profile.stats.find((stat) => stat.label === "Projects")?.value || "Not specified"}
Frontend: ${portfolioData.skills.frontend.join(", ")}
Backend: ${portfolioData.skills.backend.join(", ")}
Database: ${portfolioData.skills.database.join(", ")}
Tools: ${portfolioData.skills.tools.join(", ")}
Top skills: ${portfolioData.skills.topSkills.map((skill) => `${skill.name} ${skill.level}%`).join(", ")}
Projects summary: ${portfolioData.projects
  .map(
    (project) =>
      `${project.title} [${project.category}] using ${project.tech.join(", ")}`,
  )
  .join(" | ")}
Experience summary: ${portfolioData.experience
  .map((item) => `${item.role} at ${item.company} (${item.period})`)
  .join(" | ")}
`.trim();

const buildMessages = (userMessage, chatHistory = []) => {
  const recentMessages = chatHistory
    .filter((message) => message.role === "user" || message.role === "ai")
    .slice(-2)
    .map((message) => ({
      role: message.role === "ai" ? "assistant" : "user",
      content: message.text,
    }));

  return [
    {
      role: "system",
      content: [
        "You are the AI assistant for Muhammad Muzamil Ali's portfolio website.",
        "Answer only from the portfolio context provided below.",
        "Do not invent degrees, jobs, companies, projects, certifications, or personal facts that are not in the context.",
        "If the user asks something not present in the portfolio, clearly say it is not available in the portfolio.",
        "Default style: Roman Urdu, simple, natural, professional and English.",
        "When answering in Roman Urdu, do not use Urdu script.",
        "If the user explicitly asks for English, reply in English.",
        "If the user asks for headings, bullets, spacing, or structured format, return clean Markdown with short headings and MS Word Style bullet lists, with proper line spacing and one text line in one line and next text line on second line and so on.",
        "Keep the answer focused on this portfolio website and its owner.",
        "Keep answers concise unless the user asks for detail.",
        `Portfolio context:\n${portfolioContext}`,
      ].join("\n\n"),
    },
    ...recentMessages,
    {
      role: "user",
      content: userMessage,
    },
  ];
};

export const getAIResponse = async (userMessage, chatHistory = []) => {
  if (!HF_TOKEN) {
    return "Hugging Face token missing hai. `.env` mein `VITE_HF_TOKEN=...` add karein aur server restart karein.";
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: MODEL,
        messages: buildMessages(userMessage, chatHistory),
        max_tokens: 180,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      },
    );

    return (
      response.data?.choices?.[0]?.message?.content?.trim() ||
      "AI ne empty response diya. Dobara try karein."
    );
  } catch (error) {
    const status = error.response?.status;
    const details =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message;

    console.error("Hugging Face Error:", {
      status,
      details,
      data: error.response?.data,
    });

    if (status === 401) {
      return "Hugging Face token invalid ya expired lag raha hai. Naya token laga kar server restart karein.";
    }

    if (status === 402 || status === 429) {
      return "Hugging Face usage limit ya credits issue aa raha hai. Thori dair baad ya billing check karke try karein.";
    }

    if (status === 504) {
      return "Hugging Face model timeout ho gaya. Maine prompt optimize kar diya hai, dobara try karein.";
    }

    if (status === 400 || status === 404) {
      return "Model request format ya selected model mein issue tha. Ab code update ho gaya hai, server restart karke dobara try karein.";
    }

    return "AI response laanay mein issue aa gaya. Server restart karke dobara try karein.";
  }
};
