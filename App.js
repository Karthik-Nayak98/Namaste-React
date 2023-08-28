const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'child1' },
    React.createElement('h1', { id: 'heading' }, 'Hello World from React.')
  ),
  React.createElement(
    'div',
    { id: 'child2' },
    React.createElement('h1', { id: 'heading' }, 'Hello World from React.')
  ),
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('body'));

root.render(parent);
