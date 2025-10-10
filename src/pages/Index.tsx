import { PlantCard } from "@/components/PlantCard";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const plants = [
  {
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    waterFrequency: "Weekly",
    lightLevel: "Bright Indirect",
    difficulty: "Easy" as const,
    description: "Known for its stunning split leaves, this tropical beauty is perfect for beginners and brings a jungle vibe to any space.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
  },
  {
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    waterFrequency: "Bi-weekly",
    lightLevel: "Low to Bright",
    difficulty: "Easy" as const,
    description: "Nearly indestructible and perfect for low-light spaces, this air-purifying plant is ideal for busy plant parents.",
    image: "https://images.unsplash.com/photo-1593482892540-c6d6c8e57134?w=800&q=80",
  },
  {
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    waterFrequency: "Weekly",
    lightLevel: "Low to Moderate",
    difficulty: "Easy" as const,
    description: "A trailing beauty that thrives on neglect. Watch it cascade down shelves while purifying your air effortlessly.",
    image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=800&q=80",
  },
  {
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    waterFrequency: "Weekly",
    lightLevel: "Bright Indirect",
    difficulty: "Moderate" as const,
    description: "A statement plant with large, violin-shaped leaves. Requires consistent care but rewards you with dramatic presence.",
    image: "https://images.unsplash.com/photo-1598880940371-c756e015faf1?w=800&q=80",
  },
  {
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    waterFrequency: "Weekly",
    lightLevel: "Low to Moderate",
    difficulty: "Easy" as const,
    description: "Elegant white blooms and glossy leaves make this a favorite. It even tells you when it needs water by drooping slightly!",
    image: "https://images.unsplash.com/photo-1593482892330-61a0fe4a4a69?w=800&q=80",
  },
  {
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    waterFrequency: "Bi-weekly",
    lightLevel: "Low to Bright",
    difficulty: "Easy" as const,
    description: "Shiny, waxy leaves and extreme tolerance to neglect make this the ultimate low-maintenance companion.",
    image: "https://images.unsplash.com/photo-1632207691143-643e2bdf1999?w=800&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90" />
        <img
          src={heroImage}
          alt="Beautiful houseplants collection"
          className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Leaf className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide uppercase">Your Plant Care Companion</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Keep Your Plants
              <span className="block text-primary-glow">Thriving & Happy</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
              Expert guidance, personalized care schedules, and plant tips at your fingertips. 
              Transform your space into a green paradise, one plant at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Browse Plants
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Features */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose PlantPal?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to become a confident plant parent
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Personalized Care",
                description: "Get tailored watering schedules and care reminders for each of your plants.",
              },
              {
                icon: <Leaf className="h-8 w-8 text-accent" />,
                title: "Expert Guidance",
                description: "Access comprehensive plant care guides curated by horticulture experts.",
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Community Support",
                description: "Connect with fellow plant lovers and share your growing journey.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft border border-border/50 space-y-4 transition-all hover:shadow-card">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Plants */}
        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Houseplants
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the perfect plants for your space and skill level
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant, i) => (
              <PlantCard key={i} {...plant} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">PlantPal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 PlantPal. Helping plants thrive everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
