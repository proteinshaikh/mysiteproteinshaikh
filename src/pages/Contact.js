import React from 'react';

function Contact() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
                Feel free to reach out to me via email or connect with me on social media.
            </p>
            <ul className="text-gray-700">
                <li>Email: <a href="mailto:zeeshanshaikhonline@gmail.com"
                              className="text-blue-500 hover:underline">zeeshanshaikhonline@gmail.com</a></li>
                <li>GitHub: <a href="https://github.com/proteinshaikh"
                               className="text-blue-500 hover:underline">github.com/proteinshaikh</a></li>
                <li>LinkedIn: <a href="https://linkedin.com/in/proteinshaikh"
                                 className="text-blue-500 hover:underline">linkedin.com/in/proteinshaikh</a></li>
            </ul>
        </section>
    );
}

export default Contact;
