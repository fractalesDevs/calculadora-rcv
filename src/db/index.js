import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('calc.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS calc (id INTEGER PRIMARY KEY NOT NULL,link TEXT NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertData = (link) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT OR REPLACE INTO calc (link) VALUES (?);',
        [link],
        (_, result) => {
          resolve(result);
          console.log('EXITO', result);
        },
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM calc;',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
