import { createContext, useEffect, useState } from "react";

type Game = {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string,
};

type WishlistContextType = {
  wishlist: Game[];
  addToWishlist: (game: Game) => void;
  isFavorite: (id: number) => boolean;
};

const WishlistContext = createContext({} as WishlistContextType);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Game[]>(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (game: Game) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === game.id);

      if (exists) {
        return prev.filter((item) => item.id !== game.id);
      }

      return [...prev, game];
    });
  };

  const isFavorite = (id: number) =>
    wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, isFavorite }}>
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistContext };