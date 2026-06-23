import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  GraduationCap,
  Laptop,
  LayoutTemplate,
  Users,
  LifeBuoy,
  SlidersHorizontal,
  FileBarChart,
  Settings,
  ChevronRight,
  Mic,
  Send,
  ChevronDown,
  ChevronUp,
  X,
  Lightbulb,
  CircleHelp,
} from "lucide-react";

export const Route = createFileRoute("/lab-session")({
  head: () => ({
    meta: [
      { title: "Live Lab Session — Hatsize" },
      { name: "description", content: "Live lab session with AI Copilot guidance." },
    ],
  }),
  component: LabSession,
});

const HATSIZE_GREEN = "#1f9d4d";

function LabSession() {
  const [guideOpen, setGuideOpen] = useState(true);
  const [banner, setBanner] = useState(true);
  const [socratic, setSocratic] = useState(true);
  const [listening, setListening] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f7] text-[#2b2f33]" style={{ fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serif' }}>
      {/* Top bar */}
      <header
        className="h-[72px] flex items-center justify-between px-6 text-white"
        style={{ background: HATSIZE_GREEN }}
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded px-2 py-1 leading-none">
              <span className="font-bold text-xl" style={{ color: HATSIZE_GREEN }}>
                Hats<span className="inline-block -mx-[1px]">i</span>ze
              </span>
              <div className="text-[10px]" style={{ color: HATSIZE_GREEN }}>learning by doing</div>
            </div>
          </div>
          <nav className="flex items-center gap-2 text-[15px]">
            <span className="font-semibold opacity-90">My Training</span>
            <ChevronRight className="h-4 w-4 opacity-70" />
            <span className="font-semibold">Live Lab</span>
          </nav>
        </div>
        <div className="text-sm opacity-95">👤 astudent</div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Left nav */}
        <aside className="w-[220px] bg-white border-r border-[#e3e5e8] py-4 hidden md:block">
          {[
            { icon: Calendar, label: "Training Schedule" },
            { icon: GraduationCap, label: "My Courses" },
            { icon: Laptop, label: "Live Lab", active: true },
            { icon: LayoutTemplate, label: "Resources" },
            { icon: Users, label: "Cohort" },
            { icon: LifeBuoy, label: "Support" },
            { icon: SlidersHorizontal, label: "Preferences" },
            { icon: FileBarChart, label: "Progress" },
            { icon: Settings, label: "Settings" },
          ].map((it) => (
            <div
              key={it.label}
              className={`flex items-center gap-3 px-5 py-3 text-sm cursor-pointer ${
                it.active ? "bg-[#eef2f3] font-semibold text-[#2b2f33]" : "text-[#4a4f55] hover:bg-[#f4f5f7]"
              }`}
            >
              <it.icon className="h-4 w-4 text-[#6b7177]" />
              {it.label}
            </div>
          ))}
        </aside>

        {/* Main split */}
        <main className="flex-1 flex min-w-0">
          {/* Lab area */}
          <section className="flex-1 min-w-0 p-6 flex flex-col gap-4" style={{ flexBasis: "70%" }}>
            {/* Title strip */}
            <div className="bg-white border border-[#e3e5e8] rounded-md px-5 py-4 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-[20px] font-semibold">SQL Injection: Exploit and Patch</h1>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "#e6f4ea", color: HATSIZE_GREEN }}
                >
                  In Progress
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#4a4f55]">
                <span>Elapsed: <span className="font-mono font-semibold text-[#2b2f33]">18:42</span></span>
                <button className="text-sm px-3 py-1.5 border border-[#d4d7db] rounded hover:bg-[#f4f5f7]">Pause</button>
                <button className="text-sm px-3 py-1.5 rounded text-white" style={{ background: HATSIZE_GREEN }}>
                  Submit
                </button>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-white border border-[#e3e5e8] rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#e3e5e8] bg-[#fafbfc]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#4a4f55]">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  attack-box — terminal
                </div>
                <span className="text-xs text-[#6b7177]">10.0.0.4</span>
              </div>
              <div className="bg-[#0d1117] text-[#d6dde3] font-mono text-[13px] leading-6 p-4 min-h-[260px]">
                <div><span className="text-[#7ee787]">student@attack-box</span>:<span className="text-[#79c0ff]">~</span>$ curl http://10.0.0.5/login.php</div>
                <div className="text-[#8b949e]">curl: (7) Failed to connect to 10.0.0.5 port 80: Connection refused</div>
                <div className="mt-2"><span className="text-[#7ee787]">student@attack-box</span>:<span className="text-[#79c0ff]">~</span>$ sqlmap -u "http://10.0.0.5/login.php" --batch</div>
                <div className="text-[#8b949e]">[INFO] testing connection to the target URL</div>
                <div className="text-[#ff7b72]">[CRITICAL] unable to connect to the target URL ('Connection refused')</div>
                <div className="mt-2"><span className="text-[#7ee787]">student@attack-box</span>:<span className="text-[#79c0ff]">~</span>$ <span className="inline-block w-2 h-4 bg-[#d6dde3] align-middle animate-pulse" /></div>
              </div>
            </div>

            {/* Lab Guide */}
            <div className="bg-white border border-[#e3e5e8] rounded-md">
              <button
                onClick={() => setGuideOpen((v) => !v)}
                className="w-full flex items-center justify-between px-5 py-3 border-b border-[#e3e5e8]"
              >
                <span className="font-semibold text-[15px]">Lab Guide</span>
                <span className="flex items-center gap-2 text-xs text-[#6b7177]">
                  Step 3 of 5
                  {guideOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>
              {guideOpen && (
                <ol className="p-4 space-y-2">
                  {[
                    { n: 1, t: "Recon the target environment", done: true },
                    { n: 2, t: "Enumerate exposed services on 10.0.0.5", done: true },
                    { n: 3, t: "Identify vulnerable input field", current: true },
                    { n: 4, t: "Exploit the SQL injection with sqlmap" },
                    { n: 5, t: "Patch the vulnerable query and re-test" },
                  ].map((s) => (
                    <li
                      key={s.n}
                      className={`flex items-start gap-3 px-3 py-2.5 rounded-md border ${
                        s.current
                          ? "border-l-4"
                          : "border-transparent"
                      }`}
                      style={
                        s.current
                          ? { borderColor: HATSIZE_GREEN, background: "#eef9f1", borderLeftColor: HATSIZE_GREEN }
                          : undefined
                      }
                    >
                      <span
                        className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-semibold ${
                          s.done ? "text-white" : s.current ? "text-white" : "bg-[#eef0f2] text-[#6b7177]"
                        }`}
                        style={s.done || s.current ? { background: HATSIZE_GREEN } : undefined}
                      >
                        {s.done ? "✓" : s.n}
                      </span>
                      <div>
                        <div className={`text-sm ${s.current ? "font-semibold" : ""}`}>Step {s.n}: {s.t}</div>
                        {s.current && (
                          <div className="text-xs text-[#4a4f55] mt-0.5">
                            Probe the login form to find which parameter reflects unescaped input.
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </section>

          {/* Copilot sidebar */}
          <aside
            className="border-l border-[#e3e5e8] bg-white flex flex-col"
            style={{ flexBasis: "30%", minWidth: 360 }}
          >
            <div className="px-5 py-4 border-b border-[#e3e5e8] flex items-center justify-between">
              <div>
                <div className="text-[15px] font-semibold flex items-center gap-2">
                  <span
                    className="h-7 w-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: HATSIZE_GREEN }}
                  >
                    AI
                  </span>
                  Lab Copilot
                </div>
                <div className="text-xs text-[#6b7177] mt-0.5">Guides you without giving away the answer.</div>
              </div>
            </div>

            {/* Context chips */}
            <div className="px-5 py-3 border-b border-[#e3e5e8] flex flex-wrap gap-2">
              <Chip label="Current step: 3/5" />
              <Chip label="Last command: sqlmap …" mono />
              <Chip label="Status: You might be stuck" warn />
            </div>

            {/* Proactive banner */}
            {banner && (
              <div
                className="mx-5 mt-4 rounded-md border px-3 py-3 text-sm"
                style={{ background: "#fff8e1", borderColor: "#f4d774" }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 mt-0.5 text-[#b8860b]" />
                    <span>It looks like you haven't completed Step 3 yet. Need a hint?</span>
                  </div>
                  <button onClick={() => setBanner(false)} className="text-[#6b7177] hover:text-[#2b2f33]">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  <button className="text-xs px-2.5 py-1 rounded text-white" style={{ background: HATSIZE_GREEN }}>
                    Show subtle hint
                  </button>
                  <button className="text-xs px-2.5 py-1 rounded border border-[#d4d7db] bg-white">
                    Show detailed explanation
                  </button>
                  <button className="text-xs px-2.5 py-1 rounded text-[#6b7177]" onClick={() => setBanner(false)}>
                    Not now
                  </button>
                </div>
              </div>
            )}

            {/* Chat */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              <CopilotBubble faded>
                I noticed your last command failed to connect to the target. Let's debug this
                together. First, can you check if you can ping the server at{" "}
                <span className="font-mono">10.0.0.5</span>?
              </CopilotBubble>

              <StudentBubble>Why did my sqlmap command fail?</StudentBubble>

              <CopilotBubble>
                Take a look at the error message in your terminal. What does it say about the
                connection? Try to explain it in your own words.
              </CopilotBubble>

              <div className="flex">
                <button className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full border border-[#d4d7db] bg-white hover:bg-[#f4f5f7]">
                  <CircleHelp className="h-3.5 w-3.5" style={{ color: HATSIZE_GREEN }} />
                  Hint: Check basic network connectivity (ping) before running sqlmap.
                </button>
              </div>
            </div>

            {/* Composer */}
            <div className="border-t border-[#e3e5e8] px-5 py-3 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="relative inline-block w-8 h-4">
                    <input
                      type="checkbox"
                      checked={socratic}
                      onChange={(e) => setSocratic(e.target.checked)}
                      className="opacity-0 absolute inset-0 cursor-pointer"
                    />
                    <span
                      className="absolute inset-0 rounded-full transition-colors"
                      style={{ background: socratic ? HATSIZE_GREEN : "#cfd3d7" }}
                    />
                    <span
                      className="absolute top-0.5 h-3 w-3 bg-white rounded-full transition-all"
                      style={{ left: socratic ? "16px" : "2px" }}
                    />
                  </span>
                  <span className="font-semibold">Socratic mode</span>
                  <span className="text-[#6b7177]">— hints &amp; questions, not direct answers</span>
                </label>
              </div>

              <div className="flex items-center gap-2 border border-[#d4d7db] rounded-md bg-white px-2 py-1.5 focus-within:border-[color:var(--hz)]" style={{ ['--hz' as never]: HATSIZE_GREEN }}>
                <button
                  onClick={() => setListening((v) => !v)}
                  className={`h-8 w-8 rounded-md flex items-center justify-center ${
                    listening ? "text-white" : "text-[#6b7177] hover:bg-[#f4f5f7]"
                  }`}
                  style={listening ? { background: HATSIZE_GREEN } : undefined}
                  title="Voice input"
                >
                  <Mic className="h-4 w-4" />
                </button>
                {listening ? (
                  <div className="flex-1 flex items-center gap-2 text-sm text-[#4a4f55]">
                    <span className="font-semibold">Listening…</span>
                    <span className="flex items-end gap-0.5 h-4">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className="w-0.5 rounded-sm animate-pulse"
                          style={{
                            background: HATSIZE_GREEN,
                            height: `${30 + ((i * 17) % 70)}%`,
                            animationDelay: `${i * 120}ms`,
                          }}
                        />
                      ))}
                    </span>
                  </div>
                ) : (
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about this lab or your last command…"
                    className="flex-1 outline-none text-sm bg-transparent placeholder:text-[#9aa0a6]"
                  />
                )}
                <button
                  className="h-8 w-8 rounded-md text-white flex items-center justify-center"
                  style={{ background: HATSIZE_GREEN }}
                  title="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

function Chip({ label, warn, mono }: { label: string; warn?: boolean; mono?: boolean }) {
  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full border ${mono ? "font-mono" : ""}`}
      style={
        warn
          ? { background: "#fff4e5", borderColor: "#f0c281", color: "#9a6a00" }
          : { background: "#f4f5f7", borderColor: "#e3e5e8", color: "#4a4f55" }
      }
    >
      {label}
    </span>
  );
}

function CopilotBubble({ children, faded }: { children: React.ReactNode; faded?: boolean }) {
  return (
    <div className="flex gap-2 items-start">
      <span
        className="h-7 w-7 rounded-md flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
        style={{ background: HATSIZE_GREEN, opacity: faded ? 0.7 : 1 }}
      >
        AI
      </span>
      <div
        className={`text-sm leading-relaxed rounded-md rounded-tl-sm px-3 py-2 border ${
          faded ? "opacity-75" : ""
        }`}
        style={{ background: "#f4f8f5", borderColor: "#dbe7df", color: "#2b2f33" }}
      >
        {children}
      </div>
    </div>
  );
}

function StudentBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div
        className="text-sm leading-relaxed rounded-md rounded-tr-sm px-3 py-2 max-w-[85%]"
        style={{ background: HATSIZE_GREEN, color: "white" }}
      >
        {children}
      </div>
    </div>
  );
}
