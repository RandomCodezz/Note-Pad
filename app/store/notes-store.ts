import { Observable } from '@nativescript/core';
import { Note } from '../models/note.model';

export class NotesStore extends Observable {
    private _notes: Note[] = [];

    constructor() {
        super();
        this._notes = [];
    }

    get notes(): Note[] {
        return this._notes;
    }

    addNote(title: string, content: string) {
        const note: Note = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date()
        };
        this._notes.unshift(note);
        this.notifyPropertyChange('notes', this._notes);
    }

    deleteNote(id: string) {
        this._notes = this._notes.filter(note => note.id !== id);
        this.notifyPropertyChange('notes', this._notes);
    }
}

export const notesStore = new NotesStore();