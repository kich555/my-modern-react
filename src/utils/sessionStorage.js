export const getItem = (session) => {
  console.log('session',session)
  const stringifiedItem = sessionStorage.getItem(session)
  console.log('stringifiedItem',stringifiedItem)
  return JSON.parse(stringifiedItem)
};

export const setItem = (session, item) => window.sessionStorage.setItem(session, JSON.stringify(item));

export const removeItem = session => window.sessionStorage.removeItem(session);

export const addItem = (session, item) => {
  const connectorID = JSON.parse(sessionStorage.getItem(session));
  const newItem = { ...connectorID, ...item };
  return window.sessionStorage.setItem(session, JSON.stringify(newItem));
};
