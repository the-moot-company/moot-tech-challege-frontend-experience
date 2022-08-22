import Link from 'next/link'
import Container from './components/landing/Container'

const FourOhFour = () => {
  return (
    <>
      <Container>
        <div className="min-h-full pt-16 pb-12 flex flex-col bg-base-100">
          <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 flex justify-center">
              <a href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 w-auto rounded shadow-md"
                  src="/images/logo.png.png"
                  alt=""
                />
              </a>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  404 error
                </p>
                <h1 className="mt-2 font-mono text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Not found.
                </h1>
                <p className="mt-2 font-mono text-base">
                  The page you are looking for can’t be found.
                </p>
                <div className="mt-6">
                  <Link href="/">
                    <div className="text-base font-medium text-primary hover:text-primary cursor-pointer">
                      Go back home<span aria-hidden="true"> &rarr;</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </>
  )
}

export default FourOhFour
