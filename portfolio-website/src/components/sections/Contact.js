'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  const [state, handleSubmit] = useForm(`${formspreeEndpoint}`)

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

  return (
    <section className="px-10" id="contact">
      <h1 className="text-5xl dark:text-slate-400 py-5">Contact Me</h1>

      {state.succeeded ? (
        <p className="py-10 text-2xl text-teal-500">Submitted successfully — thanks for reaching out!</p>
      ) : (
        <form onSubmit={customHandleSubmit} className="p-3">
          <label htmlFor="name" className="dark:text-slate-400">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200"
          />
          <label htmlFor="email" className="dark:text-slate-400">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="dark:text-slate-400">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="my-2 border-2 border-teal-500 p-2 py-4 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200"
          ></textarea>
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
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
        </form>
      )}
    </section>
  )
}
