import React from 'react';
import { Helmet } from 'react-helmet';

function ReactHooksGuide() {
  return (
    <>
      <Helmet>
        <title>Understanding React Hooks | ProteinShaikh</title>
      </Helmet>
      <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">⚛️ Understanding React Hooks</h1>
        <p>
          React Hooks revolutionized how we write React components by allowing the use of state and other features without writing class components.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🔍 What Are Hooks?</h2>
        <p>
          Hooks are functions that let you "hook into" React state and lifecycle features from function components. They enable you to use state and other React features without writing a class.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🛠️ Commonly Used Hooks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>useState</strong>: Allows you to add state to function components.</li>
          <li><strong>useEffect</strong>: Lets you perform side effects in function components.</li>
          <li><strong>useContext</strong>: Provides a way to pass data through the component tree without having to pass props down manually at every level.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">⚠️ Rules of Hooks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.</li>
          <li>Only call Hooks from React function components or custom Hooks.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use multiple state variables for different values if they aren't related.</li>
          <li>Keep effects clean and avoid unnecessary dependencies.</li>
          <li>Create custom Hooks for reusable logic.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📘 Conclusion</h2>
        <p>
          React Hooks simplify the way we write components and manage state and side effects. Embracing Hooks leads to cleaner and more maintainable code.
        </p>
      </section>
    </>
  );
}

export default ReactHooksGuide;
