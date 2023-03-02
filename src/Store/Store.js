import { create } from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  Theme: false,
  settheme: (mode) => set({ Theme: mode }),
  Bgcolor: "",
  setBgcolor: (color) => set({ Bgcolor: color }),
  TextColor: "#000000",
  setTextcolor: (color) => set({ TextColor: color }),
  SidebarColor: "",
  SetSidebarcolor: (color) => set({ SidebarColor: color }),
  HeaderColor: "#ffffff",  
  SetHeadercolor: (color) => set({ HeaderColor: color }),
  BorderColor: "f0f0f0",
  SetBorderColor: (color) => set({ BorderColor: color }),
  FontSize: 14,
  SetFontSize: (size) => set({ FontSize: size }),
  BorderSize: 6,
  SetBorderSize: (size) => set({ BorderSize: size }),
  IconColor:"#ffffff",
  SetIconColor: (color) => set({ IconColor: color }),
});
store = persist(store, { name: "customizetheme" });
const useStore = create(store);
export default useStore;
