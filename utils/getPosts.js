import { useEffect, useState } from "react";
import matter from "gray-matter";

const usePosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      const getPosts = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);

        const data = keys.map((key, index) => {
          const slug = key
            .replace(/^.*[\\\/]/, "")
            .split(".")
            .slice(0, -1)
            .join(".");
          const value = values[index];
          const document = matter(value.default);

          return {
            header: document.data,
            body: document.content,
            slug,
          };
        });

        return data;
      })(require.context("../content", true, /\.md$/));

      if (getPosts.length >= 1) {
        setData(getPosts);
        setLoading(false);
      }
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};

export default usePosts;
