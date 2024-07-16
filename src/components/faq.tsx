import React from "react";

export default function faq() {
  const faq = [
    {
      question: "How do I register my tech company on your platform?",
      answer:
        "To register your tech company, simply create an account with your email, fill out your company details, and submit for approval. Once approved, your company will be listed in our directory.",
    },
    {
      question: "Is there a cost associated with listing my company?",
      answer:
        "Basic listings are free of charge. However, we offer premium listing options that provide additional features and increased visibility for a small fee.",
    },
    {
      question: "How can I update my company's profile information?",
      answer: `You can update your company's profile information by logging into your account and navigating to the "Profile" section. Make the necessary changes and save them to update your listing.`,
    },
    {
      question: "How do I benefit from being listed in your directory?",
      answer:
        "Being listed in our directory increases your company's online visibility, enhances credibility, and connects you with potential clients and partners. It also provides networking opportunities and access to industry updates.",
    },
    {
      question: "What if I need help or have questions about my listing?",
      answer:
        "If you need assistance or have any questions about your listing, our support team is here to help. You can contact us via the support page on our website, and we'll be happy to assist you.",
    },
  ];

  return (
    <div id="faq">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div className="card flex flex-col justify-center items-center gap-2 w-full h-full p-4">
            {faq.map((item, index) => {
              return (
                <div className="collapse collapse-plus bg-base-200" key={index}>
                  <input
                    type="radio"
                    aria-label="Collapse"
                    name="my-accordion-3"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium text-gray-500">
                    {item.question}
                  </div>
                  <div className="collapse-content text-gray-500">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
