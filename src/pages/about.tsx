import Head from 'next/head'

export default function AboutPage() {
  return (
    <div className="bg-[url('https://tecdn.b-cdn.net/img/new/textures/full/142.jpg')] bg-no-repeat bg-[50%] bg-cover min-h-screen">
      <Head>
        <title>About EditEvo</title>
        <meta
          name="description"
          content="Learn about EditEvo - a browser-based video editor built with fabric.js, Next.js, Tailwind CSS, MobX, and TypeScript."
        />
      </Head>

      <nav
        className="relative flex w-full items-center justify-between bg-black py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <button
              className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          ></div>

          <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
            <a
              type="button"
              className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="/"
            >
              Home
            </a>
            <a
              type="button"
              className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="/editor"
            >
              Start editing
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto flex justify-center items-center px-4 py-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold mt-0 text-[hsla(231,71%,59%,1)]">
            About EditEvo
          </h1>
          <p className="text-lg mb-4 text-[#e6e8f0]">
            EditEvo is a browser-based video editor designed to provide users
            with powerful editing capabilities directly within their web
            browser.
          </p>

          <p className="text-lg mb-6 text-[#e6e8f0]">
            The application is built using a combination of modern web
            technologies including fabric.js for handling canvas operations,
            Next.js - a React framework for building server-side rendered
            applications, Tailwind CSS for efficient and customizable styling,
            MobX for state management, and TypeScript for type safety and
            enhanced developer experience.
          </p>
          <p className="text-lg mb-6 text-[#e6e8f0]">
            EditEvo aims to offer an intuitive and user-friendly interface while
            providing advanced video editing features, enabling users to create
            professional-quality videos without the need for specialized
            software.
          </p>

          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div
              className="absolute inset-0 bg-blue-500"
              style={{ padding: '20px' }} // Adjust the padding value as needed
            >
              <iframe
                src="https://www.youtube.com/embed/laFpqy7uy9s"
                // https://www.youtube.com/watch?v=laFpqy7uy9s
                title="EditEvo Demo"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-8 bg-cover text-[#e0e1e4]">
        <p className="text-[#e0e1e4]">
          Developed by
          <a
            href="https://donald-portfolio-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Donald Mzima
          </a>
          @{new Date().getFullYear()}
          <a
            href="https://github.com/DonaldMzima/EditEvo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-[hsla(231,71%,59%,1)] hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
