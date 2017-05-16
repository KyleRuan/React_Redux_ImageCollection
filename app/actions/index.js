/**
 * Created by KyleRuan on 2017/5/6.
 */
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function selectEntry(id) {
  return { type: SELECT_ENTRY, id };
}

export function createNewEntry() {
  return { type: CREATE_NEW_ENTRY };
}
export function editEntry(id) {
  return { type: EDIT_ENTRY, id };
}

export function cancelEdit() {
  return { type: CANCEL_EDIT };
}
// editor behavier
export const UPDATE_ENTRY_LIST = 'UPDATE_ENTRY_LIST';

function updateEntryList(items) {
  return { type: UPDATE_ENTRY_LIST, items };
}

export const UPDATE_SAVED_ENTRY = 'UPDATE_SAVED_ENTRY';

