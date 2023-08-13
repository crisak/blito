import type { ReactNode } from 'react'

type SplashSocialIcon = { icon: ReactNode; bgImg: string }

export const SplashSocial = ({ icon, bgImg }: SplashSocialIcon) => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover w-70 h-98 flex items-center justify-center mb-[-2rem] opacity-70"
      style={{ backgroundImage: `url(${bgImg});` }}
    >
      {icon}
    </div>
  )
}
