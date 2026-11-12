import React, { useState, JSX } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Phase = {
    id: string;
    number: string;
    title: string;
    timing: string;
    objective: string;
    topics: string[];
    deliverable: string;
    deliverableDetails: string[];
    resources: { label: string; href: string }[];
};

const phases: Phase[] = [
    {
        id: 'foundations',
        number: '01',
        title: 'AI foundations and Python for AI',
        timing: 'Month 1 · Weeks 1–4',
        objective: 'Understand how AI applications work and get comfortable with Python for AI development. With intermediate Python already in your toolkit, skip beginner syntax courses.',
        topics: [
            'NumPy and Pandas fundamentals',
            'Python type hints, Pydantic and async programming',
            'FastAPI, HTTP requests and model APIs',
            'JSON structured outputs',
            'Tokens, context windows and inference',
            'LLM architecture at a conceptual level',
            'Machine learning vs. generative AI',
            'Transformers, attention, parameters and model weights',
            'How an LLM generates its next token',
        ],
        deliverable: 'A question-answering API',
        deliverableDetails: [
            'Build a Python FastAPI endpoint that accepts a question, calls an LLM and returns structured JSON.',
            'Example: summarize a software engineering job description and extract its required skills.',
        ],
        resources: [
            { label: 'Hugging Face course', href: 'https://huggingface.co/learn' },
            { label: 'FastAPI tutorial', href: 'https://fastapi.tiangolo.com/tutorial/' },
            { label: 'OpenAI API documentation', href: 'https://platform.openai.com/docs/overview' },
        ],
    },
    {
        id: 'llm-engineering',
        number: '02',
        title: 'LLM engineering',
        timing: 'Month 2 · Weeks 5–8',
        objective: 'Integrate LLMs into real software applications, with predictable outputs and reliable failure handling.',
        topics: [
            'System and user messages, few-shot prompting and sampling',
            'Function calling, tool calling and structured outputs',
            'JSON schemas and streaming responses',
            'Model selection and API cost management',
            'Error handling, retries and timeouts',
            'When to use chat completion, structured output or a tool call',
        ],
        deliverable: 'An AI-powered customer support assistant',
        deliverableDetails: [
            'Classify customer queries, extract relevant information and return structured JSON.',
            'Call a simulated customer API using tool calling and handle failures gracefully.',
            'Implement the backend in Spring Boot and experiment with Python separately.',
        ],
        resources: [
            { label: 'OpenAI API documentation', href: 'https://platform.openai.com/docs/overview' },
            { label: 'Spring AI', href: 'https://docs.spring.io/spring-ai/reference/' },
        ],
    },
    {
        id: 'rag',
        number: '03',
        title: 'Embeddings, vector databases and RAG',
        timing: 'Months 3–4 · Weeks 9–16',
        objective: 'Learn to retrieve relevant private enterprise information and ground AI answers in that source material. This is one of the most commercially useful AI engineering capabilities.',
        topics: [
            'Embeddings, semantic similarity and cosine similarity',
            'Text chunking and document ingestion',
            'Vector indexing, vector databases and similarity search',
            'Hybrid search, metadata filtering and reranking',
            'RAG evaluation, grounded answers and citations',
            'Refusing to answer when the source material is insufficient',
        ],
        deliverable: 'An enterprise document intelligence platform',
        deliverableDetails: [
            'Let users upload PDFs and ask questions about their documents.',
            'Build ingestion, chunking, embedding generation, vector storage, semantic search and LLM-generated answers with source references.',
            'Add user-level document permissions and ensure answers stay grounded in the uploaded material.',
            'This is a strong project to demonstrate in enterprise AI engineering interviews.',
        ],
        resources: [
            { label: 'Spring AI RAG', href: 'https://docs.spring.io/spring-ai/reference/api/retrieval-augmented-generation.html' },
            { label: 'pgvector', href: 'https://github.com/pgvector/pgvector' },
            { label: 'Hugging Face NLP course', href: 'https://huggingface.co/learn/nlp-course' },
        ],
    },
    {
        id: 'agents',
        number: '04',
        title: 'AI agents and orchestration',
        timing: 'Months 5–6 · Weeks 17–24',
        objective: 'Move from applications that answer questions to applications that perform controlled tasks.',
        topics: [
            'Agent architecture, tool calling, state and memory',
            'Workflow orchestration, planning and execution',
            'Multi-step workflows and multi-agent patterns',
            'Human-in-the-loop approval',
            'Model Context Protocol (MCP)',
            'LangGraph',
        ],
        deliverable: 'A simulated banking operations agent',
        deliverableDetails: [
            'Connect a simulated customer API, transaction API, card API and account API.',
            'Handle requests such as “Show my last five transactions and calculate how much I spent on restaurants.”',
            'Add authorization, audit logging and human approval for sensitive operations.',
        ],
        resources: [
            { label: 'LangGraph documentation', href: 'https://docs.langchain.com/oss/python/langgraph/overview' },
            { label: 'MCP introduction', href: 'https://modelcontextprotocol.io/introduction' },
            { label: 'Spring AI tool calling', href: 'https://docs.spring.io/spring-ai/reference/api/tools.html' },
        ],
    },
    {
        id: 'production',
        number: '05',
        title: 'AI engineering in production',
        timing: 'Months 7–8 · Weeks 25–32',
        objective: 'Build AI applications that can operate reliably in real businesses—a natural extension of senior engineering experience.',
        topics: [
            'LLM evaluation, automated testing and hallucination measurement',
            'RAG evaluation, prompt injection and data privacy',
            'Guardrails, rate limiting, token optimization and caching',
            'Model fallback, tracing and observability',
            'Latency, throughput and model deployment fundamentals',
            'OpenTelemetry, Grafana, Langfuse, Docker, Kubernetes, Spring Boot and Python',
        ],
        deliverable: 'Productionize the RAG and agent projects',
        deliverableDetails: [
            'Add automated evaluation tests, security and access controls.',
            'Create monitoring dashboards and cost tracking.',
            'Design failure recovery and Docker-based deployment.',
        ],
        resources: [
            { label: 'Langfuse observability', href: 'https://langfuse.com/docs' },
            { label: 'OpenTelemetry', href: 'https://opentelemetry.io/docs/' },
            { label: 'OWASP GenAI Security Project', href: 'https://genai.owasp.org/' },
        ],
    },
    {
        id: 'capstone',
        number: '06',
        title: 'Advanced AI and capstone',
        timing: 'Month 9 · Weeks 33–39',
        objective: 'Understand the underlying models more deeply and demonstrate end-to-end engineering capability. You do not need to train an LLM from scratch.',
        topics: [
            'Open-source LLMs and Hugging Face Transformers',
            'Model quantization, fine-tuning, LoRA and QLoRA concepts',
            'Local inference and model benchmarking',
            'When to use RAG versus fine-tuning',
            'AI system design trade-offs',
        ],
        deliverable: 'An enterprise AI platform capstone',
        deliverableDetails: [
            'Combine document intelligence, RAG-based knowledge retrieval, AI agents and API integrations.',
            'Include role-based access, observability, evaluation and deployment.',
            'Publish a deployed, documented application you can demonstrate to hiring managers as your portfolio flagship project.',
        ],
        resources: [
            { label: 'Hugging Face Transformers', href: 'https://huggingface.co/docs/transformers/index' },
            { label: 'Hugging Face PEFT', href: 'https://huggingface.co/docs/peft/index' },
        ],
    },
];

