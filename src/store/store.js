import  { create } from 'zustand';

const useStore = create((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));

export default useStore;
