import React, {useMemo} from "react";

export const useSortedNotes = (notes, sort) => {

    const sortedNotes = useMemo(() => {        
        if (sort) {
          return [...notes].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
          return notes
      }, [sort, notes])

    return sortedNotes
}

export const useNotes = (notes, sort, query) => {
    const sortedNotes = useSortedNotes(notes, sort)

    const sortedAndSearchedNotes = useMemo(() => {
        return sortedNotes.filter(note => note.title.toLowerCase().includes(query))
      }, [query, sortedNotes] )

    return sortedAndSearchedNotes

}