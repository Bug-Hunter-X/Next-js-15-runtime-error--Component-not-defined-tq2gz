```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

const MyComponent = () => {
  return <p>This is my component.</p>;
};

export default MyComponent;
```