import React, {JSX} from 'react';
import { Helmet } from 'react-helmet';

function BuffettInvestmentLessons(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Investment Lessons from Warren Buffett | ProteinShaikh</title>
      </Helmet>
      <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">📈 Investment Lessons from Warren Buffett</h1>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🧠 Core Principles</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Make a few <strong>smart decisions</strong> rather than 100 average ones.</li>
          <li>Don’t chase patterns—they rarely repeat exactly.</li>
          <li>You only need <strong>2-3 successful businesses</strong> to build wealth.</li>
          <li>Focus on <strong>business understanding</strong>, not market trends.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📚 Reading & Research</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Spend more time reading <strong>annual reports</strong>, industry articles, and business news.</li>
          <li>Know the company through its <strong>customers, competitors, and former employees</strong>.</li>
          <li>Buffett follows <strong>Ben Graham</strong> (value investing) and <strong>Phil Fisher</strong> (business quality).</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">💸 Financial Discipline</h2>

        <div className="md:flex md:items-start md:gap-6 mb-6">
          {/* Left: Image + Caption */}
          <div className="md:w-64 w-full flex flex-col items-center md:items-start">
            <img
              src={`${process.env.PUBLIC_URL}/warren.jpg`}
              alt="The Oracle of Omaha"
              className="w-full rounded-xl shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2 text-center md:text-left">The Oracle of Omaha</p>
          </div>

          {/* Right: Text */}
          <ul className="list-disc list-inside space-y-2 mt-4 md:mt-0">
            <li>Buy companies with <strong>low P/E ratios</strong>—high P/E may mean overpricing.</li>
            <li>A <strong>dividend-paying company</strong> should ideally have <strong>zero debt</strong>.</li>
            <li><strong>CEO compensation</strong> much higher than peers is a red flag.</li>
            <li>Keep a <strong>pile of cash</strong> for unexpected opportunities.</li>
            <li>Invest only when the business is available at a <strong>discount to intrinsic value</strong>.</li>
            <li><strong>Buybacks</strong> are a good signal—if a company buys back its shares, consider buying.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🏢 What Buffett Looks for in a Business</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Simple and <strong>understandable business</strong>.</li>
          <li><strong>Consistent operational history</strong>.</li>
          <li><strong>Favorable long-term prospects</strong>.</li>
          <li><strong>Generates cash</strong> in excess of its needs.</li>
          <li><strong>Trustworthy founders or CEOs</strong> are a plus.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🧮 Margin of Safety & Intrinsic Value</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The <strong>intrinsic value</strong> is what the stock is really worth.</li>
          <li>Always invest with a <strong>margin of safety</strong>—buy below intrinsic value.</li>
          <li>Buying businesses at low prices is the foundation of value investing.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📊 Portfolio & Allocation Strategy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>It’s better to invest <strong>80% in a few great companies</strong> and 20% in others.</li>
          <li>Phil Fisher held <strong>less than 10 companies</strong>, with 75% in 3–4 of them.</li>
          <li>Quarterly performance is not a good indicator of long-term success.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🧠 Wisdom from Charlie Munger</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Look through metrics like <strong>ROE</strong> (Return on Equity) and <strong>Margin of Safety</strong>.</li>
          <li>Stay rational—most investors are trapped by <strong>fear and greed</strong>.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">⚠️ Common Pitfalls to Avoid</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Don’t follow <strong>market fads</strong>.</li>
          <li>Don’t speculate about <strong>interest rates</strong> or macroeconomics.</li>
          <li>Don’t let emotion override business logic.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📘 Final Thought</h2>
        <p>
          Ask yourself: <em>“Has anybody done something foolish that gives me the opportunity to buy a great
          business at a great price?”</em>
          That’s the Buffett mindset—buy great companies, understand them deeply, and wait patiently with
          discipline and courage.
        </p>
      </section>
    </>
  );
}

export default BuffettInvestmentLessons;
