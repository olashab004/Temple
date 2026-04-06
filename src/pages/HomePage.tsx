import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, ArrowRight, Star, Calendar, Info } from "lucide-react";
import { motion } from "motion/react";
import type { Temple } from "../types";
import { getTemples } from "../lib/templeStore";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80"; // Kedarnath

export default function HomePage() {
  const [temples, setTemples] = useState<Temple[]>(getTemples().slice(0, 3));
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTemples(getTemples().slice(0, 3));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/temples?q=${searchQuery}`);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Kashi_Vishwanath.jpg"
            alt="Temple Hero"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Discover the Sacred <br />
              <span className="text-amber-400">Heritage of India</span>
            </h1>
            <p className="text-xl text-amber-50/90 max-w-2xl mx-auto leading-relaxed">
              Explore the divine architecture, rich history, and spiritual essence of India's most revered temples.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="relative flex-grow w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-200 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by temple, city, or deity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-amber-200/60 pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95"
            >
              Find Temples
            </button>
          </motion.form>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-amber-900 tracking-tight">Featured Sacred Sites</h2>
            <p className="text-amber-800/60">Handpicked destinations for your spiritual journey</p>
          </div>
          <Link
            to="/temples"
            className="flex items-center space-x-2 text-amber-700 font-bold hover:text-amber-900 transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temples.map((temple, idx) => (
            <motion.div
              key={temple.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-amber-100"
            >
              <Link to={`/temples/${temple.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-900 shadow-sm">
                    {temple.location.state}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                      {temple.name}
                    </h3>
                    <div className="flex items-center text-amber-800/60 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{temple.location.city}, {temple.location.state}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-amber-50">
                    <div className="flex items-center space-x-1 text-amber-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold">Divine Heritage</span>
                    </div>
                    <span className="text-xs font-medium text-amber-800/40 uppercase tracking-widest">
                      {temple.deity}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-amber-100/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-amber-900 leading-tight">
                  A Guide to India's <br />
                  <span className="text-amber-600">Spiritual Landscape</span>
                </h2>
                <p className="text-amber-800/70 text-lg leading-relaxed">
                  India is a land of ancient wisdom and sacred sites. Our portal aims to provide pilgrims and travelers with accurate information to plan their spiritual journeys respectfully and meaningfully.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Calendar, label: "Festival Calendar", desc: "Never miss a divine celebration" },
                  { icon: Info, label: "Visitor Guidelines", desc: "Respectful travel protocols" },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center text-amber-700">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-amber-900">{item.label}</h4>
                    <p className="text-sm text-amber-800/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/Madurai_Meenakshi_Temple_Gopuram.jpg"
                  alt="Temple Detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs space-y-4 -rotate-3">
                <p className="text-amber-900 font-medium italic">
                  "The architecture of these temples is not just stone, but a reflection of cosmic order."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-600 rounded-full" />
                  <div>
                    <p className="font-bold text-sm text-amber-900">Heritage Expert</p>
                    <p className="text-xs text-amber-800/60">Cultural Researcher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
