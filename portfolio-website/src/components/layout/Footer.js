export default function Footer() {
  return (
    <>
      <hr className="border-slate-400/20 dark:border-slate-700/60" />
      <div className="flex items-center justify-center flex-row px-6">
        <footer className="max-w-md py-8 text-sm text-center text-slate-600 dark:text-slate-500">
          <p className="p-2">
            Inspired by multiple web dev portfolios, coded in{' '}
            <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-500">Visual Studio Code</a>{' '}
            by yours truly, built using{' '}
            <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-500">Next.js</a> and{' '}
            <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-500">Tailwind CSS</a>, hosted on{' '}
            <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-500">Vercel</a>. Check out the repo on{' '}
            <a href="https://github.com/Kshitij-Darwhekar/Kshitij-Website" className="font-medium text-slate-400 hover:text-teal-500">GitHub.</a>
          </p>
        </footer>
      </div>
    </>
  )
}
