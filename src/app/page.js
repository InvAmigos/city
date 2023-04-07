import Features from "\$/main/Features"
import Hero from "\$/main/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="border-b bg-white py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
            Title
          </h2>
          <div className="mb-4 w-full">
            <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                  xGETTING STARTED
                </p>
                <div className="w-full px-6 text-xl font-bold text-gray-800">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="mb-5 px-6 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="flex items-center justify-start">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                  xGETTING STARTED
                </p>
                <div className="w-full px-6 text-xl font-bold text-gray-800">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="mb-5 px-6 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="flex items-center justify-center">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                  xGETTING STARTED
                </p>
                <div className="w-full px-6 text-xl font-bold text-gray-800">
                  Lorem ipsum dolor sit amet.
                </div>
                <p className="mb-5 px-6 text-base text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="flex items-center justify-end">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
            Pricing
          </h2>
          <div className="mb-4 w-full">
            <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>
          <div className="my-12 flex flex-col justify-center pt-12 sm:my-4 sm:flex-row">
            <div className="mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg">
              <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white text-gray-600 shadow">
                <div className="border-b-4 p-8 text-center text-3xl font-bold">
                  Free
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                <div className="w-full pt-6 text-center text-3xl font-bold text-gray-600">
                  £0
                  <span className="text-base">for one user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="z-10 mx-auto mt-4 flex w-5/6 flex-col rounded-lg bg-white shadow-lg sm:-mt-6 lg:mx-0 lg:w-1/3">
              <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
                <div className="w-full p-8 text-center text-3xl font-bold">
                  Basic
                </div>
                <div className="gradient my-0 h-1 w-full rounded-t py-0"></div>
                <ul className="w-full text-center text-base font-bold">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                <div className="w-full pt-6 text-center text-4xl font-bold">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg">
              <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white text-gray-600 shadow">
                <div className="border-b-4 p-8 text-center text-3xl font-bold">
                  Pro
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                  <li className="border-b py-4">Thing</li>
                </ul>
              </div>
              <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
                <div className="w-full pt-6 text-center text-3xl font-bold text-gray-600">
                  £x.99
                  <span className="text-base">/ per user</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto mb-12 py-6 text-center">
        <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-white">
          Call to Action
        </h2>
        <div className="mb-4 w-full">
          <div className="mx-auto my-0 h-1 w-1/6 rounded-t bg-white py-0 opacity-25"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Main Hero Message to sell yourself!
        </h3>
        <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-white py-4 px-8 font-bold text-gray-800 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
          Action!
        </button>
      </section>
      <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="flex w-full flex-col py-6 md:flex-row">
            <div className="mb-6 flex-1 text-black">
              <a
                className="text-2xl font-bold text-pink-600 no-underline hover:no-underline lg:text-4xl"
                href="#"
              >
                <svg
                  className="inline h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                  />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                LANDING
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 mr-2 inline-block md:mr-0 md:block">
                  <a
                    href="#"
                    className="text-gray-800 no-underline hover:text-pink-500 hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a
          href="https://www.freepik.com/free-photos-vectors/background"
          className="text-gray-500"
        >
          Background vector created by freepik - www.freepik.com
        </a>
      </footer>
    </>
  )
}
