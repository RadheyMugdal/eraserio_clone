import { Briefcase, Lightbulb, Pencil, Sparkles, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <header className=" flex items-center justify-between p-4">
        <h1 className=" font-bold text-2xl flex items-center gap-2 ">
          <Briefcase />
          ExcalText
        </h1>
        <div>
          <nav>
            <ul className=" flex  gap-6 items-center justify-center">
              <li>Home</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </nav>
        </div>
        <div className=" flex gap-4">
          <Link href={"/login"}>
            <button className=" p-2 px-4 bg-background hover:bg-primary transition-colors  duration-200 ring-1 hover:ring-0 rounded-full border">
              Get started
            </button>
          </Link>
        </div>
      </header>
      <div>
        <div className=" flex h-[40vh] lg:h-[60vh] md:h-[60vh]    w-screen items-center justify-center flex-col gap-6 bg-radial from-pink-400 from-40% to-fuchsia-700  ">
          <h1 className=" text-2xl text-center tracking-tighter md:tracking-normal md:text-3xl lg:text-5xl font-bold  bg-gradient-to-b from-primary to-foreground  bg-clip-text  text-transparent ">
            Collaborate and Create Without Limits
          </h1>
          <p className="  md:text-lg lg:w-[40%] text-sm w-[60%] md:w-[50%] text-center text-foreground/50">
            The ultimate whiteboard and diagramming tool for teams
          </p>
          <Link href={"/login"}>
            <button className=" p-2 px-4 bg-background hover:bg-primary transition-colors  duration-200 ring-1 hover:ring-0 rounded-full border flex gap-2">
              <Sparkles />
              Try for free
            </button>
          </Link>
        </div>
        <div
          className=" w-fit h-fit border-2 mx-auto rounded-xl relative bg-background 
  before:absolute before:top-0 before:left-0 before:w-full before:h-full 
  before:bg-gradient-to-br before:from-primary before:to-primary before:blur-2xl 
  before:-z-10  "
        >
          <Image
            src="/image.png"
            width={900}
            height={700}
            alt="Drawboard image"
          />
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose ExcalText?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Collaboration",
                description:
                  "Work simultaneously with your team on an infinite canvas",
                icon: <User2 className="w-6 h-6" />,
              },
              {
                title: "Lightning Fast",
                description:
                  "Experience smooth and responsive drawing with our optimized performance.",
                icon: <Lightbulb className="w-6 h-6" />,
              },
              {
                title: "Intuitive Drawing Tools",
                description:
                  "Create diagrams and sketches with ease using our simple yet powerful drawing tools.",
                icon: <Pencil className="w-6 h-6" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border bg-background hover:bg-muted transition-colors"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-20 px-4 bg-background">
        <h1 className="text-center text-4xl font-bold mb-16">Pricing</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tier: "Starter",
              price: "Free",
              features: [
                "1 User",
                "Upto 10 boards",
                "Upto 5 Workspaces",
                "Community support",
              ],
              cta: "Get Started",
            },
            {
              tier: "Pro monthly",
              price: "$29",
              features: [
                "Unlimited boards",
                "Unlimited workspaces",
                "Priority support",
                "Advanced templates",
              ],
              cta: "Go Pro",
              featured: true,
            },
            {
              tier: "Pro yearly",
              price: "$300",
              features: [
                "Unlimited boards",
                "Unlimited workspaces",
                "Priority support",
                "Advanced templates",
              ],
              cta: "Contact Sales",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border bg-background relative overflow-hidden 
              ${plan.featured ? "border-primary" : "border-muted"}`}
            >
              {plan.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors
                ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-muted hover:bg-muted/50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">ExcalText</h3>
              <p className="text-muted-foreground">
                Reimagining digital collaboration for modern teams.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Templates", "Integrations"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4">
                {["Twitter", "GitHub", "LinkedIn", "Mail"].map(
                  (platform, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Briefcase className="w-5 h-5" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            2024 ExcalText. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
