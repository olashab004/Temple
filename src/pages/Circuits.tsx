import { Map, ArrowRight, MapPin, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80";

const circuits = [
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    description: "The most sacred pilgrimage circuit in India, covering four holy sites: Badrinath, Dwarka, Puri, and Rameswaram.",
    duration: "12-15 Days",
    stops: ["Badrinath", "Dwarka", "Puri", "Rameswaram"],
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
    difficulty: "Moderate",
    bestTime: "May to October"
  },
  {
    id: "jyotirlinga",
    name: "12 Jyotirlinga Circuit",
    description: "A spiritual journey to the twelve most sacred shrines of Lord Shiva, spread across the length and breadth of India.",
    duration: "20-25 Days",
    stops: ["Somnath", "Kashi Vishwanath", "Mahakaleshwar", "Rameshwaram"],
    image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc91db?w=1200&q=80",
    difficulty: "Challenging",
    bestTime: "October to March"
  },
  {
    id: "shakti-peeth",
    name: "Shakti Peeth Darshan",
    description: "A pilgrimage to the sacred shrines dedicated to Goddess Shakti, representing the divine feminine energy.",
    duration: "10-12 Days",
    stops: ["Kamakhya", "Kanyakumari", "Vaishno Devi", "Amarnath"],
    image: "https://images.unsplash.com/photo-1591382755255-763488219468?w=1200&q=80",
    difficulty: "Moderate",
    bestTime: "September to April"
  }
];

export default function Circuits() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 tracking-tight">Pilgrimage Circuits</h1>
        <p className="text-amber-800/60 text-lg leading-relaxed">
          Embark on a transformative spiritual journey through India's most revered pilgrimage routes. Plan your sacred itinerary with our curated circuits.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {circuits.map((circuit, idx) => (
          <motion.div
            key={circuit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-amber-100 flex flex-col lg:flex-row"
          >
            <div className="lg:w-1/3 relative h-80 lg:h-auto overflow-hidden">
              <img
                src={circuit.image}
                alt={circuit.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-6 left-6 bg-amber-500 text-amber-950 font-bold px-4 py-2 rounded-2xl text-sm shadow-lg">
                {circuit.duration}
              </div>
            </div>
            <div className="lg:w-2/3 p-10 lg:p-16 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-amber-600 font-bold uppercase tracking-widest text-xs">
                  <Map className="w-4 h-4" />
                  <span>Sacred Route</span>
                </div>
                <h2 className="text-3xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                  {circuit.name}
                </h2>
                <p className="text-amber-800/70 text-lg leading-relaxed max-w-2xl">
                  {circuit.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-amber-900/40 uppercase tracking-widest">Key Destinations</h4>
                  <div className="flex flex-wrap gap-2">
                    {circuit.stops.map((stop) => (
                      <div key={stop} className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-xl text-amber-900 font-medium text-sm border border-amber-100">
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span>{stop}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2 bg-amber-100/50 px-4 py-2 rounded-xl text-amber-900/60 font-bold text-xs border border-amber-200 border-dashed">
                      <span>+ More</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-amber-900/40 uppercase tracking-widest">Travel Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-amber-800/60">Best Time:</span>
                      <span className="font-bold text-amber-900">{circuit.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-amber-800/60">Difficulty:</span>
                      <span className="font-bold text-amber-900">{circuit.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-amber-50 flex items-center justify-between">
                <Link
                  to="/temples"
                  className="bg-amber-900 text-amber-50 px-8 py-4 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-lg flex items-center space-x-2 group/btn"
                >
                  <span>Explore Route</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center space-x-1 text-amber-600">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest">Highly Revered</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Circuit CTA */}
      <section className="bg-amber-900 rounded-[3rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1602616605367-96f05762927e?w=1200&q=80"
            alt="Pattern"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          />
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
            Plan Your Custom <br />
            <span className="text-amber-400">Sacred Itinerary</span>
          </h2>
          <p className="text-amber-200/80 text-lg leading-relaxed">
            Can't find a circuit that fits your needs? Our heritage experts can help you design a personalized pilgrimage route based on your spiritual preferences.
          </p>
        </div>
        <button className="relative z-10 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold px-12 py-5 rounded-2xl transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95">
          Consult an Expert
        </button>
      </section>
    </div>
  );
}
