import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'About Swiss Photo Club',
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Swiss Photo Club</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem
        quod dignissimos repellat sapiente, incidunt inventore voluptate veniam
        laborum temporibus velit architecto delectus, sed omnis officiis id
        similique a ut.
      </p>
      <h2>
        About our <Link href="/about/team">team</Link>
      </h2>
    </div>
  );
};

export default AboutPage;
