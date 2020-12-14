import { createSelector } from '@reduxjs/toolkit';

export const getBooks = (state) => state.books.books;
