import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
            {children}
        </section>
    );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="overflow-x-auto my-5">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-blue-50">
                        {headers.map(h => (
                            <th key={h} className="text-left px-4 py-2.5 font-semibold text-blue-800 border border-blue-100">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, j) => (
                                <td key={j} className="px-4 py-2.5 border border-gray-100 text-gray-700">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function P({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

function Ul({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="list-disc list-inside space-y-1.5 mb-4 text-gray-600">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-l-4 border-blue-400 bg-blue-50 px-5 py-4 rounded-r-xl my-5 text-sm text-blue-900 leading-relaxed">
            {children}
        </div>
    );
}

export default function ETFArticle(): JSX.Element {
    return (
        <>
            <Helmet><title>ETF Investing: A Beginner's Guide · Zeeshan Shaikh</title></Helmet>

            {/* Hero */}
            <div className="w-full bg-gradient-to-br from-blue-50 via-white to-red-50 border-b border-blue-100">
                <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-700 font-medium mb-6 transition-colors">
                            ← Back to home
                        </Link>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">Investing</span>
                            <span className="text-xs text-gray-400">· 15 min read</span>
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            ETF Investing: A Beginner's Guide to Building Wealth Through the Stock Market
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Understanding index funds, S&P 500, global diversification, Ireland-domiciled ETFs and the power of long-term investing.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">Z</div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Zeeshan Shaikh</p>
                                <p className="text-xs text-gray-400">Developer · Lifter · Investor</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Article body */}
            <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}
                className="max-w-3xl mx-auto px-6 lg:px-12 py-12"
            >
                <Section title="Introduction: Why I Started Looking at ETFs">
                    <P>For a long time, investing in the stock market seemed complicated. There were thousands of companies, different stock exchanges, financial news, market predictions and countless opinions about which stocks would perform well.</P>
                    <P>But the more I learned about investing, the more I realised that building wealth through the stock market doesn't necessarily require picking individual stocks or constantly monitoring market movements.</P>
                    <P>One concept that particularly caught my attention was <strong>Exchange-Traded Funds (ETFs)</strong>.</P>
                    <P>ETFs allow ordinary investors to own a diversified collection of stocks through a single investment. Instead of trying to identify the next Apple, Microsoft or Amazon, you can invest in a fund that already holds hundreds or thousands of companies.</P>
                    <Callout>My investment philosophy has gradually moved towards something simple: invest regularly, keep costs low, diversify globally where appropriate and allow compounding to do its work.</Callout>
                </Section>

                <Section title="1. What Exactly Is an ETF?">
                    <P>An Exchange-Traded Fund is an investment fund that trades on a stock exchange, just like an individual company's shares. Think of an ETF as a basket containing multiple investments.</P>
                    <Ul items={[
                        <span>Buying Apple stock means owning a small portion of Apple.</span>,
                        <span>Buying an S&P 500 ETF means owning exposure to approximately 500 leading US companies.</span>,
                        <span>Buying a global equity ETF means owning exposure to companies across multiple countries and markets.</span>,
                    ]} />
                    <P>Rather than purchasing individual shares of hundreds of companies, you can buy a single ETF and gain exposure to all its underlying holdings. This is one of the biggest advantages of ETFs: <strong>diversification with simplicity</strong>.</P>
                </Section>

                <Section title="2. Understanding Index Funds and Passive Investing">
                    <P>One of the most influential ideas I came across was the philosophy of John Bogle, founder of Vanguard. Bogle believed that most ordinary investors would be better served by investing in low-cost index funds rather than attempting to beat the market through frequent trading and stock selection.</P>
                    <P>An index is simply a collection of securities representing a particular market or segment. Some popular indices include:</P>
                    <Ul items={[
                        <span><strong>S&P 500:</strong> Tracks approximately 500 leading US companies.</span>,
                        <span><strong>NASDAQ-100:</strong> Tracks 100 of the largest non-financial companies listed on the Nasdaq.</span>,
                        <span><strong>MSCI World:</strong> Covers large and mid-sized companies across developed markets.</span>,
                        <span><strong>FTSE All-World:</strong> Covers large and mid-sized companies across developed and emerging markets.</span>,
                    ]} />
                    <P>The important distinction is that you are not trying to predict which company will perform best. You are investing in the broader market.</P>
                </Section>

                <Section title="3. Understanding the S&P 500">
                    <P>The S&P 500 represents approximately 500 leading publicly traded US companies and covers a substantial portion of the US equity market. Some of its well-known constituents include Apple, Microsoft, NVIDIA, Amazon, Alphabet (Google), Meta, Berkshire Hathaway and JPMorgan Chase.</P>
                    <Table
                        headers={['ETF', 'Domicile', 'Structure']}
                        rows={[
                            ['VOO', 'United States', 'Distributing'],
                            ['SPY', 'United States', 'Distributing'],
                            ['IVV', 'United States', 'Distributing'],
                            ['CSPX', 'Ireland', 'Accumulating'],
                            ['VUAA', 'Ireland', 'Accumulating'],
                            ['VUSD', 'Ireland', 'Distributing'],
                        ]}
                    />
                </Section>

                <Section title="4. US-Domiciled vs Ireland-Domiciled ETFs">
                    <P>Not every ETF that invests in US companies needs to be domiciled in the United States. Both VOO and CSPX provide S&P 500 exposure, but with different fund domiciles.</P>
                    <P><strong>US-domiciled:</strong> VOO, VTI, IVV, VXUS &nbsp;|&nbsp; <strong>Ireland-domiciled:</strong> CSPX, VUAA, VWRA, VUSD</P>
                    <P>For investors living outside the United States, domicile can affect:</P>
                    <Ul items={[
                        'Dividend withholding taxes',
                        'Estate tax considerations',
                        'Fund-level taxation',
                        'Regulatory protections and reporting requirements',
                    ]} />
                    <Callout>Ireland has a tax treaty with the United States that generally allows qualifying Irish funds to receive US dividends subject to 15% withholding tax at the fund level — more favourable than the 30% rate for non-treaty investors.</Callout>
                </Section>

                <Section title="5. Accumulating vs Distributing ETFs">
                    <P><strong>Accumulating (Acc):</strong> Dividends are automatically reinvested into the fund. Value grows internally. Examples: VWRA, CSPX, VUAA.</P>
                    <P><strong>Distributing (Dist):</strong> Dividends are paid out to investors periodically. Examples: VOO, VUSD, VWRD.</P>
                    <P>For long-term wealth accumulation, accumulating ETFs are convenient because dividends compound automatically. However, accumulating does not mean tax-free — treatment depends on your tax residency.</P>
                </Section>

                <Section title="6. VWRA: Investing in the Entire World Through One ETF">
                    <P>VWRA is the Vanguard FTSE All-World UCITS ETF, domiciled in Ireland. It provides exposure to thousands of companies across developed and emerging markets — US, Japan, UK, China, India, France, Canada, Germany, Switzerland and more.</P>
                    <P>The United States represents the largest portion of the fund, but investors also get exposure to other economies. It is an accumulating ETF, making it convenient for long-term investors who want worldwide diversification without managing multiple regional funds.</P>
                    <Callout>Nobody knows which country or economy will dominate the next 20 or 30 years. By investing globally, you don't have to make that prediction.</Callout>
                </Section>

                <Section title="7. VWRA vs CSPX: Global Diversification or US Concentration?">
                    <Table
                        headers={['Parameter', 'VWRA', 'CSPX']}
                        rows={[
                            ['Provider', 'Vanguard', 'iShares'],
                            ['Index', 'FTSE All-World', 'S&P 500'],
                            ['Domicile', 'Ireland', 'Ireland'],
                            ['Exposure', 'Global equities', 'US equities'],
                            ['Emerging markets', 'Yes', 'No'],
                            ['Accumulating', 'Yes', 'Yes'],
                            ['Holdings', 'Thousands', '~500'],
                        ]}
                    />
                    <P>Neither approach is automatically superior. The US has historically delivered impressive returns, but past performance doesn't guarantee future results. Global diversification reduces dependence on a single country's stock market.</P>
                </Section>

                <Section title="8. Understanding Expense Ratios">
                    <P>Fund providers charge an annual management expense expressed as the Total Expense Ratio (TER). A difference of 0.10% looks insignificant, but expenses compound over long periods.</P>
                    <Table
                        headers={['ETF', 'Approximate TER']}
                        rows={[
                            ['VOO', '0.03%'],
                            ['VUAA', '0.07%'],
                            ['CSPX', '0.07%'],
                            ['VWRA', '0.19%'],
                        ]}
                    />
                    <P>On a $100,000 portfolio: 0.03% = ~$30/year vs 0.20% = ~$200/year. The difference becomes meaningful as your portfolio grows — this is why Bogle consistently emphasised keeping costs low.</P>
                </Section>

                <Section title="9. How Compounding Builds Wealth">
                    <P>Compounding means earning returns on your original investment and on the returns accumulated over previous years. Consider investing $500/month at an assumed 8% annual return:</P>
                    <Table
                        headers={['Investment Period', 'Approximate Portfolio']}
                        rows={[
                            ['5 years', '$36,700'],
                            ['10 years', '$91,500'],
                            ['15 years', '$173,000'],
                            ['20 years', '$294,500'],
                            ['25 years', '$475,000'],
                            ['30 years', '$745,000'],
                        ]}
                    />
                    <Callout>Total invested over 30 years: $180,000. The rest is compounding. These are hypothetical figures assuming a constant 8% annualised return — real markets fluctuate. The lesson: time in the market matters more than timing the market.</Callout>
                </Section>

                <Section title="10. How to Invest in ETFs from Outside the United States">
                    <P>You don't need to live in the US to invest in its stock market. International investors can access US and international exchanges through global brokerage platforms. One platform I explored is Interactive Brokers (IBKR), which provides access to NYSE, NASDAQ, LSE and European exchanges.</P>
                    <P>An international investor can purchase VWRA or CSPX through the London Stock Exchange. Always verify the fund's ISIN, exchange and share class before purchasing — the ticker and trading currency can differ depending on the exchange.</P>
                </Section>

                <Section title="11. What About Dividends and Passive Income?">
                    <P>Most broad-market equity ETFs do not distribute dividends monthly. Some distribute quarterly or semi-annually; accumulating ETFs reinvest internally.</P>
                    <P>If you own a $200,000 portfolio with a 2% annual dividend yield, gross annual income would be ~$4,000 (~$333/month). This is not guaranteed — yields fluctuate, distributions can change, and taxes may apply.</P>
                </Section>

                <Section title="12. Important Risks of ETF Investing">
                    <Ul items={[
                        <span><strong>Market risk:</strong> Your investment can decline when the stock market falls.</span>,
                        <span><strong>Concentration risk:</strong> An S&P 500 ETF remains concentrated in one country with heavy exposure to a handful of large companies.</span>,
                        <span><strong>Currency risk:</strong> Your home currency may strengthen or weaken against the currencies of underlying investments.</span>,
                        <span><strong>Geopolitical risk:</strong> Political decisions, wars, trade restrictions and economic instability can affect markets.</span>,
                        <span><strong>Behavioural risk:</strong> Selling during a crash or chasing recent performance can seriously damage long-term returns.</span>,
                    ]} />
                </Section>

                <Section title="13. Books and Resources That Changed How I Think">
                    <Ul items={[
                        <span><strong>John C. Bogle</strong> — The Little Book of Common Sense Investing</span>,
                        <span><strong>JL Collins</strong> — The Simple Path to Wealth</span>,
                        <span><strong>Bogleheads</strong> — Community inspired by Bogle's philosophy (bogleheads.org)</span>,
                    ]} />
                </Section>

                {/* Conclusion */}
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl border border-blue-100 p-7 mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Conclusion: Keep It Simple and Think Long Term</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The more I learn about investing, the more I appreciate simplicity. You don't need to predict the next market crash or identify the next multibagger. A well-diversified, low-cost ETF portfolio can be a practical way to participate in the growth of global businesses.
                    </p>
                    <p className="text-blue-800 font-semibold text-sm">
                        The objective isn't to get rich overnight. It's to build wealth patiently over decades.
                    </p>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-6 italic">
                    Disclaimer: This article represents personal learning and educational observations, not financial advice or a recommendation to buy or sell any security. ETF structures, fees, tax treatment and regulations can change. Investors should research individual funds and consider their own tax residency and financial circumstances before investing.
                </p>

                <div className="mt-8">
                    <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
