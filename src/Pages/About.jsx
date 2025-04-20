import React from 'react';

const About = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">About Us</h1>

      <p className="text-lg">
        This website was built with one simple idea in mind: *bringing peace, health, and clarity to people’s lives*. 
        In a world full of chaos, we wanted to build a digital space where anyone—regardless of experience—can learn, practice, and grow through yoga.
      </p>

      <p className="text-lg">
        The concept was sparked during a college brainstorming session among a group of friends who were deeply into tech and wellness. 
        We realized that while there are tons of fitness platforms, very few focus on yoga with heart, community, and real human connection.
      </p>

      <p className="text-lg">
        Thus, this platform was founded—backed by passion, guided by purpose, and designed for everyone. 
        We combine traditional yoga principles with modern design and interactive features to keep things engaging and helpful.
      </p>

      <h2 className="text-2xl font-semibold">Why Yoga?</h2>
      <ul className="list-disc pl-6 space-y-1 text-lg">
        <li>Improves flexibility, strength, and posture</li>
        <li>Boosts mental clarity and focus</li>
        <li>Reduces stress, anxiety, and promotes calm</li>
        <li>Supports a healthy lifestyle and inner balance</li>
        <li>Accessible to all age groups and body types</li>
      </ul>

      <p className="text-lg">
        We’re not just a platform—we’re a growing community of learners, teachers, and everyday people looking to lead healthier lives.
      </p>

      <p className="text-lg">
        So whether you're here for five minutes of breathing or a full yoga session, welcome aboard. 
        Let’s grow, stretch, and chill—together.
      </p>
    </div>
  );
};

export default About;
