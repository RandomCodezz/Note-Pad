import { Observable } from '@nativescript/core';
import { notesStore } from './store/notes-store';
import { Note } from './models/note.model';
import { Animation, View } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
    constructor() {
        super();
    }

    get notes(): Note[] {
        return notesStore.notes;
    }

    onAddNote() {
        Frame.topmost().navigate({
            moduleName: 'app/views/note-form/note-form-page',
            transition: {
                name: 'slideTop',
                duration: 300,
                curve: 'easeInOut'
            }
        });
    }

    onDeleteNote(args) {
        const note = args.object.bindingContext;
        const view = args.object.parent;
        
        new Animation([{
            target: view,
            translate: { x: -200, y: 0 },
            duration: 200,
            opacity: 0
        }])
        .play()
        .then(() => {
            notesStore.deleteNote(note.id);
        });
    }

    onItemLoaded(args) {
        const view = args.object;
        view.opacity = 0;
        view.translateY = 50;

        new Animation([{
            target: view,
            translate: { x: 0, y: 0 },
            duration: 300,
            opacity: 1,
            curve: 'easeOut'
        }])
        .play();
    }
}