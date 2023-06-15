import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

const db = SQLite.openDatabase('calculadora');

export const init = () => {
  const [isLoading, setIsLoading] = useState(true);
};
