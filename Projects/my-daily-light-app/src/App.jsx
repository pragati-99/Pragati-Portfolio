import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [customQuote, setCustomQuote] = useState("");
  const [theme, setTheme] = useState("light");

  // Fetch quote of the day on load
  useEffect(() => {
    fetchQuoteOfTheDay();
  }, []);

  const fetchQuoteOfTheDay = async () => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      setQuoteOfTheDay(res.data.content);
      setQuote(res.data.content);
    } catch (err) {
      console.error("Error fetching quote of the day:", err);
      setQuoteOfTheDay("Keep shining. Your light is enough.");
      setQuote("Keep shining. Your light is enough.");
    }
  };

  const fetchNewQuote = async () => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data.content);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote("Stay positive. Better days are coming.");
    }
  };

  const saveQuote = () => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  const deleteQuote = (index) => {
    const updated = [...savedQuotes];
    updated.splice(index, 1);
    setSavedQuotes(updated);
  };

  const addCustomQuote = () => {
    if (customQuote.trim() !== "") {
      setSavedQuotes([...savedQuotes, customQuote]);
      setCustomQuote("");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app-container ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="icon-toggle">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Daily Light ✨
      </motion.h1>

      <motion.div
        className="daily-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>🌞 Quote of the Day</h3>
        <p>"{quoteOfTheDay}"</p>
      </motion.div>

      <motion.div
        className="quote-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <p>"{quote}"</p>
        <button onClick={fetchNewQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </motion.div>

      <div className="add-quote">
        <h3>✨ Add Your Own Quote</h3>
        <input
          type="text"
          placeholder="Write something inspiring..."
          value={customQuote}
          onChange={(e) => setCustomQuote(e.target.value)}
        />
        <button onClick={addCustomQuote}>Add Quote</button>
      </div>

      {savedQuotes.length > 0 && (
        <motion.div
          className="saved-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <h2>Saved Quotes 💬</h2>
          <ul>
            {savedQuotes.map((q, i) => (
              <li key={i}>
                "{q}"
                <button className="delete-btn" onClick={() => deleteQuote(i)}>
                  🗑
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default App;
