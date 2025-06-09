import { Inter } from "next/font/google"

const karla = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-karla",
})

export default function Component() {
  return (
    <section className="bg-[#537D5D] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-[#FDFCD6] mb-6"
          style={{
            fontFamily: "Karla, sans-serif",
            fontWeight: 500,
            fontSize: "26px",
            lineHeight: "50px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Connect With Us
        </h2>
        <p
          className="text-white"
          style={{
            fontFamily: "Karla, sans-serif",
            fontWeight: 500,
            fontSize: "26px",
            lineHeight: "50px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Whether you're a corporation, government body, researcher, or individual passionate about sustainability
        </p>
      </div>
    </section>
  )
}
