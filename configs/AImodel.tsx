const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const GenerateQuestionPaper = model.startChat({
    generationConfig,
    history: [

        {
            role: "user",
            parts: [
            {text: "generate question with the following data and also provide answers :\ncourse outcomes - learn fundamentals of react,\nblooms taxonomy level - any ,\ntopic - reactjs ,\nquestion type - mcq and long (250 - 600 words) ,\nnumber of questions - 10"},
            ],
        },
        {
            role: "model",
            parts: [
            {text: "## ReactJS Quiz: Fundamentals\n\n**Instructions:** Choose the best answer for the multiple-choice questions.  Answer the long-answer question thoroughly and comprehensively.\n\n**Multiple Choice Questions (MCQ):**\n\n**1.  What is the core purpose of ReactJS?**\n(a)  Building complex backend systems\n(b)  Creating interactive user interfaces\n(c)  Managing databases efficiently\n(d)  Handling network requests\n\n**Answer: (b) Creating interactive user interfaces**\n\n\n**2.  What is JSX?**\n(a) A JavaScript library for animations\n(b) A preprocessor for CSS styles\n(c)  A syntax extension to JavaScript that allows HTML-like syntax within JavaScript code\n(d) A framework for building mobile applications\n\n**Answer: (c) A syntax extension to JavaScript that allows HTML-like syntax within JavaScript code**\n\n\n**3.  What is a component in React?**\n(a) A single HTML element\n(b) A reusable building block of a user interface\n(c) A function that handles user input\n(d) A method for managing application state\n\n**Answer: (b) A reusable building block of a user interface**\n\n\n**4.  Which of the following is NOT a way to define a React component?**\n(a) Functional component\n(b) Class component\n(c)  Procedural component\n(d) Both (a) and (b)\n\n**Answer: (c) Procedural component**\n\n\n**5.  What does `setState` do in a React component?**\n(a) Updates the component's internal state\n(b)  Changes the component's props\n(c)  Renders the component to the DOM\n(d)  Handles user events\n\n**Answer: (a) Updates the component's internal state**\n\n\n**6.  What is the virtual DOM?**\n(a) A lightweight copy of the real DOM\n(b) A type of database used by React\n(c) A programming language for web development\n(d) A framework for building responsive websites\n\n**Answer: (a) A lightweight copy of the real DOM**\n\n\n**7.  What is `props` in React?**\n(a) Properties passed from a parent component to a child component\n(b)  Methods available to a component\n(c)  The internal state of a component\n(d)  Events triggered by user interactions\n\n**Answer: (a) Properties passed from a parent component to a child component**\n\n\n**8.  What is the purpose of `key` prop when rendering lists in React?**\n(a) To style individual list items\n(b) To help React identify and update individual items efficiently\n(c) To store data associated with each list item\n(d) To provide unique identifiers for each item in the list\n\n**Answer: (b) To help React identify and update individual items efficiently (d is also technically correct, but b is more precise and explains the *why*)**\n\n\n**9.  What is a lifecycle method in React?**\n(a) A function that is executed automatically at different stages of a component's existence\n(b) A method for handling user input\n(c) A way to define the component's structure\n(d) A function that renders the component to the screen\n\n**Answer: (a) A function that is executed automatically at different stages of a component's existence**\n\n\n**10.  What is event handling in React?**\n(a) The process of managing user interactions with the UI\n(b) The way React updates the DOM\n(c) A method for rendering components\n(d) A type of data structure\n\n**Answer: (a) The process of managing user interactions with the UI**\n\n\n**Long Answer Question:**\n\n**Explain the concept of component-based architecture in React, including different types of components, state management, and the benefits of using this approach. Provide examples to illustrate your points.**\n\n**Answer:**\n\nReact utilizes a component-based architecture, a fundamental principle that promotes modularity, reusability, and maintainability in building user interfaces.  Instead of a monolithic structure, the UI is broken down into smaller, self-contained units called components.  These components can then be nested within each other to form a complex, hierarchical structure.\n\nThere are two primary types of components in React: functional components and class components. Functional components are simpler, typically used for presentational logic (displaying data), and are defined as JavaScript functions.  They accept `props` (properties) as input and return JSX, which describes the component's UI.  Class components, on the other hand, offer more advanced features, including internal state management using `this.state` and lifecycle methods (functions that automatically execute during specific stages of the component's life, such as mounting, updating, and unmounting).\n\n\n**State Management:**  Component state is crucial for managing data changes that trigger UI updates.  In functional components, `useState` hook manages state.  In class components, `this.state` holds the component's internal data.  When the state changes, React efficiently updates only the necessary parts of the UI, using the virtual DOM to minimize direct DOM manipulations.  For larger applications, dedicated state management libraries like Redux or Context API might be necessary to handle complex data flows effectively across multiple components.\n\n\n**Benefits of Component-Based Architecture:**\n\n* **Reusability:** Components can be reused across different parts of the application, reducing code duplication and improving maintainability.  A button component, for instance, can be used throughout the application without rewriting its code.\n* **Modularity:** The application is broken into smaller, independent parts, making it easier to understand, debug, and test.  Changes in one component are less likely to affect other parts of the application.\n* **Maintainability:**  Easier to update and maintain, since changes are localized to specific components.  This contrasts with monolithic approaches where a small change might require extensive revisions across the entire application.\n* **Organization:**  Improves code organization and structure, leading to better collaboration in team projects.\n* **Testability:** Individual components are easier to unit test, ensuring the correctness of each part of the application.\n\n\n**Examples:**\n\nConsider a simple e-commerce application.  You might have components for:\n\n* `ProductCard`:  Displays details of a single product (image, title, price, etc.). This component would take product data as `props`.\n* `ProductList`:  Displays a list of `ProductCard` components.  This component would manage the state of the product list itself.\n* `ShoppingCart`:  Displays the items in the shopping cart and allows the user to manage them.\n* `Checkout`:  Handles the checkout process.\n\n\nEach of these components would be self-contained and reusable, making the entire application more structured, maintainable, and scalable. The `ProductList` component, for instance, might use state to manage filtering or sorting of products, while the `ProductCard` would simply display the information provided to it via `props`.  This clear separation of concerns is a hallmark of React's component-based architecture.\n"},
            ],
        },


    ],
  });

//   const result = await GenerateQuestionPaper.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());


