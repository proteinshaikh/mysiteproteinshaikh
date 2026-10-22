type Book = {
    title: string;
    author: string;
    summary: string;
    reason: string;
    status: 'reading' | 'read';
    cover: string;
    category: 'Science & Philosophy' | 'History & Politics' | 'Investing & Money' | 'Fiction' | 'Biography';
};

const books: Book[] = [
    // Science & Philosophy
    {
        title: 'The Origin of Species',
        author: 'Charles Darwin',
        summary: 'Darwin lays out the theory of evolution by natural selection — one of the most consequential ideas in human history.',
        reason: 'The foundation of modern biology. Reading the original is humbling.',
        status: 'reading',
        cover: '🦎',
        category: 'Science & Philosophy',
    },
    {
        title: 'Outgrowing God',
        author: 'Richard Dawkins',
        summary: 'A gentle but rigorous case for thinking beyond religion, written for a new generation of curious minds.',
        reason: 'Dawkins at his most accessible — great starting point for rational thinking.',
        status: 'read',
        cover: '🌱',
        category: 'Science & Philosophy',
    },
    {
        title: 'The Blind Watchmaker',
        author: 'Richard Dawkins',
        summary: 'Dawkins dismantles the argument from design and shows how natural selection alone can produce breathtaking complexity.',
        reason: 'Changed how I see life itself.',
        status: 'read',
        cover: '⌚',
        category: 'Science & Philosophy',
    },
    {
        title: 'The Greatest Show on Earth',
        author: 'Richard Dawkins',
        summary: 'A comprehensive tour of the evidence for evolution — fossils, genetics, geography, and more.',
        reason: 'The best single-volume case for evolution ever written.',
        status: 'read',
        cover: '🌍',
        category: 'Science & Philosophy',
    },
    {
        title: 'An Appetite for Wonder',
        author: 'Richard Dawkins',
        summary: 'The first volume of Dawkins\' memoir — his childhood, education, and the making of a scientific mind.',
        reason: 'Beautifully written. Shows how curiosity becomes a way of life.',
        status: 'read',
        cover: '✨',
        category: 'Science & Philosophy',
    },
    {
        title: 'Brief Candle in the Dark',
        author: 'Richard Dawkins',
        summary: 'The second memoir — his years at Oxford, writing The Selfish Gene, and life as a public intellectual.',
        reason: 'A rare look at how big ideas are born.',
        status: 'read',
        cover: '🕯️',
        category: 'Science & Philosophy',
    },
    {
        title: 'God Is Not Great',
        author: 'Christopher Hitchens',
        summary: 'Hitchens makes a sharp, witty, and unsparing case against religion across cultures and centuries.',
        reason: 'Hitchens writes like no one else — every sentence lands.',
        status: 'read',
        cover: '✒️',
        category: 'Science & Philosophy',
    },
    {
        title: 'Cosmos',
        author: 'Carl Sagan',
        summary: 'A journey through the universe — from the Big Bang to the human brain — told with poetry and precision.',
        reason: 'No book has made me feel smaller and more alive at the same time.',
        status: 'read',
        cover: '🌌',
        category: 'Science & Philosophy',
    },
    {
        title: 'The Beginning of Infinity',
        author: 'David Deutsch',
        summary: 'Deutsch explores the power of human knowledge to drive progress, arguing that scientific explanations unlock infinite potential.',
        reason: 'Mind-expanding. Challenges you to think about the limitless possibilities of human ingenuity.',
        status: 'read',
        cover: '♾️',
        category: 'Science & Philosophy',
    },
    {
        title: 'Why I Am Not a Muslim',
        author: 'Ibn Warraq',
        summary: 'A critical examination of Islam from a former Muslim — historical, theological, and philosophical.',
        reason: 'Brave and thorough. Important for anyone thinking seriously about religion and identity.',
        status: 'read',
        cover: '📖',
        category: 'Science & Philosophy',
    },
    {
        title: 'The God Delusion',
        author: 'Richard Dawkins',
        summary: 'Dawkins argues against the existence of God, critiquing religion through science and reason.',
        reason: 'Provocative and thought-provoking — invites you to question faith with a scientific lens.',
        status: 'read',
        cover: '🔬',
        category: 'Science & Philosophy',
    },

    // History & Politics
    {
        title: 'Guns, Germs, and Steel',
        author: 'Jared Diamond',
        summary: 'Why did some civilisations conquer others? Diamond traces it back to geography, biology, and luck — not race.',
        reason: 'Reframes all of human history in one book.',
        status: 'read',
        cover: '⚔️',
        category: 'History & Politics',
    },
    {
        title: 'Jinnah of Pakistan',
        author: 'Stanley Wolpert',
        summary: 'A biography of Muhammad Ali Jinnah tracing his role in partition and his vision for a new nation.',
        reason: 'Essential for understanding South Asian history through the life of a pivotal figure.',
        status: 'read',
        cover: '🌙',
        category: 'History & Politics',
    },
    {
        title: 'Aurangzeb',
        author: 'Audrey Truschke',
        summary: 'A revisionist look at the Mughal emperor Aurangzeb — separating myth from the historical record.',
        reason: 'Challenges everything you think you know about one of history\'s most controversial rulers.',
        status: 'read',
        cover: '🏰',
        category: 'History & Politics',
    },
    {
        title: 'Student World Atlas',
        author: 'National Geographic',
        summary: 'A detailed atlas of the world — geography, populations, climate, and political boundaries.',
        reason: 'I\'ve always been obsessed with maps. Geography is the original data visualisation.',
        status: 'read',
        cover: '🗺️',
        category: 'History & Politics',
    },

    // Investing & Money
    {
        title: 'The Wealth of Nations',
        author: 'Adam Smith',
        summary: 'The founding text of modern economics — division of labour, free markets, and the invisible hand.',
        reason: 'You can\'t understand capitalism without reading where it started.',
        status: 'read',
        cover: '🏛️',
        category: 'Investing & Money',
    },
    {
        title: 'Principles',
        author: 'Ray Dalio',
        summary: 'Dalio shares the life and work principles that built Bridgewater — the world\'s largest hedge fund.',
        reason: 'Radical transparency and systematic thinking applied to everything.',
        status: 'read',
        cover: '📐',
        category: 'Investing & Money',
    },
    {
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        summary: 'Timeless lessons on wealth, greed, and happiness — how people think about money and why behaviour matters more than knowledge.',
        reason: 'Reshapes how you think about financial decisions and long-term wealth building.',
        status: 'reading',
        cover: '💰',
        category: 'Investing & Money',
    },
    {
        title: "Poor Charlie's Almanack",
        author: 'Peter D. Kaufman',
        summary: "A collection of Charlie Munger's wisdom — his multidisciplinary approach to investing, decision-making, and life.",
        reason: "Munger's mental models are invaluable for smarter decisions in investing and beyond.",
        status: 'read',
        cover: '🧮',
        category: 'Investing & Money',
    },
    {
        title: 'A Random Walk Down Wall Street',
        author: 'Burton G. Malkiel',
        summary: 'Malkiel argues markets are largely efficient and advocates for low-cost index funds and a disciplined long-term approach.',
        reason: 'A timeless guide for investors with data-backed advice.',
        status: 'read',
        cover: '📈',
        category: 'Investing & Money',
    },
    {
        title: 'Beating the Street',
        author: 'Peter Lynch',
        summary: 'Legendary investor Peter Lynch shares his strategies for picking winning stocks from his success with the Magellan Fund.',
        reason: "Lynch's approachable style and actionable insights make this a must-read for aspiring investors.",
        status: 'read',
        cover: '🏦',
        category: 'Investing & Money',
    },

    // Biography
    {
        title: 'Power Play',
        author: 'Tim Higgins',
        summary: "Chronicles Tesla's rise — Elon Musk's vision, the company's near-death moments, and its eventual triumph.",
        reason: 'Perfect for tech and entrepreneurship enthusiasts. An inside look at a revolutionary company.',
        status: 'read',
        cover: '⚡',
        category: 'Biography',
    },
    {
        title: 'The Maz Files',
        author: 'Mazhar Farooqui',
        summary: 'Investigative journalist Mazhar Farooqui recounts thrilling stories from his career, exposing crime lords and scams across continents.',
        reason: 'A gripping memoir of real-life investigations filled with action, courage, and justice.',
        status: 'read',
        cover: '🕵️',
        category: 'Biography',
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        summary: 'Rules for focused success in a distracted world. Newport argues that the ability to focus without distraction is the superpower of the 21st century.',
        reason: 'Essential for any developer or knowledge worker who wants to do their best work.',
        status: 'reading',
        cover: '🧠',
        category: 'Biography',
    },

    // Fiction
    {
        title: 'Metamorphosis',
        author: 'Franz Kafka',
        summary: "Kafka's surreal novella follows Gregor Samsa, who wakes up as a monstrous insect — alienation, identity, and family told through the absurd.",
        reason: 'A timeless literary masterpiece that provokes reflection on human existence.',
        status: 'read',
        cover: '🪲',
        category: 'Fiction',
    },
];

export const CATEGORIES = ['Science & Philosophy', 'History & Politics', 'Investing & Money', 'Biography', 'Fiction'] as const;
export type Category = typeof CATEGORIES[number];

export default books;
export type { Book };
