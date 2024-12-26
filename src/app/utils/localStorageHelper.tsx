export const getWishlist = () => {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
};

export const addToWishlist = (item:any) => {
  const wishlist = getWishlist();
  const alreadyInWishlist = wishlist.find((i:any) => i.id === item.id);

  if (!alreadyInWishlist) {
    wishlist.push(item);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (id: any) => {
  let wishlist = getWishlist();
  wishlist = wishlist.filter((item:any) => item.id !== id);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
};