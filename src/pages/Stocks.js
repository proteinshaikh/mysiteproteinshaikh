import React from 'react';

const stockTips = [
    {
        title: "Invest in What You Understand",
        content: "Like Warren Buffet, stick to businesses and industries you deeply understand before investing.",
    },
    {
        title: "Be Greedy When Others Are Fearful",
        content: "Market downturns are often the best time to buy — if you're investing for the long term.",
    },
    {
        title: "Focus on the Long Term",
        content: "Avoid chasing short-term gains. Look for businesses with sustainable competitive advantages.",
    },
    {
        title: "Diversify, But Not Too Much",
        content: "Buffet suggests 5–10 great investments you know well is better than over-diversifying.",
    },
    {
        title: "Cash is Not Trash",
        content: "Always keep some cash reserve to take advantage of future opportunities."
    }
];

function Stocks() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">📊 Investment Wisdom</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {stockTips.map((tip, idx) => (
                    <div key={idx} className="p-6 border border-gray-200 rounded shadow hover:shadow-lg bg-white">
                        <h3 className="text-xl font-semibold text-accent mb-2">{tip.title}</h3>
                        <p className="text-gray-700">{tip.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stocks;
