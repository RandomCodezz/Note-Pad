import { Observable, Frame } from '@nativescript/core';
import { notesStore } from '../../store/notes-store';

export class NoteFormViewModel extends Observable {
    private _title: string = '';
    private _content: string = '';

    constructor() {
        super();
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
            this.notifyPropertyChange('title', value);
        }
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        if (this._content !== value) {
            this._content = value;
            this.notifyPropertyChange('content', value);
        }
    }

    onSaveNote() {
        if (this._title && this._content) {
            notesStore.addNote(this._title, this._content);
            Frame.topmost().goBack();
        }
    }
}