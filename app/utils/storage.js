/**
 * Created by KyleRuan on 2017/5/19.
 */

const STORAGE = window.localStorage;
const STORAGE_KEY = 'ImageCollection';


export default function getAll() {
  return new Promise((resolve) => {
    const results = STORAGE.getItem(STORAGE_KEY);
    try {
      resolve(
        results
          ? JSON.parse(results)
          : []
      );
    } catch (e) {
      resolve([]);
    }
  });
}
