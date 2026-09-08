import { ComingSoon } from "@/components/coming-soon"

export const metadata = {
  title: "Now · Shahriar Khan",
  description: "What I'm focused on right now.",
}

export default function NowPage() {
  return (
    <ComingSoon
      title="What I'm Doing Now"
      description="A short, regularly updated snapshot of my current focus, what I'm building, learning, and reading. Coming after the next portfolio iteration."
    />
  )
}
