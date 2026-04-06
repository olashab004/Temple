import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Info, Shield, Map, ChevronLeft, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import type { Temple } from "../types";
import { getTemples } from "../lib/templeStore";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80"; // Kedarnath

export default function TempleDetail() {
  const { id } = useParams();
  const [temple, setTemple] = useState<Temple | null>(null);
  const [nearbyTemples, setNearbyTemples] = useState<Temple[]>([]);
  const [activeTab, setActiveTab] = useState("history");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allTemples = getTemples();
    const found = allTemples.find((t: Temple) => t.id === id);
    setTemple(found || null);

    if (found) {
      // Find temples in the same state, excluding the current one
      const nearby = allTemples
        .filter((t: Temple) => t.location.state === found.location.state && t.id !== id)
        .slice(0, 3); // Show up to 3 nearby temples
      setNearbyTemples(nearby);
    }

    setIsLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-8 animate-pulse">
        <div className="h-96 bg-amber-100 rounded-3xl" />
        <div className="h-12 w-1/3 bg-amber-100 rounded-xl" />
        <div className="h-48 bg-amber-100 rounded-3xl" />
      </div>
    );
  }

  if (!temple) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-300">
          <Info className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-amber-900">Temple Not Found</h2>
          <p className="text-amber-800/60">The temple you are looking for does not exist or has been moved.</p>
        </div>
        <Link
          to="/temples"
          className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Directory</span>
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: "history", label: "History & Deity", icon: Info },
    { id: "timings", label: "Timings & Rituals", icon: Clock },
    { id: "festivals", label: "Festivals", icon: Calendar },
    { id: "guidelines", label: "Visitor Guidelines", icon: Shield },
  ];

  return (
    <div className="pb-24 space-y-12">
      {/* Hero Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 space-y-6">
          <Link
            to="/temples"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors w-fit"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Directory</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-widest text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>{temple.deity}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              {temple.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-amber-50/80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-lg">{temple.location.city}, {temple.location.state}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-lg">{temple.timings}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-wrap gap-2 border-b border-amber-200 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all",
                    activeTab === tab.id
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                      : "text-amber-900/60 hover:bg-amber-100"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm min-h-[400px]"
              >
                {activeTab === "history" && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">Historical Significance</h3>
                      <p className="text-amber-800/80 leading-relaxed text-lg">
                        {temple.history}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">The Presiding Deity</h3>
                      <p className="text-amber-800/80 leading-relaxed text-lg">
                        {temple.deity} is the primary deity of this sacred shrine. The temple's architecture and rituals are centered around the divine presence of the deity.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "timings" && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">Darshan Timings</h3>
                      <div className="bg-amber-50 p-6 rounded-2xl flex items-center space-x-4">
                        <Clock className="w-8 h-8 text-amber-600" />
                        <div>
                          <p className="text-sm font-bold text-amber-900/40 uppercase tracking-widest">General Timings</p>
                          <p className="text-xl font-bold text-amber-900">{temple.timings}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">Daily Rituals & Pooja</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {temple.rituals.map((ritual, idx) => (
                          <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl border border-amber-50 hover:border-amber-200 transition-colors">
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            <span className="text-amber-900 font-medium">{ritual}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "festivals" && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-amber-900">Major Festivals & Celebrations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {temple.festivals.map((festival, idx) => (
                        <div key={idx} className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 space-y-2">
                          <Calendar className="w-6 h-6 text-amber-600" />
                          <h4 className="text-lg font-bold text-amber-900">{festival}</h4>
                          <p className="text-sm text-amber-800/60 leading-relaxed">
                            A grand celebration attracting thousands of devotees from across the country.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "guidelines" && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">Dress Code</h3>
                      <div className="bg-amber-50 p-6 rounded-2xl flex items-start space-x-4">
                        <Shield className="w-8 h-8 text-amber-600 shrink-0" />
                        <p className="text-amber-900 font-medium leading-relaxed">{temple.dressCode}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-amber-900">General Guidelines</h3>
                      <ul className="space-y-3">
                        {[
                          "Photography is strictly prohibited inside the sanctum sanctorum.",
                          "Electronic gadgets like mobile phones and cameras may need to be deposited at the counter.",
                          "Maintain silence and decorum within the temple premises.",
                          "Follow the queue system for darshan.",
                        ].map((guide, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-amber-800/80">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0" />
                            <span>{guide}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            <div className="bg-amber-900 text-amber-50 p-8 rounded-3xl space-y-8 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight">Plan Your Visit</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Map className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-widest">Transport</span>
                  </div>
                  <p className="text-sm text-amber-200/80 leading-relaxed">
                    {temple.nearby.transport}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Star className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-widest">Accommodation</span>
                  </div>
                  <p className="text-sm text-amber-200/80 leading-relaxed">
                    {temple.nearby.accommodation}
                  </p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${temple.name}, ${temple.location.city}, ${temple.location.state}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>View on Map</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-amber-900">Nearby Temples</h3>
              <div className="space-y-4">
                {nearbyTemples.length > 0 ? (
                  nearbyTemples.map((nearby) => (
                    <Link
                      key={nearby.id}
                      to={`/temples/${nearby.id}`}
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-amber-100 rounded-2xl overflow-hidden shrink-0">
                        <img
                          src={nearby.image || FALLBACK_IMAGE}
                          alt={nearby.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-amber-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-1">
                          {nearby.name}
                        </p>
                        <p className="text-xs text-amber-800/60">{nearby.location.city}, {nearby.location.state}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-amber-800/60 italic">No other temples found in this state.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
