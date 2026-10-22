import React, { JSX } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

function Section({ title, children }: { title: string; children: React.ReactNode }): JSX.Element {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="mb-10"
        >
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">{title}</h2>
            {children}
        </motion.section>
    );
}

function Job({ role, company, period, points }: {
    role: string; company: string; period: string; points: string[];
}): JSX.Element {
    return (
        <div className="relative pl-5 mb-7 last:mb-0 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-indigo-100">
            <span className="absolute left-[-4px] top-[7px] w-2 h-2 rounded-full bg-indigo-400 ring-2 ring-white" />
            <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                <p className="text-sm font-bold text-gray-900">{role}</p>
                <span className="text-xs text-gray-400">{period}</span>
            </div>
            <p className="text-xs text-indigo-500 font-medium mb-2">{company}</p>
            <ul className="space-y-1">
                {points.map((p, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-indigo-300 mt-0.5 shrink-0">›</span>
                        {p}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Chip({ label }: { label: string }): JSX.Element {
    return (
        <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium">
            {label}
        </span>
    );
}

export default function ResumePage(): JSX.Element {
    return (
        <>
            <Helmet><title>Resume · Zeeshan Shaikh</title></Helmet>

            {/* Header */}
            <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b border-indigo-100">
                <div className="max-w-4xl mx-auto px-6 lg:px-16 py-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">Resume</p>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Zeeshan Shaikh</h1>
                        <p className="text-gray-500 mt-1 text-sm">Senior Software Developer · Java · Spring Boot · Microservices · Banking & FinTech</p>
                        <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
                            <span>📍 Dubai, UAE</span>
                            <a href="tel:+971557436491" className="hover:text-indigo-600 transition-colors">📞 +971 55 743 6491</a>
                            <a href="mailto:ershaikhzeeshan@gmail.com" className="hover:text-indigo-600 transition-colors">✉️ ershaikhzeeshan@gmail.com</a>
                            <a href="https://github.com/proteinshaikh" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">🐙 github.com/proteinshaikh</a>
                            <a href="https://linkedin.com/in/proteinshaikh" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">💼 linkedin.com/in/proteinshaikh</a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-16 py-12">

                {/* Profile */}
                <Section title="Profile">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Senior Java Backend Developer with 10+ years of software engineering experience, focused on scalable microservices
                        and high-performance backend systems. Strong experience with Java 8+, Spring Boot, REST APIs, JPA, Kafka, SQL,
                        Azure, Docker and Kubernetes. Experienced in banking and financial applications, backend architecture, API integrations,
                        testing, observability, performance and production-grade delivery.
                    </p>
                </Section>

                {/* Tech */}
                <Section title="Core Technology">
                    <div className="space-y-3">
                        {[
                            { label: 'Languages',        items: ['Java 8+', 'Core Java', 'Multithreading', 'Collections'] },
                            { label: 'Backend',          items: ['Spring Boot', 'Spring Cloud', 'JPA', 'REST APIs', 'Microservices'] },
                            { label: 'Messaging',        items: ['Apache Kafka'] },
                            { label: 'Cloud / Platform', items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'OpenShift'] },
                            { label: 'Databases',        items: ['Oracle SQL', 'MongoDB'] },
                            { label: 'Testing',          items: ['JUnit', 'Unit Testing', 'Integration Testing'] },
                            { label: 'CI/CD & Tools',    items: ['Jenkins', 'GitLab', 'GitHub', 'Jira'] },
                            { label: 'Observability',    items: ['Dynatrace', 'Grafana', 'Azure Application Insights'] },
                            { label: 'Methodology',      items: ['Agile'] },
                        ].map(({ label, items }) => (
                            <div key={label} className="flex flex-wrap items-start gap-2">
                                <span className="text-xs text-gray-400 font-medium w-32 shrink-0 pt-1">{label}</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {items.map(i => <Chip key={i} label={i} />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Experience */}
                <Section title="Professional Experience">
                    <Job
                        role="Senior Software Developer"
                        company="Mashreq Bank, Dubai, UAE"
                        period="2023 – Present"
                        points={[
                            'Designed, developed and maintained Java/Spring Boot microservices supporting money-transfer applications.',
                            'Implemented secure REST APIs for communication between microservices and external systems.',
                            'Integrated third-party payment gateways and financial APIs to support fund-transfer workflows.',
                            'Performed unit and integration testing to improve reliability and production stability.',
                        ]}
                    />
                    <Job
                        role="Software Developer"
                        company="Innovations Group UAE"
                        period="2023 (5 months)"
                        points={[
                            'Designed and implemented microservices for a high-traffic banking and travel-card application, with a focus on scalability and reliability.',
                            'Developed services covering login, onboarding, card management, account management, fund transfers and loyalty programs.',
                        ]}
                    />
                    <Job
                        role="Software Developer"
                        company="Deloitte"
                        period="2020 – 2023"
                        points={[
                            'Developed custom logging and monitoring for Spring-based applications using Microsoft Azure Application Insights.',
                            'Engineered reusable API wrappers to improve consistency and maintainability across integrations.',
                            'Maintained and enhanced microservices and endpoints in response to evolving business requirements.',
                        ]}
                    />
                    <Job
                        role="Senior System Engineer"
                        company="IBM"
                        period="2020 (7 months)"
                        points={[
                            'Contributed to the design of microservices architecture, defining frameworks and components aligned with application requirements.',
                        ]}
                    />
                    <Job
                        role="Software Developer"
                        company="LTIMindtree"
                        period="2016 – 2020"
                        points={[
                            "Developed the 'My Task' feature for tracking assigned tasks and deadlines, supporting project management and user productivity.",
                            'Enhanced workstation microservices using Core Java, Spring Boot 2.0 and Spring JPA.',
                            'Architected and developed core modules using Java 8+, Spring Boot and microservices, with focus on availability, concurrency and scalability.',
                        ]}
                    />
                </Section>

                {/* Education */}
                <Section title="Education & Certification">
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <div>
                                <p className="text-sm font-bold text-gray-900">Bachelor of Engineering</p>
                                <p className="text-xs text-indigo-500 font-medium">University of Mumbai, Mumbai</p>
                            </div>
                            <span className="text-xs text-gray-400">2012 – 2016</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm text-gray-600">🏅 Microsoft Certified: Azure Fundamentals</span>
                        </div>
                    </div>
                </Section>

            </div>
        </>
    );
}
