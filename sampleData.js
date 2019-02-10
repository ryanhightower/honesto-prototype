export default {
  users: {
    uuid1: {
      id: "uuid1",
      name: "Chris Johnson",
      surveyAvailable: false
    },
    uuid2: {
      id: "uuid2",
      name: "Nico Perez",
      surveyAvailable: false
    },
    uuid3: {
      id: "uuid3",
      name: "Nathaniel Moon",
      surveyAvailable: false
    },
    uuid4: {
      id: "uuid4",
      name: "Denis Denison",
      surveyAvailable: false
    },
    uuid5: {
      id: "uuid5",
      name: "Paul Carter",
      surveyAvailable: false
    }
  },
  surveys: {
    feedback1: {
      name: "Feedback",
      questions: {
        uuid1: {
          type: "scale",
          question:
            "How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?",
          scale: {
            max: 6,
            min: 1,
            labels: {
              min: "",
              mid: "",
              max: ""
            }
          }
        },
        uuid2: {
          type: "multipleChoice",
          question:
            "How would you rate the quality of X Lorem ipsum dolor sit amet?",
          choices: {
            choice1: {
              text: "Lorem ipsum 1",
              value: 1
            },
            choice2: {
              text: "Lorem ipsum 2",
              value: 2
            },
            choice3: {
              text: "Lorem ipsum 3",
              value: 3
            }
          }
        },
        uuid3: {
          type: "multipleChoice",
          question: "How does this person handle X?",
          choices: [
            {
              text: "Lorem ipsum 1",
              value: 1
            },
            {
              text: "Lorem ipsum 2",
              value: 2
            },
            {
              text: "Lorem ipsum 3",
              value: 3
            }
          ]
        },
        uuid4: {
          type: "scale",
          question:
            "Hos is working with this person Lorem ipsom dolor sit amet Lorem ipsum dolor sit amet?",
          choices: {
            choice1: {
              text: "Lorem ipsum 1",
              value: 1
            },
            choice2: {
              text: "Lorem ipsum 2",
              value: 2
            },
            choice3: {
              text: "Lorem ipsum 3",
              value: 3
            }
          }
        },
        uuid17: {
          type: "open",
          question: "Do you have any other feedback for this person?"
        }
      }
    }
  },
  feedback: {}
};
