import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "copilot";
  timestamp: Date;
}

const CopilotPanel: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your workflow assistant. How can I help you today?",
      sender: "copilot",
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    },
    {
      id: 2,
      text: "I need help optimizing the Appointment Scheduling workflow. The containment rate is good but the average time seems high.",
      sender: "user",
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    },
    {
      id: 3,
      text: "I've analyzed the Appointment Scheduling workflow and found several optimization opportunities. The current average time of 4m 38s can be reduced by implementing these changes:\n\n1. Streamline the initial patient information collection\n2. Add automated appointment confirmation\n3. Implement intelligent time slot suggestions based on patient history\n\nWould you like me to create a detailed implementation plan?",
      sender: "copilot",
      timestamp: new Date(Date.now() - 1700000), // 28 minutes ago
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);

    // Simulate copilot response
    setTimeout(() => {
      const copilotResponse: Message = {
        id: messages.length + 2,
        text: `I'm analyzing your request about "${message.substring(0, 30)}${message.length > 30 ? "..." : ""}". I'll have a response for you shortly.`,
        sender: "copilot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, copilotResponse]);
    }, 1000);

    setMessage("");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <aside className="bg-[rgba(250,248,247,1)] flex min-w-60 items-stretch gap-2 h-full w-[556px] pr-4 py-4 max-md:max-w-full">
      <div className="border border-[color:var(--interface-border2,#EBEBEB)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.32)] bg-white min-w-60 w-[540px] overflow-hidden rounded-lg border-solid flex flex-col">
        <div className="flex flex-col w-full flex-1 py-6 px-4 overflow-y-auto max-md:max-w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#191919]">
              Workflow Assistant
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === "user"
                      ? "bg-[#107DBC] text-white"
                      : "bg-[#F0F2F5] text-[#191919]"
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                  <div
                    className={`text-xs mt-1 ${
                      msg.sender === "user"
                        ? "text-[#E6F0F9]"
                        : "text-[#767676]"
                    }`}
                  >
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-center items-stretch border-t-[color:var(--interface-border2,#EBEBEB)] flex w-full flex-col bg-white p-4 border-t border-solid max-md:max-w-full">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center justify-between flex-wrap max-md:max-w-full"
          >
            <div className="self-stretch min-w-60 min-h-9 text-[15px] text-[#829AAB] font-normal flex-1 shrink basis-[0%] my-auto pr-2 max-md:max-w-full">
              <div className="flex min-h-9 w-full flex-col items-stretch justify-center max-md:max-w-full">
                <div className="items-stretch rounded border border-[color:var(--globalState-inactive-border,#AFC1CE)] flex w-full gap-2 flex-1 h-full bg-white p-2 border-solid max-md:max-w-full">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you?"
                    className="text-[#829AAB] flex-1 shrink basis-[0%] max-md:max-w-full bg-transparent border-none outline-none"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6858f7cf2bb8f01bc8af82b803be90adcb885349?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 shrink-0 my-auto"
                    alt="Voice input"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="justify-center items-center rounded border border-[color:var(--Primary-Border,#C3C5C9)] self-stretch flex min-h-9 w-9 h-9 bg-[#F8F8F9] my-auto border-solid"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82a80e077b9591614ecc2a8e90637acfe5becc3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Send"
              />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default CopilotPanel;
