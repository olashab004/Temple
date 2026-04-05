import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const TEMPLES_FILE = path.join(__dirname, "temples.json");

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/temples", async (req, res) => {
    try {
      const data = await fs.readFile(TEMPLES_FILE, "utf-8");
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Failed to load temples" });
    }
  });

  app.post("/api/temples", async (req, res) => {
    try {
      const data = await fs.readFile(TEMPLES_FILE, "utf-8");
      const temples = JSON.parse(data);
      const newTemple = { ...req.body, id: Date.now().toString() };
      temples.push(newTemple);
      await fs.writeFile(TEMPLES_FILE, JSON.stringify(temples, null, 2));
      res.status(201).json(newTemple);
    } catch (error) {
      res.status(500).json({ error: "Failed to save temple" });
    }
  });

  app.put("/api/temples/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await fs.readFile(TEMPLES_FILE, "utf-8");
      let temples = JSON.parse(data);
      const index = temples.findIndex((t: any) => t.id === id);
      if (index === -1) return res.status(404).json({ error: "Temple not found" });
      
      temples[index] = { ...temples[index], ...req.body, id }; // Ensure ID stays same
      await fs.writeFile(TEMPLES_FILE, JSON.stringify(temples, null, 2));
      res.json(temples[index]);
    } catch (error) {
      res.status(500).json({ error: "Failed to update temple" });
    }
  });

  app.delete("/api/temples/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = await fs.readFile(TEMPLES_FILE, "utf-8");
      let temples = JSON.parse(data);
      temples = temples.filter((t: any) => t.id !== id);
      await fs.writeFile(TEMPLES_FILE, JSON.stringify(temples, null, 2));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete temple" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
