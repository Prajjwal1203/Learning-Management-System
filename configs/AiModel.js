const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

 
   export const courseOutlineAIModel = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a study material for Python forExam and level of difficulty will be easy with summary of course ,List of chapters along with summary for each chapter,Topic list in each chapter,all result in JSON Format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"courseTitle\": \"Introduction to Python Programming\",\n  \"courseSummary\": \"This course provides a beginner-friendly introduction to Python programming. It covers the fundamental concepts of Python, including data types, control flow, functions, and basic data structures. The course aims to equip learners with the essential skills to write simple Python programs and understand core programming principles.\",\n  \"levelOfDifficulty\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapterNumber\": 1,\n      \"chapterTitle\": \"Getting Started with Python\",\n      \"chapterSummary\": \"This chapter introduces the basics of Python, including how to install Python, set up your environment, and write your first program. It also covers the concept of interpreters and basic syntax.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why learn Python?\",\n        \"Installing Python\",\n        \"Setting up your environment (IDE or Text Editor)\",\n        \"Running your first Python program ('Hello, World!')\",\n          \"Understanding the Python Interpreter\" ,\n        \"Basic Syntax Rules and Code Structure\"\n      ]\n    },\n    {\n      \"chapterNumber\": 2,\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter covers Python's basic data types, including integers, floats, strings, and booleans. It also explains how to declare and use variables to store and manipulate data.\",\n      \"topics\": [\n        \"Integers (int)\",\n        \"Floating-Point Numbers (float)\",\n        \"Strings (str)\",\n        \"Booleans (bool)\",\n        \"Declaring and assigning values to variables\",\n        \"Variable Naming Conventions\",\n         \"Type conversion (casting)\" ,\n          \"Basic Input/Output (using input() and print())\"\n      ]\n    },\n    {\n      \"chapterNumber\": 3,\n      \"chapterTitle\": \"Operators and Expressions\",\n       \"chapterSummary\": \"This chapter introduces Python's operators, including arithmetic, comparison, and logical operators. It also explains how to create expressions by combining operators and operands.\",\n       \"topics\": [\n        \"Arithmetic Operators (+, -, *, /, %, //, **)\",\n        \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"Logical Operators (and, or, not)\",\n        \"Assignment Operators (=, +=, -=, *=, /=)\",\n        \"Order of Operations (PEMDAS/BODMAS)\",\n        \"Writing simple expressions\",\n         \"Understanding precedence\"\n      ]\n    },\n    {\n      \"chapterNumber\": 4,\n      \"chapterTitle\": \"Control Flow: Conditional Statements\",\n      \"chapterSummary\": \"This chapter focuses on conditional statements, including if, elif, and else, which allow programs to make decisions and execute different code blocks based on conditions.\",\n      \"topics\": [\n        \"The 'if' statement\",\n        \"The 'if-else' statement\",\n        \"The 'if-elif-else' statement\",\n        \"Nested conditional statements\",\n        \"Understanding code blocks and indentation\",\n        \"Using conditional statements in simple programs\"\n\n      ]\n    },\n     {\n      \"chapterNumber\": 5,\n      \"chapterTitle\": \"Control Flow: Loops\",\n      \"chapterSummary\": \"This chapter introduces different types of loops, including 'for' and 'while' loops, which allow code blocks to be executed repeatedly. It also covers iteration and looping techniques.\",\n      \"topics\": [\n          \"The 'for' loop (iterating over sequences)\",\n          \"The 'while' loop\",\n          \"Loop control statements: 'break' and 'continue'\",\n          \"Nested loops\",\n          \"Understanding loop counters and iterators\",\n           \"Using loops to solve simple problems\"\n        ]\n      },\n    {\n      \"chapterNumber\": 6,\n       \"chapterTitle\": \"Introduction to Functions\",\n       \"chapterSummary\": \"This chapter introduces functions, which are reusable blocks of code that perform specific tasks. It covers how to define functions, call functions, and use parameters and return values.\",\n      \"topics\": [\n        \"What is a function?\",\n        \"Defining a function using 'def'\",\n          \"Calling a function\",\n        \"Function parameters (arguments)\",\n        \"Function return values\",\n          \"Scope of variables in functions\",\n           \"Using functions to structure programs\"\n        ]\n     },\n    {\n      \"chapterNumber\": 7,\n      \"chapterTitle\": \"Working with Basic Data Structures\",\n       \"chapterSummary\": \"This chapter provides an introduction to basic Python data structures: lists and tuples. It covers creating, accessing, and manipulating these data structures.\",\n       \"topics\": [\n          \"Introduction to lists\",\n          \"Creating lists and accessing elements\",\n          \"Modifying lists (adding, removing, changing elements)\",\n          \"Introduction to tuples\",\n          \"Creating tuples and accessing elements\",\n          \"Difference between lists and tuples\",\n           \"Using lists and tuples in simple programs\"\n        ]\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

 // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
 // console.log(result.response.text());

