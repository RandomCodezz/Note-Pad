import { NavigatedData, Page } from '@nativescript/core';
import { NoteFormViewModel } from './note-form-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new NoteFormViewModel();
}