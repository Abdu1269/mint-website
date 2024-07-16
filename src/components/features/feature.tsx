import React from "react";

export default function Feature() {
  return (
    <div id={"services"}>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center pb-12">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Services We Provide
            </h2>
            <p className="mt-3 text-md leading-relaxed text-gray-600 md:mt-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              laborum obcaecati, quis nostrum consectetur temporibus quam!
              Dolore reiciendis ad pariatur?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-blue-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <svg
                  className="absolute text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle className="cls-1" cx="12" cy="12" r="1.91" />
                  <path
                    className="cls-1"
                    d="M9.14,16.77h0A2.86,2.86,0,0,1,12,13.91h0a2.86,2.86,0,0,1,2.86,2.86h0"
                  />
                  <circle className="cls-1" cx="20.59" cy="3.41" r="1.91" />
                  <circle className="cls-1" cx="3.41" cy="20.59" r="1.91" />
                  <circle className="cls-1" cx="20.11" cy="20.11" r="2.39" />
                  <circle className="cls-1" cx="3.89" cy="3.89" r="2.39" />
                  <line
                    className="cls-1"
                    x1="7.95"
                    y1="16.05"
                    x2="4.75"
                    y2="19.25"
                  />
                  <line
                    className="cls-1"
                    x1="19.25"
                    y1="4.75"
                    x2="16.05"
                    y2="7.95"
                  />
                  <path
                    className="cls-1"
                    d="M17.73,12a5.74,5.74,0,1,1-1.68-4A5.69,5.69,0,0,1,17.73,12Z"
                  />
                  <line
                    className="cls-1"
                    x1="18.42"
                    y1="18.42"
                    x2="16.05"
                    y2="16.05"
                  />
                  <line
                    className="cls-1"
                    x1="7.95"
                    y1="7.95"
                    x2="5.58"
                    y2="5.58"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Extensive Reach
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Connect with a global network of tech companies and potential
                clients, boosting your business visibility and opportunities.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-orange-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="absolute text-orange-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 00-4.85 0l-.48.659-.804-.127a3 3 0 00-3.43 3.43l.127.804-.659.48a3 3 0 000 4.85l.659.48-.127.804a3 3 0 003.43 3.43l.804-.127.48.659a3 3 0 004.85 0l.48-.659.804.127a3 3 0 003.43-3.43l-.127-.804.659-.48a3 3 0 000-4.85l-.659-.48.127-.804a3 3 0 00-3.43-3.43l-.804.127z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Verified Listings
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Ensure your company is part of a trusted directory with verified
                listings, enhancing your credibility in the industry.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-green-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-green-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H9M15 5H17C18.1046 5 19 5.89543 19 7V9"
                    stroke="cuurentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.902 20.3343L12.7153 20.7716L13.1526 18.585C13.1914 18.3914 13.2865 18.2136 13.4261 18.074L17.5 14L19.5 12L21.4869 13.9869L19.4869 15.9869L15.413 20.0608C15.2734 20.2004 15.0956 20.2956 14.902 20.3343Z"
                    stroke="cuurentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="cuurentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Customizable Profiles
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Create a detailed and customizable profile that showcases your
                company’s strengths, services, and achievements.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-purple-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-purple-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M21,12H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H21a1,1,0,0,1,1,1v4A1,1,0,0,1,21,12ZM8,10H20V7.94H8Z"
                    className="clr-i-outline clr-i-outline-path-1"
                  ></path>
                  <path
                    d="M21,14.08H7a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1H18.36L22,16.3V15.08A1,1,0,0,0,21,14.08ZM20,18H8V16H20Z"
                    className="clr-i-outline clr-i-outline-path-2"
                  ></path>
                  <path
                    d="M11.06,31.51v-.06l.32-1.39H4V4h20V14.25L26,12.36V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V31a1,1,0,0,0,1,1h8A3.44,3.44,0,0,1,11.06,31.51Z"
                    className="clr-i-outline clr-i-outline-path-3"
                  ></path>
                  <path
                    d="M22,19.17l-.78.79A1,1,0,0,0,22,19.17Z"
                    className="clr-i-outline clr-i-outline-path-4"
                  ></path>
                  <path
                    d="M6,26.94a1,1,0,0,0,1,1h4.84l.3-1.3.13-.55,0-.05H8V24h6.34l2-2H7a1,1,0,0,0-1,1Z"
                    className="clr-i-outline clr-i-outline-path-5"
                  ></path>
                  <path
                    d="M33.49,16.67,30.12,13.3a1.61,1.61,0,0,0-2.28,0h0L14.13,27.09,13,31.9a1.61,1.61,0,0,0,1.26,1.9,1.55,1.55,0,0,0,.31,0,1.15,1.15,0,0,0,.37,0l4.85-1.07L33.49,19a1.6,1.6,0,0,0,0-2.27ZM18.77,30.91l-3.66.81L16,28.09,26.28,17.7l2.82,2.82ZM30.23,19.39l-2.82-2.82L29,15l2.84,2.84Z"
                    className="clr-i-outline clr-i-outline-path-6"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Easy Registration
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Register your company effortlessly with our user-friendly and
                intuitive registration process, getting you listed in no time.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-gray-100"
                  width="65"
                  height="70"
                  viewBox="0 0 65 70"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                </svg>
                <svg
                  className="absolute text-gray-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.132 9.71395C10.139 11.2496 10.3328 13.2665 11.6 14.585C12.8468 15.885 14.8527 16.0883 16.335 15.065C16.6466 14.8505 16.9244 14.5906 17.159 14.294C17.3897 14.0023 17.5773 13.679 17.716 13.334C18.0006 12.6253 18.0742 11.8495 17.928 11.1C17.7841 10.3573 17.4268 9.67277 16.9 9.12995C16.3811 8.59347 15.7128 8.22552 14.982 8.07395C14.2541 7.92522 13.4982 8.00197 12.815 8.29395C12.1254 8.58951 11.5394 9.08388 11.132 9.71395Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5986 13.6868C17.2639 13.4428 16.7947 13.5165 16.5508 13.8513C16.3069 14.1861 16.3806 14.6552 16.7154 14.8991L17.5986 13.6868ZM19.0584 16.6061C19.3931 16.85 19.8623 16.7764 20.1062 16.4416C20.3501 16.1068 20.2764 15.6377 19.9416 15.3938L19.0584 16.6061ZM7.5 12.7499C7.91421 12.7499 8.25 12.4142 8.25 11.9999C8.25 11.5857 7.91421 11.2499 7.5 11.2499V12.7499ZM5.5 11.2499C5.08579 11.2499 4.75 11.5857 4.75 11.9999C4.75 12.4142 5.08579 12.7499 5.5 12.7499V11.2499ZM7.5 15.7499C7.91421 15.7499 8.25 15.4142 8.25 14.9999C8.25 14.5857 7.91421 14.2499 7.5 14.2499V15.7499ZM5.5 14.2499C5.08579 14.2499 4.75 14.5857 4.75 14.9999C4.75 15.4142 5.08579 15.7499 5.5 15.7499V14.2499ZM8.5 9.74994C8.91421 9.74994 9.25 9.41415 9.25 8.99994C9.25 8.58573 8.91421 8.24994 8.5 8.24994V9.74994ZM5.5 8.24994C5.08579 8.24994 4.75 8.58573 4.75 8.99994C4.75 9.41415 5.08579 9.74994 5.5 9.74994V8.24994ZM16.7154 14.8991L19.0584 16.6061L19.9416 15.3938L17.5986 13.6868L16.7154 14.8991ZM7.5 11.2499H5.5V12.7499H7.5V11.2499ZM7.5 14.2499H5.5V15.7499H7.5V14.2499ZM8.5 8.24994H5.5V9.74994H8.5V8.24994Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Search and Filter
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Utilize advanced search and filter options to find and connect
                with the right tech companies and services quickly and
                efficiently.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-yellow-100"
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                </svg>
                <svg
                  className="absolute text-yellow-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10.002 1.032v8.925A1.034 1.034 0 0 1 8.981 11H1.02a1 1 0 0 1-.547-.164 1.051 1.051 0 0 1-.452-1.087c.03-.194.071-.385.123-.574A12.4 12.4 0 0 1 8.614.06 1.3 1.3 0 0 1 8.981 0a1.025 1.025 0 0 1 1.021 1.032z" />
                  <path d="M23.942 10.85A12.217 12.217 0 0 0 14.652.27c-.412-.1-.83-.178-1.25-.23a2 2 0 0 0-.77 0 .88.88 0 0 0-.63.98v10.99a.982.982 0 0 1-1 .99H.952c-1.51 0-.84 1.915-.56 2.745a12.068 12.068 0 0 0 7.66 7.643 12.2 12.2 0 0 0 14.1-5.008 11.972 11.972 0 0 0 1.85-6.39c0-.38-.02-.761-.06-1.14zm-12.08 11.12A10.121 10.121 0 0 1 2.232 15h8.66a3.092 3.092 0 0 0 3.11-3V2a10.1 10.1 0 0 1-2.14 19.97z" />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Industry Insights
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Access the latest industry news, trends, and insights to stay
                ahead of the curve and make informed business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
