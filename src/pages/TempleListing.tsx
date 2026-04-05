import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, MapPin, Filter, X, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import type { Temple } from "../types";
import { TEMPLES_DATA } from "../data/temples";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80";

export default function TempleListing() {
  const [temples, setTemples] = useState<Temple[]>(TEMPLES_DATA);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("q") || "";
  const stateFilter = searchParams.get("state") || "";
  const deityFilter = searchParams.get("deity") || "";

  useEffect(() => {
    // Using hardcoded data for immediate reliability on Vercel
    setTemples(TEMPLES_DATA);
    setIsLoading(false);
  }, []);

  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      const matchesQuery =
        temple.name.toLowerCase().includes(query.toLowerCase()) ||
        temple.location.city.toLowerCase().includes(query.toLowerCase()) ||
        temple.deity.toLowerCase().includes(query.toLowerCase());
      const matchesState = !stateFilter || temple.location.state === stateFilter;
      const matchesDeity = !deityFilter || temple.deity.includes(deityFilter);
      return matchesQuery && matchesState && matchesDeity;
    });
  }, [temples, query, stateFilter, deityFilter]);

  const states = Array.from(new Set(temples.map((t) => t.location.state)));
  const deities = Array.from(new Set(temples.map((t) => t.deity.split(" ")[0]))); // Simplified deity categories

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-amber-900 tracking-tight">Temple Directory</h1>
        <p className="text-amber-800/60 max-w-2xl">
          Browse through our collection of sacred temples across India. Filter by state, city, or deity to find your destination.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 font-bold text-amber-900">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </div>
              {(query || stateFilter || deityFilter) && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-bold text-amber-600 hover:text-amber-800 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
                <input
                  type="text"
                  placeholder="Temple name..."
                  value={query}
                  onChange={(e) => updateFilters("q", e.target.value)}
                  className="w-full bg-amber-50/50 border border-amber-100 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>

            {/* State Filter */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">State</label>
              <div className="flex flex-wrap gap-2">
                {states.map((state) => (
                  <button
                    key={state}
                    onClick={() => updateFilters("state", state === stateFilter ? "" : state)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                      stateFilter === state
                        ? "bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-600/20"
                        : "bg-white border-amber-100 text-amber-800 hover:border-amber-400"
                    )}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>

            {/* Deity Filter */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Deity</label>
              <div className="flex flex-wrap gap-2">
                {deities.map((deity) => (
                  <button
                    key={deity}
                    onClick={() => updateFilters("deity", deity === deityFilter ? "" : deity)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                      deityFilter === deity
                        ? "bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-600/20"
                        : "bg-white border-amber-100 text-amber-800 hover:border-amber-400"
                    )}
                  >
                    {deity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex justify-between items-center text-sm text-amber-800/60">
            <span>Showing {filteredTemples.length} temples</span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-amber-100/50 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : filteredTemples.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredTemples.map((temple, idx) => (
                  <motion.div
                    key={temple.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-amber-100 flex flex-col"
                  >
                    <Link to={`/temples/${temple.id}`} className="flex flex-col h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={temple.image}
                          alt={temple.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-900">
                          {temple.location.state}
                        </div>
                      </div>
                      <div className="p-6 flex-grow space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                            {temple.name}
                          </h3>
                          <div className="flex items-center text-amber-800/60 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{temple.location.city}</span>
                          </div>
                        </div>
                        <p className="text-sm text-amber-800/70 line-clamp-2 leading-relaxed">
                          {temple.history}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-amber-50 mt-auto">
                          <div className="flex items-center space-x-1 text-amber-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-xs font-bold uppercase tracking-wider">{temple.deity}</span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-24 space-y-4 bg-white rounded-3xl border border-dashed border-amber-200">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-300">
                <Search className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-amber-900">No temples found</h3>
                <p className="text-amber-800/60">Try adjusting your search or filters</p>
              </div>
              <button
                onClick={clearFilters}
                className="text-amber-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
