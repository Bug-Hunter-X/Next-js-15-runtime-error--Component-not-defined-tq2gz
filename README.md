# Next.js 15 Runtime Error: Component Not Defined

This repository demonstrates a common runtime error in Next.js 15 applications where a component is used but not exported correctly, leading to a runtime error: `'MyComponent' is not defined`.

## Bug Description

The issue arises when attempting to use a component in a page that has not been properly exported. In the `pages/index.js` file, `MyComponent` is used, but `MyComponent.js` doesn't export it.  This causes Next.js to fail to find the component during rendering. 

## Solution

The solution involves ensuring that the component is correctly exported from its file.  Exporting the component makes it accessible for use within other parts of the application.   The corrected `MyComponent.js` file now exports the `MyComponent` component.