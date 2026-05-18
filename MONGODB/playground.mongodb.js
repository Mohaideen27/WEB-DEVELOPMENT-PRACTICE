use("PracticeDatabase");

// Insert a few documents into the sales collection.
db.getCollection("sales").insertMany([
  {
    database: {
      name: "Course Management System",
      version: "1.0",
      createdAt: "2026-05-18",
      courses: [
        {
          courseId: "CSE101",
          title: "Introduction to Computer Science",
          category: "Computer Science",
          level: "Beginner",
          language: "English",
          duration: {
            weeks: 12,
            hours: 48,
          },
          price: {
            currency: "USD",
            amount: 99,
          },
          instructor: {
            instructorId: "INS001",
            name: "Dr. Sarah Johnson",
            email: "sarah.johnson@example.com",
            experience: "10 years",
            skills: ["Programming", "Algorithms", "Python"],
            rating: 4.8,
          },
          students: [
            {
              studentId: "STU1001",
              name: "John Doe",
              email: "john@example.com",
              progress: 75,
              completed: false,
              enrolledDate: "2026-01-10",
            },
            {
              studentId: "STU1002",
              name: "Alice Smith",
              email: "alice@example.com",
              progress: 100,
              completed: true,
              enrolledDate: "2026-01-08",
            },
          ],
          modules: [
            {
              moduleId: "MOD001",
              title: "Basics of Programming",
              topics: ["Variables", "Loops", "Functions"],
              assignments: [
                {
                  assignmentId: "A1",
                  title: "Programming Basics Quiz",
                  maxMarks: 100,
                  dueDate: "2026-02-01",
                },
              ],
            },
            {
              moduleId: "MOD002",
              title: "Data Structures",
              topics: ["Arrays", "Linked Lists", "Stacks"],
              assignments: [
                {
                  assignmentId: "A2",
                  title: "Data Structure Project",
                  maxMarks: 100,
                  dueDate: "2026-03-01",
                },
              ],
            },
          ],
          reviews: [
            {
              reviewId: "REV001",
              studentName: "John Doe",
              rating: 5,
              comment: "Excellent course for beginners",
            },
            {
              reviewId: "REV002",
              studentName: "Alice Smith",
              rating: 4,
              comment: "Very informative and practical",
            },
          ],
          certificate: true,
          tags: ["Programming", "Coding", "Computer Science"],
          status: "Active",
        },
        {
          courseId: "DS201",
          title: "Data Science with Python",
          category: "Data Science",
          level: "Intermediate",
          language: "English",
          duration: {
            weeks: 16,
            hours: 64,
          },
          price: {
            currency: "USD",
            amount: 149,
          },
          instructor: {
            instructorId: "INS002",
            name: "Michael Lee",
            email: "michael.lee@example.com",
            experience: "8 years",
            skills: ["Machine Learning", "Python", "Pandas"],
            rating: 4.7,
          },
          students: [
            {
              studentId: "STU2001",
              name: "David Brown",
              email: "david@example.com",
              progress: 40,
              completed: false,
              enrolledDate: "2026-02-15",
            },
          ],
          modules: [
            {
              moduleId: "MOD101",
              title: "Python for Data Science",
              topics: ["NumPy", "Pandas", "Matplotlib"],
              assignments: [
                {
                  assignmentId: "DSA1",
                  title: "Data Cleaning Task",
                  maxMarks: 100,
                  dueDate: "2026-04-10",
                },
              ],
            },
            {
              moduleId: "MOD102",
              title: "Machine Learning",
              topics: ["Regression", "Classification", "Clustering"],
              assignments: [
                {
                  assignmentId: "DSA2",
                  title: "ML Model Project",
                  maxMarks: 100,
                  dueDate: "2026-05-01",
                },
              ],
            },
          ],
          reviews: [
            {
              reviewId: "REV101",
              studentName: "David Brown",
              rating: 5,
              comment: "Best practical Data Science course",
            },
          ],
          certificate: true,
          tags: ["Data Science", "Machine Learning", "Python"],
          status: "Active",
        },
        {
          courseId: "WEB301",
          title: "Full Stack Web Development",
          category: "Web Development",
          level: "Advanced",
          language: "English",
          duration: {
            weeks: 20,
            hours: 100,
          },
          price: {
            currency: "USD",
            amount: 199,
          },
          instructor: {
            instructorId: "INS003",
            name: "Emma Wilson",
            email: "emma.wilson@example.com",
            experience: "12 years",
            skills: ["React", "Node.js", "MongoDB"],
            rating: 4.9,
          },
          students: [],
          modules: [
            {
              moduleId: "MOD201",
              title: "Frontend Development",
              topics: ["HTML", "CSS", "JavaScript", "React"],
              assignments: [],
            },
            {
              moduleId: "MOD202",
              title: "Backend Development",
              topics: ["Node.js", "Express", "MongoDB"],
              assignments: [],
            },
          ],
          reviews: [],
          certificate: true,
          tags: ["Web Development", "Frontend", "Backend", "Full Stack"],
          status: "Upcoming",
        },
      ],
    },
  },
]);