const weeklySessions = [
    { day: 'Tuesday', time: '1 hour', activity: 'Learn concepts and theory' },
    { day: 'Thursday', time: '1 hour', activity: 'Follow documentation or a tutorial' },
    { day: 'Saturday or Sunday', time: '3 hours', activity: 'Write code, experiment and build' },
];

const technologyPriorities = [
    ['Python / FastAPI', 'High', 'Month 1'],
    ['OpenAI API', 'High', 'Months 1–2'],
    ['Spring AI', 'High', 'Month 2'],
    ['PostgreSQL / pgvector', 'High', 'Month 3'],
    ['RAG', 'Very high', 'Months 3–4'],
    ['LangGraph', 'High', 'Month 5'],
    ['MCP', 'Medium', 'Month 6'],
    ['Langfuse', 'High', 'Month 7'],
    ['Hugging Face', 'Medium', 'Month 9'],
    ['PyTorch', 'Optional', 'After month 9'],
];

const portfolioProjects = [
    {
        name: 'Document Intelligence',
        focus: 'RAG',
        description: 'PDF ingestion, embeddings, vector search, citations and access control.',
    },
    {
        name: 'Banking AI Agent',
        focus: 'Agents',
        description: 'Multi-API integration, tool calling, workflow orchestration and security.',
    },
    {
        name: 'Production AI Platform',
        focus: 'Architecture',
        description: 'Evaluation, observability, cost optimization, deployment and scalability.',
    },
];

