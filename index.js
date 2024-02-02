const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// thsisi
//
// Connect to MongoDB

// Course model

// Generate and store 50 courses
let courserArray = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/63/fbabccd21040019eb0a5d36a3d4216/image-16-.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50", // Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React ",
        content: "Overview of React , setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to Web3",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of Web3 development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50", // Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to Python",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of Python development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/25/100f488610437c8409a9af3d5a8066/DeepLearning_Generative_AI_for_Everyone_Banner_1000x1000_F.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50", // Link to the course thumbnail
    duration: "20 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to Django",
    instructor: "Alice", // NaAme of the course instructor
    description:
      "Learn the basics of Python Django development and build your first mobile app.",
    enrollmentStatus: "In Progress", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7c/669fbf899e45ba9aa38650b2d65f51/sparc7.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50", // Link to the course thumbnail
    duration: "12 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: " Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/61/edc4c8538e49fd97efecab1665e969/GenAI_Logo-Image_1200x1200pxl-copy.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Web Applications",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to HTML",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of HTML development and build your first mobile app.",
    enrollmentStatus: "Closed", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/bb/62e6a0120b11e6bc32c330496bd91a/Career-Development.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "5 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to Css",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of Css development and build your first mobile app.",
    enrollmentStatus: "In Progress", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/eb/bde77b80db4b5784c5106f65b2e81e/Learning-How-to-Learn-Logo.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction Dark Magic",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5a/96a7aa4eee439099582a3a8e1a1f70/marketing.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/b0/73c42fb4f443b0a802d5bed01add87/1325192.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7a/569080aab711e79d97bf25c196049d/1200px-square-dark.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
];
app.get("/courses", async (req, res) => {
  try {
    res.json(courserArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/course/:id", async (req, res) => {
  try {
    let course = courserArray.find((e) => e.id == req.params.id);

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const checkStudent = (arr, id) => {
  return !!arr.students.find((c) => c.id == id);
};

app.get("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let arr = [];
    let response = courserArray.filter((e) => checkStudent(e, 101));

    response.length = 5;

    let studentData = response[0].students.find((c) => c.id == 101);

    res.json({ ...studentData, courses: response });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
app.get("/search/:name", async (req, res) => {
  try {
    let name = req.params.name;
    let result = courserArray.filter((e) =>
      e.name.toUpperCase().includes(name.toUpperCase())
    );

    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
app.get("/", async (req, res) => {
  res.json({
    statue: "server is runing",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
