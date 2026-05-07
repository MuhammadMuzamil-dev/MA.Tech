import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAIResponse } from "../services/api";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      text: "Salam! Main Muzamil ka AI assistant hoon. Mere paas unki skills aur projects ki poori knowledge hai. Poochiye kya poochna hai?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    const userMsg = { id: Date.now(), role: "user", text: userMessage };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const aiText = await getAIResponse(userMessage, messages);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "ai", text: aiText }]);
    } catch {
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "ai", text: "Maaf kijiye, server busy hai." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.div className="fixed bottom-8 right-8 z-50" initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
        <Button
          onClick={() => setIsOpen((value) => !value)}
          size="lg"
          className="ai-launcher flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90"
          aria-label="Toggle AI assistant"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </Button>
        {!isOpen && (
          <div className="ai-launcher__label">
            <span className="ai-launcher__pulse" />
            Muzamil AI
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-0 z-50 w-full max-w-md p-4 sm:right-8"
          >
            <Card className="overflow-hidden border-white/10 bg-card/90 shadow-2xl backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 bg-primary/10 p-4">
                <CardTitle className="flex items-center gap-2 text-sm font-bold uppercase tracking-normal text-primary">
                  <Bot className="h-5 w-5" /> AI Assistant
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="hover:bg-white/10" aria-label="Close AI assistant">
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex h-[400px] flex-col p-4">
                <div className="mb-4 flex-1 space-y-4 overflow-y-auto pr-2">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                          msg.role === "user"
                            ? "rounded-br-none bg-primary text-white"
                            : "rounded-bl-none border border-white/5 bg-secondary/50 text-foreground"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-none bg-secondary/30 p-3 text-xs italic text-muted-foreground">
                        Muzamil's AI is thinking...
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Poochiye..."
                    className="border-white/10 bg-background/50 transition-all focus:border-primary/50"
                  />
                  <Button type="submit" size="icon" className="shrink-0 bg-primary text-white shadow-md hover:bg-primary/90" aria-label="Send message">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
