import { FormEvent, useState } from 'react'

import { Button, Container, Input, SectionHeader } from '../ui'

type ProjectType =
  | ''
  | 'Residential Interior'
  | 'Residential Exterior'
  | 'Commercial'
  | 'Specialty Finish'
  | 'Other'

type ContactFormValues = {
  fullName: string
  email: string
  phone: string
  projectType: ProjectType
  projectDescription: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialValues: ContactFormValues = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  projectDescription: '',
}

const projectTypeOptions: ProjectType[] = [
  '',
  'Residential Interior',
  'Residential Exterior',
  'Commercial',
  'Specialty Finish',
  'Other',
]

const formControlClasses =
  'w-full font-body text-base px-5 py-4 border-[1.5px] border-ink-200 rounded-lg bg-surface text-ink-900 outline-none placeholder:text-ink-400 placeholder:font-light focus:border-wine-400 focus:shadow-[0_0_0_3px_var(--color-wine-100)] transition-[border-color,box-shadow] duration-[150ms] ease-linear'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone is required.'
  }

  return errors
}

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateForm(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    console.log('Quote request submitted:', values)
    setIsSubmitted(true)
    setValues(initialValues)
  }

  const clearFieldError = (field: keyof ContactFormValues) => {
    if (!errors[field]) {
      return
    }

    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  return (
    <section className="scroll-mt-28 py-20 sm:py-24" id="contact">
      <Container className="reveal-stagger">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-xl border border-ink-100 bg-surface p-6 shadow-sm sm:p-8">
            <SectionHeader
              className="mb-8"
              description="Tell us about your project and we will follow up with a free quote."
              label="Contact"
              title="Request a Free Quote"
            />

            {isSubmitted ? (
              <div className="mb-6 rounded-lg border border-forest-200 bg-forest-50 px-5 py-4">
                <p className="text-sm font-medium text-forest-700">Thank you. Your quote request was submitted successfully.</p>
                <p className="mt-1 text-sm font-normal text-forest-600">
                  Our team typically responds within one business day.
                </p>
              </div>
            ) : null}

            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="fullName">
                  Full Name *
                </label>
                <Input
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  aria-invalid={Boolean(errors.fullName)}
                  id="fullName"
                  name="fullName"
                  onChange={(event) => {
                    setValues((previous) => ({ ...previous, fullName: event.target.value }))
                    clearFieldError('fullName')
                    setIsSubmitted(false)
                  }}
                  placeholder="Your full name"
                  required
                  value={values.fullName}
                />
                {errors.fullName ? (
                  <p className="mt-2 text-sm text-wine-700" id="fullName-error" role="alert">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="email">
                  Email *
                </label>
                <Input
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={Boolean(errors.email)}
                  id="email"
                  name="email"
                  onChange={(event) => {
                    setValues((previous) => ({ ...previous, email: event.target.value }))
                    clearFieldError('email')
                    setIsSubmitted(false)
                  }}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={values.email}
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-wine-700" id="email-error" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="phone">
                  Phone *
                </label>
                <Input
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  aria-invalid={Boolean(errors.phone)}
                  id="phone"
                  name="phone"
                  onChange={(event) => {
                    setValues((previous) => ({ ...previous, phone: event.target.value }))
                    clearFieldError('phone')
                    setIsSubmitted(false)
                  }}
                  placeholder="(###) ###-####"
                  required
                  type="tel"
                  value={values.phone}
                />
                {errors.phone ? (
                  <p className="mt-2 text-sm text-wine-700" id="phone-error" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="projectType">
                  Project Type
                </label>
                <select
                  className={formControlClasses}
                  id="projectType"
                  name="projectType"
                  onChange={(event) => {
                    setValues((previous) => ({ ...previous, projectType: event.target.value as ProjectType }))
                    setIsSubmitted(false)
                  }}
                  value={values.projectType}
                >
                  {projectTypeOptions.map((option) => (
                    <option key={option || 'placeholder'} value={option}>
                      {option || 'Select project type'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700" htmlFor="projectDescription">
                  Project Description
                </label>
                <textarea
                  className={formControlClasses}
                  id="projectDescription"
                  name="projectDescription"
                  onChange={(event) => {
                    setValues((previous) => ({ ...previous, projectDescription: event.target.value }))
                    setIsSubmitted(false)
                  }}
                  placeholder="Tell us about your timeline, property type, and project goals."
                  rows={5}
                  value={values.projectDescription}
                />
              </div>

              <Button size="lg" type="submit" variant="accent">
                Request a Free Quote
              </Button>
            </form>
          </div>

          <aside className="rounded-xl border border-ink-100 bg-canvas-warm p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-3xl leading-snug font-medium tracking-tight text-ink-900">
              Contact Information
            </h3>
            <p className="mt-3 max-w-[48ch] text-base font-light text-ink-600">
              Need help quickly? Call us directly during business hours and we can discuss your project details.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-medium tracking-[0.08em] text-ink-500 uppercase">Phone</p>
                <a
                  className="mt-1 inline-block text-lg font-medium text-wine-700 transition-colors duration-[150ms] hover:text-wine-800"
                  href="tel:+14013658336"
                >
                  (401) 365-8336
                </a>
              </div>

              <div>
                <p className="text-xs font-medium tracking-[0.08em] text-ink-500 uppercase">Address</p>
                <p className="mt-1 text-base font-normal text-ink-700">1741 Guava Ave, Melbourne, FL 32935</p>
              </div>

              <div>
                <p className="text-xs font-medium tracking-[0.08em] text-ink-500 uppercase">Business Hours</p>
                <p className="mt-1 text-base font-normal text-ink-700">Mon-Fri 8am-5pm</p>
              </div>

              <div className="rounded-lg border border-wine-200 bg-wine-50 px-5 py-4">
                <p className="text-sm font-normal text-wine-700">
                  Most quote requests receive a response within one business day.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
