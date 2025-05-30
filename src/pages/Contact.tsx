import React, {JSX} from 'react';
import { Helmet } from 'react-helmet';

function Contact(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Contact | ProteinShaikh</title>
      </Helmet>
      <section className="container mx-auto px-4 py-8 flex justify-center items-start min-h-[80vh] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">

        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800 animate-fade-in-down">
            Connect with Me! 📡
          </h2>
          <p className="text-gray-600 mb-12 text-lg animate-fade-in-up max-w-2xl mx-auto">
            Drop me a message or follow my journey on social media. Let's create something amazing together! ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
              <span className="text-4xl mb-4 block">✉️</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:zeeshanshaikhonline@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                zeeshanshaikhonline@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
              <span className="text-4xl mb-4 block">🐙</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h3>
              <a
                href="https://github.com/proteinshaikh"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/proteinshaikh
              </a>
            </div>

            {/* LinkedIn */}
            <div className="tile bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 wobble">
              <span className="text-4xl mb-4 block">💼</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/proteinshaikh"
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/proteinshaikh
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
