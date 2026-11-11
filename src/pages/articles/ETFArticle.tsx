import React, { useRef, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

/* ── helpers ─────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.section ref={ref} className="mb-12"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
            {children}
        </motion.section>
    );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="overflow-x-auto my-5">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-blue-50">
                        {headers.map(h => <th key={h} className="text-left px-4 py-2.5 font-semibold text-blue-800 border border-blue-100">{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {row.map((cell, j) => <td key={j} className="px-4 py-2.5 border border-gray-100 text-gray-700">{cell}</td>)}
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

function ChartCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <motion.div ref={ref} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 my-6"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className="text-sm font-semibold text-gray-800 mb-0.5">{title}</p>
            {subtitle && <p className="text-xs text-gray-400 mb-4">{subtitle}</p>}
            {children}
        </motion.div>
    );
}

/* ── chart data ──────────────────────────────────────────── */
const compoundData = [
    { year: 'Year 0',  invested: 0,      portfolio: 0 },
    { year: 'Year 5',  invested: 30000,  portfolio: 36700 },
    { year: 'Year 10', invested: 60000,  portfolio: 91500 },
    { year: 'Year 15', invested: 90000,  portfolio: 173000 },
    { year: 'Year 20', invested: 120000, portfolio: 294500 },
    { year: 'Year 25', invested: 150000, portfolio: 475000 },
    { year: 'Year 30', invested: 180000, portfolio: 745000 },
];

const terData = [
    { name: 'VOO',  ter: 0.03, fill: '#1d4ed8' },
    { name: 'VUAA', ter: 0.07, fill: '#3b82f6' },
    { name: 'CSPX', ter: 0.07, fill: '#60a5fa' },
    { name: 'VWRA', ter: 0.19, fill: '#ef4444' },
];

const vwraAllocation = [
    { name: 'United States', value: 63, color: '#1d4ed8' },
    { name: 'Japan',         value: 6,  color: '#3b82f6' },
    { name: 'UK',            value: 4,  color: '#60a5fa' },
    { name: 'China',         value: 3,  color: '#ef4444' },
    { name: 'France',        value: 3,  color: '#f87171' },
    { name: 'Other',         value: 21, color: '#d1d5db' },
];

const withholdingData = [
    { label: 'Ireland-domiciled (treaty)', rate: 15, fill: '#1d4ed8' },
    { label: 'Non-treaty investors',       rate: 30, fill: '#ef4444' },
];

const dollarCostData = [
    { month: 'Jan', price: 100, units: 5.0  },
    { month: 'Feb', price: 80,  units: 6.25 },
    { month: 'Mar', price: 90,  units: 5.56 },
    { month: 'Apr', price: 70,  units: 7.14 },
    { month: 'May', price: 110, units: 4.55 },
    { month: 'Jun', price: 120, units: 4.17 },
];

const formatUSD = (v: number) => v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`;

/* ── main ────────────────────────────────────────────────── */
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
                        {/* Author — photo beside name */}
                        <div className="flex items-center gap-3 mt-6">
                            <img
                                src={`${process.env.PUBLIC_URL}/fit.jpeg`}
                                alt="Zeeshan Shaikh"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                            />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Zeeshan Shaikh</p>
                                <p className="text-xs text-gray-400">Developer · Lifter · Investor</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Body */}
            <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}
                className="max-w-3xl mx-auto px-6 lg:px-12 py-12"
            >
                <Section title="Introduction: Why I Started Looking at ETFs">
                    <P>For a long time, investing in the stock market seemed complicated — thousands of companies, different exchanges, endless opinions. But the more I learned, the more I realised building wealth doesn't require picking individual stocks.</P>
                    <P>One concept that changed everything for me was <strong>Exchange-Traded Funds (ETFs)</strong> — a single investment that holds hundreds or thousands of companies at once.</P>
                    <Callout>My philosophy: invest regularly, keep costs low, diversify globally, and let compounding do its work.</Callout>
                </Section>

                <Section title="1. What Exactly Is an ETF?">
                    <P>An ETF is a fund that trades on a stock exchange like a regular share. Think of it as a basket of investments.</P>
                    <Ul items={[
                        <span>Buying Apple stock = owning a slice of Apple.</span>,
                        <span>Buying an S&P 500 ETF = owning exposure to ~500 leading US companies.</span>,
                        <span>Buying a global ETF = owning exposure to companies across the entire world.</span>,
                    ]} />
                    <P>One purchase. Instant diversification. That's the power.</P>
                </Section>

                <Section title="2. Understanding Index Funds and Passive Investing">
                    <P>John Bogle, founder of Vanguard, believed most investors are better served by low-cost index funds than by trying to beat the market. Some popular indices:</P>
                    <Ul items={[
                        <span><strong>S&P 500:</strong> ~500 leading US companies.</span>,
                        <span><strong>NASDAQ-100:</strong> 100 largest non-financial Nasdaq companies.</span>,
                        <span><strong>MSCI World:</strong> Large/mid-cap companies across developed markets.</span>,
                        <span><strong>FTSE All-World:</strong> Developed + emerging markets globally.</span>,
                    ]} />
                </Section>

                <Section title="3. Understanding the S&P 500">
                    <P>The S&P 500 is the world's most watched index — ~500 leading US companies including Apple, Microsoft, NVIDIA, Amazon, Alphabet, Meta and JPMorgan Chase.</P>
                    <Table
                        headers={['ETF', 'Domicile', 'Structure']}
                        rows={[
                            ['VOO',  'United States', 'Distributing'],
                            ['SPY',  'United States', 'Distributing'],
                            ['IVV',  'United States', 'Distributing'],
                            ['CSPX', 'Ireland',       'Accumulating'],
                            ['VUAA', 'Ireland',       'Accumulating'],
                            ['VUSD', 'Ireland',       'Distributing'],
                        ]}
                    />
                </Section>

                <Section title="4. US-Domiciled vs Ireland-Domiciled ETFs">
                    <P>For international investors, where an ETF is registered matters — it affects taxes, estate planning and regulatory protections.</P>
                    <Callout>Ireland has a tax treaty with the US allowing qualifying Irish funds to receive US dividends at 15% withholding tax — vs 30% for non-treaty investors.</Callout>

                    {/* Withholding tax bar chart */}
                    <ChartCard title="Dividend Withholding Tax Rate" subtitle="Ireland-domiciled ETFs benefit from the US-Ireland tax treaty">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={withholdingData} barSize={60}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                                <YAxis tickFormatter={v => `${v}%`} tick={{ fontSize: 11 }} domain={[0, 35]} />
                                <Tooltip formatter={(v) => `${Number(v)}%`} />
                                <Bar dataKey="rate" radius={[6, 6, 0, 0]}>
                                    {withholdingData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </Section>

                <Section title="5. Accumulating vs Distributing ETFs">
                    <P><strong>Accumulating (Acc):</strong> Dividends are reinvested automatically — value grows internally. Examples: VWRA, CSPX, VUAA.</P>
                    <P><strong>Distributing (Dist):</strong> Dividends are paid out periodically. Examples: VOO, VUSD, VWRD.</P>
                    <P>For long-term wealth building, accumulating ETFs are convenient — no manual reinvestment needed. But accumulating ≠ tax-free. Tax treatment depends on your residency.</P>
                </Section>

                <Section title="6. VWRA: Investing in the Entire World">
                    <P>VWRA (Vanguard FTSE All-World UCITS ETF, Ireland) gives you exposure to thousands of companies across developed and emerging markets. You don't have to predict which country wins the next 30 years.</P>

                    {/* VWRA allocation pie */}
                    <ChartCard title="VWRA Approximate Geographic Allocation" subtitle="US dominates but you get global exposure">
                        <ResponsiveContainer width="100%" height={260}>
                            <PieChart>
                                <Pie data={vwraAllocation} dataKey="value" nameKey="name"
                                    cx="50%" cy="50%" outerRadius={90} innerRadius={50}
                                    paddingAngle={3} animationBegin={0} animationDuration={900}>
                                    {vwraAllocation.map((d, i) => <Cell key={i} fill={d.color} />)}
                                </Pie>
                                <Tooltip formatter={(v) => `${Number(v)}%`} />
                                <Legend iconType="circle" iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </Section>

                <Section title="7. VWRA vs CSPX">
                    <Table
                        headers={['Parameter', 'VWRA', 'CSPX']}
                        rows={[
                            ['Provider',         'Vanguard',       'iShares'],
                            ['Index',            'FTSE All-World', 'S&P 500'],
                            ['Domicile',         'Ireland',        'Ireland'],
                            ['Exposure',         'Global',         'US only'],
                            ['Emerging markets', 'Yes',            'No'],
                            ['Accumulating',     'Yes',            'Yes'],
                            ['Holdings',         'Thousands',      '~500'],
                        ]}
                    />
                    <P>Neither is automatically better. The US has delivered impressive historical returns, but past performance doesn't guarantee the future. Global diversification removes the need to predict which country leads next.</P>
                </Section>

                <Section title="8. Understanding Expense Ratios">
                    <P>Every ETF charges an annual Total Expense Ratio (TER). Small differences compound significantly over decades.</P>

                    {/* TER bar chart */}
                    <ChartCard title="ETF Expense Ratios (TER)" subtitle="Lower is better — costs compound just like returns do">
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={terData} barSize={50}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                <YAxis tickFormatter={v => `${v}%`} tick={{ fontSize: 11 }} domain={[0, 0.25]} />
                                <Tooltip formatter={(v) => `${Number(v)}%`} />
                                <Bar dataKey="ter" radius={[6, 6, 0, 0]}>
                                    {terData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <P>On a $100,000 portfolio: 0.03% = ~$30/year vs 0.20% = ~$200/year. Over 30 years, that gap is thousands of dollars.</P>
                </Section>

                <Section title="9. How Compounding Builds Wealth">
                    <P>Compounding is earning returns on your returns. Invest $500/month at an assumed 8% annual return and watch what happens:</P>

                    {/* Compounding area chart */}
                    <ChartCard title="$500/month at 8% Annual Return" subtitle="Hypothetical illustration — real markets fluctuate">
                        <ResponsiveContainer width="100%" height={280}>
                            <AreaChart data={compoundData}>
                                <defs>
                                    <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%"  stopColor="#1d4ed8" stopOpacity={0.25} />
                                        <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.02} />
                                    </linearGradient>
                                    <linearGradient id="investedGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%"  stopColor="#ef4444" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.02} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                                <YAxis tickFormatter={formatUSD} tick={{ fontSize: 11 }} />
                                <Tooltip formatter={(v) => formatUSD(Number(v))} />
                                <Legend iconType="circle" iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                                <Area type="monotone" dataKey="invested"  name="Total Invested"  stroke="#ef4444" fill="url(#investedGrad)"  strokeWidth={2} animationDuration={1200} />
                                <Area type="monotone" dataKey="portfolio" name="Portfolio Value" stroke="#1d4ed8" fill="url(#portfolioGrad)" strokeWidth={2.5} animationDuration={1400} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <Callout>Total invested over 30 years: $180,000. Portfolio value: ~$745,000. The gap between the two lines is pure compounding. Time in the market beats timing the market.</Callout>
                </Section>

                <Section title="10. Dollar-Cost Averaging in Action">
                    <P>Investing a fixed amount every month means you buy more units when prices are low and fewer when prices are high — naturally averaging your cost over time.</P>

                    {/* DCA chart */}
                    <ChartCard title="Dollar-Cost Averaging — $500/month" subtitle="Lower prices = more units purchased automatically">
                        <ResponsiveContainer width="100%" height={240}>
                            <BarChart data={dollarCostData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                                <YAxis yAxisId="left"  tickFormatter={v => `$${v}`} tick={{ fontSize: 11 }} />
                                <YAxis yAxisId="right" orientation="right" tickFormatter={v => `${v} u`} tick={{ fontSize: 11 }} />
                                <Tooltip />
                                <Legend iconType="circle" iconSize={10} wrapperStyle={{ fontSize: 12 }} />
                                <Bar yAxisId="left"  dataKey="price" name="ETF Price ($)"   fill="#1d4ed8" radius={[4,4,0,0]} animationDuration={1000} />
                                <Bar yAxisId="right" dataKey="units" name="Units Bought"    fill="#ef4444" radius={[4,4,0,0]} animationDuration={1200} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </Section>

                <Section title="11. How to Invest from Outside the United States">
                    <P>You don't need to live in the US to invest in its market. Platforms like Interactive Brokers (IBKR) give access to NYSE, NASDAQ, LSE and European exchanges. International investors can buy VWRA or CSPX through the London Stock Exchange.</P>
                    <P>Always verify the fund's ISIN, exchange and share class before purchasing — tickers and currencies differ by exchange.</P>
                </Section>

                <Section title="12. What About Dividends and Passive Income?">
                    <P>Most broad-market ETFs don't pay monthly dividends. Accumulating ETFs reinvest internally; distributing ones pay quarterly or semi-annually.</P>
                    <P>On a $200,000 portfolio with a 2% yield: ~$4,000/year (~$333/month) gross. Not guaranteed — yields fluctuate and taxes apply.</P>
                </Section>

                <Section title="13. Important Risks">
                    <Ul items={[
                        <span><strong>Market risk:</strong> Investments can and do fall.</span>,
                        <span><strong>Concentration risk:</strong> S&P 500 ETFs are still one-country concentrated.</span>,
                        <span><strong>Currency risk:</strong> Exchange rate moves affect returns.</span>,
                        <span><strong>Geopolitical risk:</strong> Wars, trade restrictions, political instability.</span>,
                        <span><strong>Behavioural risk:</strong> Panic-selling during crashes is the biggest wealth destroyer.</span>,
                    ]} />
                </Section>

                <Section title="14. Books That Changed How I Think">
                    <Ul items={[
                        <span><strong>John C. Bogle</strong> — The Little Book of Common Sense Investing</span>,
                        <span><strong>JL Collins</strong> — The Simple Path to Wealth</span>,
                        <span><strong>Bogleheads</strong> — bogleheads.org (community + wiki)</span>,
                    ]} />
                </Section>

                {/* Conclusion */}
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl border border-blue-100 p-7 mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Conclusion: Keep It Simple and Think Long Term</h2>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        The more I learn about investing, the more I appreciate simplicity. A well-diversified, low-cost ETF portfolio lets ordinary people own thousands of businesses around the world.
                    </p>
                    <p className="text-blue-800 font-semibold text-sm">
                        The objective isn't to get rich overnight. It's to build wealth patiently over decades.
                    </p>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-6 italic">
                    Disclaimer: This article represents personal learning and educational observations, not financial advice or a recommendation to buy or sell any security. ETF structures, fees, tax treatment and regulations can change. Always research individual funds and consider your own tax residency and financial circumstances before investing.
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
