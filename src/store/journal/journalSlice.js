import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null
    // active: {
    //   id: 'ABC123',
    //   title: '',
    //   body: '',
    //   date: 15081996,
    //   imageUrls: [],
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state
    },
    setActiveNote: (state, action) => {
      state
    },
    setNotes: (state, action) =>{
      state
    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {
      
    },
    deleteNoteById: (state, action) => {
      
    }
  }
});


// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;