const firstWeekTasks = [
    { title: 'Understand LLM architecture', detail: 'Study tokens, embeddings, transformers, attention and inference.', duration: 'Session 1 · 1 hour' },
    { title: 'Set up your AI development environment', detail: 'Set up Python, FastAPI, a virtual environment and an LLM API account.', duration: 'Session 2 · 1 hour' },
    { title: 'Build your first LLM application', detail: 'Create a FastAPI endpoint that sends a prompt to an LLM and returns a structured response.', duration: 'Session 3 · 2 hours' },
    { title: 'Explore Spring AI', detail: 'Read about ChatClient, model integrations and structured output. Compare the Java and Python approaches.', duration: 'Session 4 · 1 hour' },
];

function ResourceLinks({ items }: { items: Phase['resources'] }): JSX.Element {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {items.map(({ label, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50">
                    {label}<span aria-hidden="true">↗</span>
                </a>
            ))}
        </div>
    );
}

export default function AIRoadmapPage(): JSX.Element {
    const [openPhase, setOpenPhase] = useState('foundations');
    const [completedTasks, setCompletedTasks] = useState<number[]>([]);
    const completion = Math.round((completedTasks.length / firstWeekTasks.length) * 100);

    const toggleTask = (taskIndex: number) => {
        setCompletedTasks(current => current.includes(taskIndex)
            ? current.filter(index => index !== taskIndex)
            : [...current, taskIndex]);
    };

    return (
        <>
            <Helmet>
                <title>AI Engineer Roadmap · Zeeshan Shaikh</title>
                <meta name="description" content="A practical 9-month AI Engineer learning roadmap for an experienced backend developer: LLMs, RAG, agents and production AI." />
            </Helmet>

            <header className="t-hero-grad border-b border-gray-100">
                <div className="mx-auto max-w-5xl px-6 py-14 lg:px-12 lg:py-20">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:t-text-600">
                        <span aria-hidden="true">←</span> Back to home
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] t-text-600">A personalized learning map</p>
                        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                            Your path to becoming an <span className="t-text-600">AI Engineer</span>
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                            A focused transition from senior backend developer to Applied AI Engineer—built around the experience you already have, not a return to programming basics.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                ['9 months', 'transition plan'],
                                ['~195 hours', 'focused learning'],
                                ['5 hrs/week', 'sustainable pace'],
                                ['45 weeks', 'learn and build'],
                            ].map(([value, label]) => (
                                <div key={label} className="min-w-[130px] rounded-2xl border t-border-100 bg-white px-4 py-3 shadow-sm">
                                    <p className="text-xl font-bold t-text-700">{value}</p>
                                    <p className="text-xs text-gray-500">{label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 max-w-2xl border-l-2 t-border-300 pl-4 text-sm leading-relaxed text-gray-600">
                            <strong className="text-gray-900">Target outcome:</strong> independently design, develop, test and deploy AI-powered enterprise applications using Java, Python, LLMs, RAG and AI agents.
                        </p>
                    </motion.div>
                </div>
            </header>

            <nav aria-label="Roadmap sections" className="sticky top-[65px] z-30 border-b border-gray-100 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-6 py-3 lg:px-12">
                    {[
                        ['#routine', 'Weekly routine'],
                        ['#roadmap', '9-month roadmap'],
                        ['#architecture', 'Architecture'],
                        ['#priorities', 'Tech priorities'],
                        ['#portfolio', 'Portfolio'],
                        ['#careers', 'Career paths'],
                        ['#first-week', 'Start week 1'],
                    ].map(([href, label]) => (
                        <a key={href} href={href} className="shrink-0 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                            {label}
                        </a>
                    ))}
                </div>
            </nav>

            <main className="mx-auto max-w-5xl px-6 py-10 lg:px-12 lg:py-14">
                <section id="routine" className="scroll-mt-32">
                    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">The learning strategy</p>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Five focused hours. Every week.</h2>
                            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
                                Your advantage is already knowing how to build scalable backend systems. Spend your time learning how AI works, engineering with it, and making sound architecture and production decisions.
                            </p>
                            <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-gray-100" aria-label="Learning time distribution">
                                <div className="w-[30%] bg-blue-500" title="30% AI concepts" />
                                <div className="w-1/2 bg-red-400" title="50% hands-on engineering" />
                                <div className="w-1/5 bg-indigo-500" title="20% architecture and production" />
                            </div>
                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
                                <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-blue-500" />30% AI concepts</span>
                                <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-red-400" />50% hands-on engineering</span>
                                <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-indigo-500" />20% architecture and production</span>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                            <h3 className="font-semibold text-gray-900">A realistic weekly rhythm</h3>
                            <div className="mt-3 divide-y divide-gray-100">
                                {weeklySessions.map(session => (
                                    <div key={session.day} className="flex items-start justify-between gap-4 py-3">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{session.day}</p>
                                            <p className="text-xs text-gray-500">{session.activity}</p>
                                        </div>
                                        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{session.time}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-3 text-xs leading-relaxed text-gray-500">The weekend session is for building. Don't spend all five hours watching courses.</p>
                        </div>
                    </div>
                </section>

                <section id="roadmap" className="mt-16 scroll-mt-32">
                    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">The learning journey</p>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Your nine-month roadmap</h2>
                        </div>
                        <p className="text-xs text-gray-500">Select a phase to explore topics, project and resources.</p>
                    </div>
                    <div className="space-y-3">
                        {phases.map(phase => {
                            const isOpen = openPhase === phase.id;
                            return (
                                <article key={phase.id} id={phase.id} className={`scroll-mt-32 overflow-hidden rounded-2xl border bg-white transition-shadow ${isOpen ? 'border-blue-200 shadow-md shadow-blue-900/5' : 'border-gray-200 shadow-sm'}`}>
                                    <button type="button" aria-expanded={isOpen} aria-controls={`${phase.id}-content`}
                                        onClick={() => setOpenPhase(isOpen ? '' : phase.id)}
                                        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'}`}>{phase.number}</span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block text-xs font-semibold uppercase tracking-wide text-blue-600">{phase.timing}</span>
                                            <span className="mt-0.5 block text-base font-bold text-gray-900 sm:text-lg">{phase.title}</span>
                                        </span>
                                        <span className={`ml-2 text-2xl leading-none text-gray-400 transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                                    </button>
                                    {isOpen && (
                                        <div id={`${phase.id}-content`} className="border-t border-gray-100 px-5 pb-6 pt-5 sm:px-6">
                                            <p className="max-w-3xl text-sm leading-relaxed text-gray-600">{phase.objective}</p>
                                            <div className="mt-5 grid gap-6 md:grid-cols-2">
                                                <div>
                                                    <h3 className="text-sm font-bold text-gray-900">What to learn</h3>
                                                    <ul className="mt-3 space-y-2">
                                                        {phase.topics.map(topic => (
                                                            <li key={topic} className="flex gap-2.5 text-sm leading-relaxed text-gray-600">
                                                                <span className="mt-1 text-blue-500" aria-hidden="true">✓</span>{topic}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="rounded-xl bg-blue-50/70 p-4">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Build and ship</p>
                                                    <h3 className="mt-2 font-bold text-gray-900">{phase.deliverable}</h3>
                                                    <ul className="mt-3 space-y-2">
                                                        {phase.deliverableDetails.map(detail => (
                                                            <li key={detail} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                                                                <span className="text-blue-600" aria-hidden="true">→</span>{detail}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <ResourceLinks items={phase.resources} />
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section id="architecture" className="mt-16 scroll-mt-32">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">The destination</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">The architecture you’ll learn to design</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">Know why each component exists, when it is needed and what happens when it fails. That’s the difference between calling an AI API and engineering an AI system.</p>
                    <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="grid grid-cols-[minmax(120px,0.7fr)_1.3fr] t-btn px-5 py-3 text-xs font-bold uppercase tracking-wider">
                            <span>Layer</span><span>Responsibility</span>
                        </div>
                        {[
                            ['Frontend', 'User interaction'],
                            ['API Gateway', 'Authentication and routing'],
                            ['Spring Boot', 'Business logic and orchestration'],
                            ['Python AI service', 'AI-specific processing'],
                            ['LLM provider', 'Language generation'],
                            ['Vector database', 'Semantic retrieval'],
                            ['PostgreSQL', 'Application data'],
                            ['Kafka', 'Asynchronous processing'],
                            ['Observability', 'Monitoring and evaluation'],
                            ['Kubernetes', 'Deployment and scaling'],
                        ].map(([layer, responsibility], index) => (
                            <div key={layer} className={`grid grid-cols-[minmax(120px,0.7fr)_1.3fr] px-5 py-3 text-sm ${index % 2 ? 'bg-gray-50' : 'bg-white'}`}>
                                <span className="font-semibold text-gray-800">{layer}</span><span className="text-gray-600">{responsibility}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="priorities" className="mt-16 scroll-mt-32">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Stay focused</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Technology priorities</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">Learn in sequence instead of trying to master every tool at once. Keep Java as your primary enterprise language and learn Python as your AI engineering language—you don’t need to switch your whole career to Python.</p>
                    <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <table className="w-full min-w-[460px] text-left text-sm">
                            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                                <tr><th className="px-5 py-3 font-semibold">Technology</th><th className="px-5 py-3 font-semibold">Priority</th><th className="px-5 py-3 font-semibold">When</th></tr>
                            </thead>
                            <tbody>
                                {technologyPriorities.map(([technology, priority, when]) => (
                                    <tr key={technology} className="border-t border-gray-100">
                                        <td className="px-5 py-3 font-semibold text-gray-800">{technology}</td>
                                        <td className="px-5 py-3 text-gray-600">{priority}</td>
                                        <td className="px-5 py-3 text-gray-600">{when}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="portfolio" className="mt-16 scroll-mt-32">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Show what you can do</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Your AI engineering portfolio</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {portfolioProjects.map((project, index) => (
                            <article key={project.name} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Project 0{index + 1}</span>
                                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{project.focus}</span>
                                </div>
                                <h3 className="mt-4 font-bold text-gray-900">{project.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                        Publish more than code: include clear READMEs, architecture and sequence diagrams, API documentation, automated tests and demo videos. Show the engineering decisions behind the projects.
                    </p>
                </section>

                <section id="careers" className="mt-16 scroll-mt-32">
                    <div className="grid gap-6 rounded-3xl t-hero-grad border t-border-100 p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Where it can take you</p>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Career paths to explore</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {['Senior AI Engineer', 'Applied AI Engineer', 'Generative AI Engineer', 'AI Backend Engineer', 'AI Solutions Architect'].map(role => (
                                    <span key={role} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800">{role}</span>
                                ))}
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-gray-600">For job research, investigate Germany’s AI engineering market, especially enterprise software, financial technology and B2B SaaS companies.</p>
                        </div>
                        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5">
                            <h3 className="font-bold text-gray-900">A realistic expectation</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">Nine months of learning does not automatically make someone a senior AI engineer. Ten years of software engineering experience transfers strongly, but demonstrable AI project experience and interview preparation still matter.</p>
                        </div>
                    </div>
                </section>

                <section id="first-week" className="mt-16 scroll-mt-32">
                    <div className="overflow-hidden rounded-3xl border t-border-100 bg-white shadow-sm">
                        <div className="t-bg-50 border-b t-border-100 px-6 py-7 sm:px-8">
                            <p className="text-xs font-bold uppercase tracking-widest t-text-600">Start now · 5 hours</p>
                            <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">Your first week</h2>
                                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">Turn the roadmap into action. Check off each session as you complete it.</p>
                                </div>
                                <div className="sm:min-w-40">
                                    <div className="flex justify-between text-xs font-semibold text-gray-500">
                                        <span>Your progress</span><span>{completedTasks.length}/{firstWeekTasks.length} complete</span>
                                    </div>
                                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                                        <div className="h-full rounded-full bg-blue-600 transition-all duration-300" style={{ width: `${completion}%` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-100 px-6 sm:px-8">
                            {firstWeekTasks.map((task, index) => {
                                const checked = completedTasks.includes(index);
                                return (
                                    <label key={task.title} className="flex cursor-pointer items-start gap-4 py-5">
                                        <input type="checkbox" checked={checked} onChange={() => toggleTask(index)}
                                            className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-blue-600"
                                            aria-label={`Mark ${task.title} as ${checked ? 'incomplete' : 'complete'}`} />
                                        <span className={`min-w-0 flex-1 ${checked ? 'opacity-55' : ''}`}>
                                            <span className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                                                <span className={`font-semibold ${checked ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{task.title}</span>
                                                <span className="text-xs t-text-600">{task.duration}</span>
                                            </span>
                                            <span className="mt-1 block text-sm leading-relaxed text-gray-500">{task.detail}</span>
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <aside className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-relaxed text-blue-950 sm:p-6">
                    <p className="font-bold">The long-term differentiator</p>
                    <p className="mt-1">Start with Python and LLM APIs, but don’t stay there. Your edge is combining AI with enterprise backend architecture, security and distributed systems. By the end, aim to design a banking assistant, explain its architecture, implement its RAG pipeline, orchestrate its agents and discuss how to operate it at scale.</p>
                </aside>
            </main>
        </>
    );
}
