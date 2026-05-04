export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          Social Media Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Artificial Engagement
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Identify self-voting, bot activity, and coordinated manipulation on social platforms with confidence scores via a simple REST API.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $29/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-bold text-xl mb-1">99%+</div>
            Detection Accuracy
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-bold text-xl mb-1">&lt;200ms</div>
            API Response Time
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-[#58a6ff] font-bold text-xl mb-1">10+</div>
            Manipulation Signals
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 50,000 API calls/month</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Self-voting detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Bot engagement analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Coordinated amplification alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Confidence score per signal</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-1">What platforms does the API support?</div>
            <div className="text-[#8b949e] text-sm">The API is platform-agnostic. You pass engagement data (votes, likes, shares, user IDs, timestamps) and it returns manipulation scores regardless of the source platform.</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-1">How accurate is the detection?</div>
            <div className="text-[#8b949e] text-sm">Our ML models achieve over 99% accuracy on benchmark datasets. Each response includes a confidence score so you can set your own threshold for action.</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="font-semibold text-white mb-1">Can I cancel anytime?</div>
            <div className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard with no penalties. Your access continues until the end of the billing period.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
