import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Zee Steel" description="The page you're looking for doesn't exist." />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-champagne">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-charcoal md:text-4xl">This page doesn't exist.</h1>
        <p className="mt-3 max-w-md text-sm text-steel">
          The page you're looking for may have been moved or the link may be incorrect.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">Back to Home</Button>
        </div>
      </section>
    </>
  )
}
