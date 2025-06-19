// components/AboutOwner.tsx

import React from "react";

const AboutOwner: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800" id="about-owner">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About the Founder
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            The driving force behind <strong>HD Media Network</strong>,{" "}
            <strong>Hardik Sharma</strong> is a passionate innovator and tech
            entrepreneur with a clear mission—help businesses thrive in the
            digital landscape.
          </p>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
            With over a decade of experience in{" "}
            <strong>
              software development, digital marketing, web technologies
            </strong>
            , and <strong>cloud infrastructure</strong>, Hardik has been
            instrumental in launching successful digital products across
            industries like e-commerce, education, healthcare, and finance. His
            work has empowered startups, SMEs, and established enterprises to
            scale with confidence.
          </p>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
            Hardik's journey started as a self-taught programmer, and over the
            years, he has led cross-functional teams, architected scalable
            platforms, and consulted on digital transformation for clients
            globally. He’s a firm believer in agile development, data-driven
            decision making, and human-centered design.
          </p>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-4">
            At <strong>HD Media Network</strong>, his focus remains on
            delivering intelligent solutions like{" "}
            <strong>
              custom apps, CRM/ERP systems, and business automation tools
            </strong>{" "}
            that are tailored to each client’s goals. His hands-on approach
            ensures a deep understanding of business needs and strategic
            alignment with technical execution.
          </p>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            Always eager to explore emerging technologies and collaborative
            opportunities, Hardik is committed to creating meaningful digital
            experiences that not only solve problems but also inspire innovation
            and long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
