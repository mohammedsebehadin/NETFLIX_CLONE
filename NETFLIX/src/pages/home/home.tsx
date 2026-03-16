import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./home.css";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const apiKey = import.meta.env.VITE_TMDB_API_KEY as string | undefined;

    if (!apiKey) {
      setError("Missing TMDB API key. Add VITE_TMDB_API_KEY to your .env file.");
      setLoading(false);
      return () => controller.abort();
    }

    const loadMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error(`TMDB error ${response.status}`);
        }
        const data = (await response.json()) as { results?: Movie[] };
        setMovies(data.results ?? []);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Failed to load movies. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    void loadMovies();

    return () => controller.abort();
  }, []);

  const imageBase = "https://image.tmdb.org/t/p/w342";

  return (
    <>
      <Header />
      <main className="home">
        <section className="hero">
          <div className="hero_content">
            <p className="hero_kicker">Trending Now</p>
            <h1 className="hero_title">Top picks this week</h1>
            <p className="hero_subtitle">
              Fresh releases and fan favorites, updated weekly from TMDB.
            </p>
          </div>
        </section>

        <section className="movie_section">
          <div className="section_header">
            <h2>Trending Movies</h2>
          </div>

          {loading && <p className="status">Loading titles...</p>}
          {!loading && error && <p className="status error">{error}</p>}

          {!loading && !error && (
            <div className="movie_grid">
              {movies.map((movie) => (
                <article className="movie_card" key={movie.id}>
                  {movie.poster_path ? (
                    <img
                      src={`${imageBase}${movie.poster_path}`}
                      alt={movie.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="poster_placeholder">No image</div>
                  )}
                  <div className="movie_meta">
                    <h3>{movie.title}</h3>
                    <p>
                      {movie.release_date?.slice(0, 4) ?? "—"} ·{" "}
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
