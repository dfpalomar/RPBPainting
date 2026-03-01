import { Phone } from 'lucide-react'

const PHONE_HREF = 'tel:+14013658336'

export function MobileCallButton() {
  return (
    <a
      aria-label="Call RPB Painting now"
      className="fixed right-5 bottom-5 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-wine-600 px-5 text-sm font-medium tracking-wide text-white no-underline shadow-lg transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-wine-700 sm:hidden"
      href={PHONE_HREF}
    >
      <Phone size={18} />
      <span>Call Now</span>
    </a>
  )
}
