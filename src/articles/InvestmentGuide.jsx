import React from 'react';

function InvestmentGuide() {
  return (
    <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">📈 Investment Strategies for Beginners</h1>
      <p>Investing can feel overwhelming for newcomers, but it starts with understanding the basics. Whether you're in your 20s or 50s, this guide will help you build a foundation for smart investing. 🚀</p>

      <hr className="my-8" />

      <h2 className="text-3xl font-semibold mt-8 mb-4">🌱 Why Should You Invest?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Beat Inflation 💸</strong> – Grow your money faster than inflation.</li>
        <li><strong>Build Wealth 💰</strong> – Increase your net worth over time.</li>
        <li><strong>Achieve Goals 🏡</strong> – Buy a home, fund education, retire early.</li>
        <li><strong>Earn Passive Income 💤</strong> – Let your money work for you.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">📚 Understanding Basic Concepts</h2>
      <h3 className="text-2xl font-semibold mt-6">🔹 What is Investing?</h3>
      <p>Investing means allocating money to assets (stocks, bonds, real estate) to generate income or appreciation.</p>

      <h3 className="text-2xl font-semibold mt-6">🔹 Compound Interest</h3>
      <p>Compounding is when your earnings generate their own earnings — the earlier you start, the more you benefit.</p>

      <h3 className="text-2xl font-semibold mt-6">🔹 Risk vs Return</h3>
      <p>Higher returns typically mean higher risk. Balance is key for beginners.</p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🔎 Popular Investment Options</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Investment Type</th>
              <th className="border p-2 text-left">Risk</th>
              <th className="border p-2 text-left">Return Potential</th>
              <th className="border p-2 text-left">Liquidity</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Stocks', 'High', 'High', 'High'],
              ['Mutual Funds', 'Medium', 'Medium', 'Medium'],
              ['Fixed Deposits', 'Low', 'Low', 'High'],
              ['Real Estate', 'Medium', 'High', 'Low'],
              ['Gold', 'Low', 'Medium', 'Medium'],
              ['Crypto', 'Very High', 'Very High', 'High']
            ].map(([type, risk, returnRate, liquidity], i) => (
              <tr key={i}>
                <td className="border p-2 font-semibold">{type}</td>
                <td className="border p-2">{risk}</td>
                <td className="border p-2">{returnRate}</td>
                <td className="border p-2">{liquidity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🛠️ Getting Started</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>Set Clear Goals 🎯</strong> – Know why you're investing.</li>
        <li><strong>Build Budget & Emergency Fund 🧾</strong> – Secure basic expenses first.</li>
        <li><strong>Choose a Brokerage 🏦</strong> – e.g., Zerodha, Robinhood, eToro.</li>
        <li><strong>Start Small & Diversify 🪴</strong> – Don’t rely on a single asset.</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🔁 Dollar-Cost Averaging</h2>
      <p>Investing a fixed amount regularly helps manage market volatility. Example: $100/month into an index fund.</p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">📊 Diversification</h2>
      <p>Spread investments across sectors: Tech, Finance, Healthcare, Energy, Global. This reduces risk.</p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🧠 Smart Tips</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>⏳ Start early</li>
        <li>📅 Stay consistent</li>
        <li>🐑 Avoid trends</li>
        <li>🧘 Stay calm</li>
        <li>🗂️ Rebalance yearly</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">❌ Common Mistakes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Timing the market</li>
        <li>Ignoring fees/taxes</li>
        <li>Chasing hype</li>
        <li>Lack of research</li>
        <li>No long-term vision</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">📘 Recommended Reading</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>*The Intelligent Investor* – Benjamin Graham</li>
        <li>*Rich Dad Poor Dad* – Robert Kiyosaki</li>
        <li>*Common Stocks & Uncommon Profits* – Philip Fisher</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🧩 Real-Life Example</h2>
      <p><strong>Sarah</strong> started investing $200/month at age 25. By age 60, she had over $500,000. Starting just 10 years later (at 35), she'd only have ~$240,000.</p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">🔚 Final Thoughts</h2>
      <p>Investing is a journey. Start now, be consistent, and keep learning. The earlier you begin, the better your outcomes.</p>
      <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mt-6">
        “An investment in knowledge pays the best interest.” – Benjamin Franklin
      </blockquote>
    </section>
  );
}

export default InvestmentGuide;
