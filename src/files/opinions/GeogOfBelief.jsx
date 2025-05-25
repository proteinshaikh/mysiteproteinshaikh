import React from 'react';
import { Helmet } from 'react-helmet';

function GeogOfBelief() {
  return (
    <>
      <Helmet>
        <title>Geography of Belief | ProteinShaikh</title>
      </Helmet>
      <section className="prose prose-lg max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">🧭 Geography of Belief</h1>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📌 Observation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>If you are born in <strong>India</strong>, you are likely a <strong>Hindu</strong>.</li>
          <li>If you are born in <strong>Pakistan</strong>, you are likely a <strong>Muslim</strong>.</li>
          <li>If you are born in <strong>Europe</strong>, you are likely a <strong>Christian</strong>.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🔍 What Does This Mean?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Faith often feels deeply personal, but in most cases, it is inherited at birth.</li>
          <li>Religious identity tends to follow geography, culture, and family—rather than personal choice.</li>
          <li>If a religion were the "absolute truth," wouldn’t it transcend borders and birthplaces?</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">❓ Faith or Inheritance?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Are we truly choosing our beliefs—or are they chosen for us?</li>
          <li>Is our faith based on spiritual truth or cultural conditioning?</li>
          <li>This doesn’t dismiss religion’s value—faith has shaped laws, values, and communities.</li>
          <li>But it’s worth questioning: Are we following out of habit, or out of genuine understanding?</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">🌱 A Better Path Forward</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Let’s not blindly inherit faith—let’s seek understanding and truth.</li>
          <li>Explore different beliefs, learn from all traditions, and reflect personally.</li>
          <li>Spirituality should be based on awareness, not accidents of birth.</li>
          <li>Take what resonates with your soul, regardless of where it originated.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">📘 Final Thought</h2>
        <p>
          True belief is not what you're born into—it’s what you choose after questioning, learning, and understanding.
        </p>
      </section>
    </>
  );
}

export default GeogOfBelief;
