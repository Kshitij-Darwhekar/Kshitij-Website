'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const EMAIL = 'kshitijdarwhekar@gmail.com'

export default function Contact() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  const [state, handleSubmit] = useForm(`${formspreeEndpoint}`)
  const [copyHint, setCopyHint] = useState('')

  const customHandleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)

    // Honeypot field — if filled, it's a bot submission
    if (data.get('website')) {
      return
    }

    handleSubmit(event)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyHint('Copied to clipboard')
    } catch (e) {
      setCopyHint('Select the text to copy manually')
    }
  }

  const inputClasses =
    'my-2 w-full rounded-lg border-2 border-teal-500/40 bg-white/85 p-2 caret-teal-500 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 dark:border-teal-500/30 dark:bg-slate-900/85 dark:text-slate-200'

  return (
    <section className="px-10 pb-10" id="contact">
      <div className="content-wrap">
        <p className="section-eyebrow">07 · Contact</p>
        <h1 className="text-4xl py-3 text-black dark:text-slate-200 md:text-5xl">Let&apos;s build something.</h1>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-gray-800 dark:text-slate-400">
              Have a project, question, or just want to talk RPA/Celonis/agentic AI? My inbox is open.
            </p>
            <p className="mt-5">
              Email:{' '}
              <button
                type="button"
                onClick={copyEmail}
                title="Click to copy"
                className="border-b border-dashed border-slate-500/50 font-mono text-slate-900 hover:text-teal-500 hover:border-teal-500 dark:text-slate-200"
              >
                {EMAIL}
              </button>
            </p>
            <p className="mt-2 min-h-[1.25rem] text-sm text-gray-600 dark:text-slate-500">{copyHint}</p>
          </div>

          <div className="glass-panel">
            {state.succeeded ? (
              <p className="py-10 text-center text-2xl text-teal-500">Submitted successfully — thanks for reaching out!</p>
            ) : (
              <form onSubmit={customHandleSubmit}>
                <label htmlFor="name" className="dark:text-slate-400">Name</label>
                <input type="text" id="name" name="name" required className={inputClasses} />

                <label htmlFor="email" className="dark:text-slate-400">Email</label>
                <input type="email" id="email" name="email" required className={inputClasses} />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label htmlFor="message" className="dark:text-slate-400">Message</label>
                <textarea name="message" id="message" cols="30" rows="6" className={inputClasses}></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                {/* Honeypot field */}
                <label htmlFor="website" className="hidden">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-700 to-teal-500 p-0.5 text-sm font-medium text-gray-900 transition-transform duration-200 hover:-translate-y-0.5 hover:text-slate-200 focus:outline-none focus:ring-4 focus:ring-teal-200 dark:text-slate-200 dark:focus:ring-teal-800"
                >
                  <span className="relative rounded-md bg-slate-200 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 dark:text-slate-200">
                    Submit
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
