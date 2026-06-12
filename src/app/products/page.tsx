import type { Metadata } from "next";
import content from "@/data/content.json";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Fixtures, Jigs & Tooling",
  description:
    "Explore our range of precision-engineered products including welding fixtures, assembly jigs, checking fixtures, machining fixtures, SPM tooling, and press tools.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative" id="products-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-davs relative z-10">
          <span className="text-orange-primary text-sm font-semibold uppercase tracking-wider">
            Our Products
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-manrope)] tracking-tight">
            Precision-Engineered<br />
            <span className="text-orange-primary">Tooling Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-500 max-w-2xl">
            From welding fixtures to progressive dies — every product is designed for
            manufacturing accuracy, repeatability, and production efficiency.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding" id="products-grid">
        <div className="container-davs">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.products.map((product, index) => (
              <article
                key={product.id}
                className="card-industrial overflow-hidden group"
                id={`product-${product.id}`}
              >
                {/* Image */}
                <div className="relative h-52 bg-charcoal-700 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundColor: "var(--charcoal-700)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-primary/90 text-white text-xs font-semibold uppercase tracking-wider rounded-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-manrope)] group-hover:text-orange-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal-500 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-5 space-y-2">
                    {product.specifications.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-orange-primary mt-0.5 shrink-0"
                        />
                        <span className="text-xs text-charcoal-500">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <Button href="/contact" variant="ghost" size="sm">
                      Request Specification Sheet →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="section-padding section-light" id="custom-solutions">
        <div className="container-davs text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            subtitle="We design and engineer bespoke tooling for unique manufacturing challenges. Tell us about your requirements."
            light
          />
          <Button href="/contact" variant="primary" size="lg" icon>
            Discuss Your Requirements
          </Button>
        </div>
      </section>
    </>
  );
}
