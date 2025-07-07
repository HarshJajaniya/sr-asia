import Image from "next/image"

export default function Component() {
  return (
    <section className=" mb-[75px] px-4">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl mb-[75px] font-bold text-[tertiary/700] ">How we create impact</h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <Image
              src="/vision/1.png"
              alt="People in a classroom setting discussing and learning"
              width={400}
              height={300}
              className="object-cover h-[300px] w-full"
            />
          </div>

          {/* Right side - Text content */}
          <div className="space-y-4 text-[#246875] leading-relaxed">
            <p>
             At SR Asia, impact is the outcome of evidence-led strategy, local partnerships, and sustainable action. We work with governments, corporates, and development agencies to design and implement programs that deliver measurable social and environmental value — from research to real-world execution.
            </p>

            <p>
            Our assessments are rooted in data and shaped by context, ensuring they align with client goals and local realities. We embed sustainability at the core of our work through ESG integration, life cycle analysis, and reporting frameworks aligned with global standards. Every initiative is supported by real-time monitoring and independent assurance to ensure transparency, traceability, and accountability. And most importantly, we center community voices, designing interventions that are inclusive, equitable, and truly transformative.
            </p>

            {/* <p>
            Whether we’re shaping a policy brief, mapping resources, or supporting climate disclosures, SR Asia delivers impact with insight, intelligence, and integrity.
            </p>

            <p>
              Our work doesn’t end with implementation — we stay engaged to measure, learn, and improve. By blending strategic thinking with grassroots collaboration, we ensure every project is not only successful today but also sustainable tomorrow. With over a decade of experience across sectors and geographies, SR Asia continues to be a trusted partner for purpose-driven growth.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
