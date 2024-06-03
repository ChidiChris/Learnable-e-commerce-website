import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const existingIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        toast.info("Product already in wishlist", {
          position: "bottom-left",
          className: "toast-info"
        });
      } else {
        state.wishlistItems.push(action.payload);
        toast.success("Product added to wishlist", {
          position: "bottom-left",
          className: "toast-success"
        });
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
    removeFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      toast.error("Product removed from wishlist", {
        position: "bottom-left",
        className: "toast-error"
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
