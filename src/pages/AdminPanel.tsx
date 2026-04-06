import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, ShieldCheck, Save, X, Info, MapPin, Star, Lock, LogIn, Download, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import type { Temple } from "../types";
import { getTemples, saveTemples } from "../lib/templeStore";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80"; // Kedarnath
const DEFAULT_ADMIN_PASSWORD = "admin";
const PASSWORD_STORAGE_KEY = "admin_password_v1";

export default function AdminPanel() {
  const [temples, setTemples] = useState<Temple[]>(getTemples());
  const [isAdding, setIsAdding] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [exportData, setExportData] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("admin_auth") === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const [newTemple, setNewTemple] = useState<Partial<Temple>>({
    name: "",
    location: { state: "", city: "" },
    deity: "",
    history: "",
    timings: "",
    rituals: [],
    festivals: [],
    dressCode: "",
    nearby: { accommodation: "", transport: "" },
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80"
  });

  useEffect(() => {
    setTemples(getTemples());
  }, []);

  const getAdminPassword = () => {
    if (typeof window === "undefined") return DEFAULT_ADMIN_PASSWORD;
    return localStorage.getItem(PASSWORD_STORAGE_KEY) || DEFAULT_ADMIN_PASSWORD;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === getAdminPassword()) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Invalid password. Please try again.");
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPasswordInput !== confirmPasswordInput) {
      alert("Passwords do not match!");
      return;
    }
    if (newPasswordInput.length < 4) {
      alert("Password must be at least 4 characters long.");
      return;
    }
    localStorage.setItem(PASSWORD_STORAGE_KEY, newPasswordInput);
    setIsChangingPassword(false);
    setNewPasswordInput("");
    setConfirmPasswordInput("");
    alert("Password changed successfully!");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  const handleExport = () => {
    const data = JSON.stringify(temples, null, 2);
    setExportData(data);
    
    // Try to copy to clipboard as a convenience
    try {
      navigator.clipboard.writeText(data).then(() => {
        alert("Temple data copied to clipboard! You can also copy it from the window that just opened.");
      }).catch(err => {
        console.error("Clipboard copy failed:", err);
      });
    } catch (e) {
      console.error("Clipboard API not available:", e);
    }
  };

  const downloadData = () => {
    if (!exportData) return;
    const blob = new Blob([exportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "temples.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let updatedTemples: Temple[];
    if (editingId) {
      updatedTemples = temples.map(t => t.id === editingId ? { ...t, ...newTemple } as Temple : t);
    } else {
      const templeToAdd = {
        ...newTemple,
        id: Date.now().toString(),
      } as Temple;
      updatedTemples = [...temples, templeToAdd];
    }

    saveTemples(updatedTemples);
    setTemples(updatedTemples);
    setIsAdding(false);
    setEditingId(null);
    resetForm();
    alert("Changes saved successfully! These changes are now visible across the site in your browser.");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this temple?")) return;
    const updatedTemples = temples.filter(t => t.id !== id);
    saveTemples(updatedTemples);
    setTemples(updatedTemples);
    alert("Temple deleted from local storage.");
  };

  const handleReset = () => {
    if (!confirm("Are you sure you want to reset all data to defaults? This will erase all your local changes.")) return;
    localStorage.removeItem("temple_heritage_data");
    window.location.reload();
  };

  const handleEdit = (temple: Temple) => {
    setNewTemple(temple);
    setEditingId(temple.id);
    setIsAdding(true);
  };

  const resetForm = () => {
    setNewTemple({
      name: "",
      location: { state: "", city: "" },
      deity: "",
      history: "",
      timings: "",
      rituals: [],
      festivals: [],
      dressCode: "",
      nearby: { accommodation: "", transport: "" },
      image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc91db?w=1200&q=80"
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-[2.5rem] border border-amber-100 shadow-xl space-y-8"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-amber-900">Admin Access</h1>
              <p className="text-amber-800/60">Please enter the administrator password to continue.</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Password</label>
              <input
                required
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                placeholder="Enter password"
              />
              {authError && (
                <p className="text-red-500 text-xs font-medium">{authError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-amber-900 text-amber-50 font-bold py-4 rounded-xl transition-all shadow-lg hover:bg-amber-800 flex items-center justify-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Login to Dashboard</span>
            </button>
          </form>
          
          <div className="text-center">
            <p className="text-xs text-amber-800/40 italic">Hint: The default password is "admin"</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-amber-900 p-10 rounded-[2.5rem] text-amber-50 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/30 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-widest text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Portal</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Content Management</h1>
          <p className="text-amber-200/60 max-w-md">
            Manage the sacred heritage database. Add new temples, edit existing entries, and maintain data accuracy.
          </p>
          <button 
            onClick={handleLogout}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold underline transition-colors"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button
            onClick={() => setIsChangingPassword(true)}
            className="flex items-center justify-center space-x-2 bg-amber-800/50 hover:bg-amber-800 text-amber-50 font-bold px-6 py-4 rounded-2xl transition-all border border-amber-700/50"
          >
            <Lock className="w-5 h-5" />
            <span>Change Password</span>
          </button>
          <button
            onClick={handleExport}
            className="flex items-center justify-center space-x-2 bg-amber-800/50 hover:bg-amber-800 text-amber-50 font-bold px-6 py-4 rounded-2xl transition-all border border-amber-700/50"
            title="Export data to share with developer"
          >
            <Copy className="w-5 h-5" />
            <span>Export Data</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center justify-center space-x-2 bg-amber-800/50 hover:bg-amber-800 text-amber-50 font-bold px-6 py-4 rounded-2xl transition-all border border-amber-700/50"
          >
            <X className="w-5 h-5" />
            <span>Reset to Default</span>
          </button>
          <button
            onClick={() => {
              resetForm();
              setEditingId(null);
              setIsAdding(true);
            }}
            className="flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Temple</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white p-10 rounded-[2.5rem] border border-amber-100 shadow-xl space-y-10"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-900">
                {editingId ? "Edit Temple Entry" : "Add New Temple Entry"}
              </h2>
              <button
                onClick={() => {
                  setIsAdding(false);
                  setEditingId(null);
                }}
                className="p-2 text-amber-400 hover:text-amber-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Temple Name</label>
                  <input
                    required
                    type="text"
                    value={newTemple.name}
                    onChange={(e) => setNewTemple({ ...newTemple, name: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">State</label>
                    <input
                      required
                      type="text"
                      value={newTemple.location?.state}
                      onChange={(e) => setNewTemple({ ...newTemple, location: { ...newTemple.location!, state: e.target.value } })}
                      className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">City</label>
                    <input
                      required
                      type="text"
                      value={newTemple.location?.city}
                      onChange={(e) => setNewTemple({ ...newTemple, location: { ...newTemple.location!, city: e.target.value } })}
                      className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Primary Deity</label>
                  <input
                    required
                    type="text"
                    value={newTemple.deity}
                    onChange={(e) => setNewTemple({ ...newTemple, deity: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">History & Background</label>
                  <textarea
                    required
                    rows={4}
                    value={newTemple.history}
                    onChange={(e) => setNewTemple({ ...newTemple, history: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Daily Rituals (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Mangala Aarti: 3:00 AM, Bhog Aarti: 11:15 AM"
                    value={newTemple.rituals?.join(", ")}
                    onChange={(e) => setNewTemple({ ...newTemple, rituals: e.target.value.split(",").map(s => s.trim()).filter(s => s !== "") })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Major Festivals (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Mahashivratri, Dev Deepawali"
                    value={newTemple.festivals?.join(", ")}
                    onChange={(e) => setNewTemple({ ...newTemple, festivals: e.target.value.split(",").map(s => s.trim()).filter(s => s !== "") })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Darshan Timings</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 5:00 AM - 9:00 PM"
                    value={newTemple.timings}
                    onChange={(e) => setNewTemple({ ...newTemple, timings: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Dress Code</label>
                  <input
                    required
                    type="text"
                    value={newTemple.dressCode}
                    onChange={(e) => setNewTemple({ ...newTemple, dressCode: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Image URL</label>
                  <div className="flex gap-4 items-start">
                    <div className="flex-grow space-y-2">
                      <input
                        required
                        type="url"
                        value={newTemple.image}
                        onChange={(e) => setNewTemple({ ...newTemple, image: e.target.value })}
                        className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-[10px] text-amber-800/40 italic">
                        Tip: Use direct image links (ending in .jpg, .png, etc.) for best results.
                      </p>
                    </div>
                    {newTemple.image && (
                      <div className="w-20 h-20 rounded-xl overflow-hidden border border-amber-100 shrink-0 bg-amber-50">
                        <img 
                          src={newTemple.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-amber-900 text-amber-50 font-bold py-4 rounded-xl transition-all shadow-lg hover:bg-amber-800 flex items-center justify-center space-x-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>{editingId ? "Update Temple Entry" : "Save Temple Entry"}</span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChangingPassword && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-amber-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">Change Password</h2>
                <button onClick={() => setIsChangingPassword(false)} className="p-2 text-amber-400 hover:text-amber-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleChangePassword} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">New Password</label>
                  <input
                    required
                    type="password"
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-900/40 uppercase tracking-widest">Confirm Password</label>
                  <input
                    required
                    type="password"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    className="w-full bg-amber-50/50 border border-amber-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-900 text-amber-50 font-bold py-4 rounded-xl transition-all shadow-lg hover:bg-amber-800 flex items-center justify-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Update Password</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {exportData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-amber-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-2xl p-10 rounded-[2.5rem] shadow-2xl space-y-6 max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-amber-900">Export Temple Data</h2>
                  <p className="text-sm text-amber-800/60">Copy this JSON and share it with the developer.</p>
                </div>
                <button onClick={() => setExportData(null)} className="p-2 text-amber-400 hover:text-amber-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-grow overflow-hidden border border-amber-100 rounded-2xl bg-amber-50/30">
                <textarea
                  readOnly
                  value={exportData}
                  className="w-full h-full p-6 font-mono text-xs bg-transparent focus:outline-none resize-none"
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(exportData);
                    alert("Copied to clipboard!");
                  }}
                  className="flex-grow bg-amber-900 text-amber-50 font-bold py-4 rounded-xl transition-all hover:bg-amber-800 flex items-center justify-center space-x-2"
                >
                  <Copy className="w-5 h-5" />
                  <span>Copy to Clipboard</span>
                </button>
                <button
                  onClick={downloadData}
                  className="flex-grow bg-amber-500 text-amber-950 font-bold py-4 rounded-xl transition-all hover:bg-amber-600 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download .json</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-amber-900">Existing Temple Entries</h2>
        <div className="bg-white rounded-[2.5rem] border border-amber-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-amber-50/50 border-b border-amber-100">
                <th className="px-8 py-6 text-xs font-bold text-amber-900/40 uppercase tracking-widest">Temple</th>
                <th className="px-8 py-6 text-xs font-bold text-amber-900/40 uppercase tracking-widest">Location</th>
                <th className="px-8 py-6 text-xs font-bold text-amber-900/40 uppercase tracking-widest">Deity</th>
                <th className="px-8 py-6 text-xs font-bold text-amber-900/40 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-50">
              {isLoading ? (
                [1, 2, 3].map((i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={4} className="px-8 py-6 h-20 bg-amber-50/20" />
                  </tr>
                ))
              ) : temples.map((temple) => (
                <tr key={temple.id} className="hover:bg-amber-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <img src={temple.image} alt={temple.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }} />
                      </div>
                      <span className="font-bold text-amber-900">{temple.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center text-amber-800/60 text-sm">
                      <MapPin className="w-4 h-4 mr-1 shrink-0" />
                      <span>{temple.location.city}, {temple.location.state}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center text-amber-800/60 text-sm">
                      <Star className="w-4 h-4 mr-1 shrink-0 text-amber-400" />
                      <span>{temple.deity}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(temple)}
                        className="p-2 text-amber-400 hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-all"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(temple.id)}
                        className="p-2 text-red-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
