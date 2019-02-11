export default {
  currentUser: {
    id: "uuid0",
    name: "Jane Smith",
    avatar: "/imgs/jane-smith.png",
    surveyAvailable: false
  },
  users: {
    uuid1: {
      id: "uuid1",
      name: "Chris Johnson",
      avatar: "/imgs/chris-johnson.png",
      surveyAvailable: true
    },
    uuid2: {
      id: "uuid2",
      name: "Nico Perez",
      avatar: "/imgs/nico-perez.png",
      surveyAvailable: true
    },
    uuid3: {
      id: "uuid3",
      name: "Nathaniel Moon",
      avatar: "/imgs/nathaniel-moon.png",
      surveyAvailable: true
    },
    uuid4: {
      id: "uuid4",
      name: "Denis Denison",
      avatar: "/imgs/denis-denison.png",
      surveyAvailable: true
    },
    uuid5: {
      id: "uuid5",
      name: "Paul Carter",
      avatar: "/imgs/paul-carter.png",
      surveyAvailable: false
    }
  },
  surveys: {
    feedback1: {
      name: "Feedback",
      questions: {
        uuid21: {
          type: "scale",
          question:
            "How much do you trust this person to deliver high quality work?",
          skippable: false,
          scale: {
            max: 10,
            min: 1,
          }
        },
        uuid22: {
          type: "multipleChoice",
          question: "Is this person up to date with the latest accounting regulations?",
          choices: [
            {
              text: "Not fully. You should work on trying to stay more up to date with regulations.",
              value: 1
            },
            {
              text: "Yes, you are reasonably up to date with new regulations.",
              value: 2
            },
            {
              text: "Yes, you are the one I look up to when I need information about new regulations.",
              value: 3
            }
          ]
        },
        uuid23: {
          type: "scale",
          question:
            "How well does this person understand the technical domain of our product?",
          skippable: false,
          scale: {
            max: 10,
            min: 1,
          }
        },
        uuid24: {
          type: "open",
          question:
            "Have there been any situations where this person could have managed their emotions better? What happened?",
          skippable: true,
        },
        uuid25: {
          type: "multipleChoice",
          question: "Does this person care about our users and treats customer support as a high priority?",
          choices: [
            {
              text: "Not always - you should work on this aspect",
              value: 1
            },
            {
              text: "Yes, you go out of our way to help our users and improve their experience",
              value: 2
            },
            {
              text: "Yes, your understanding of our users and the empathy you demonstrate is second to none",
              value: 3
            }
          ]
        },
        uuid26: {
          type: "open",
          question:
            "What would you like this person to work on the most during the next month, to enable their continued growth?",
          skippable: false,
        },
        uuid27: {
          type: "multipleChoice",
          question: "How transparent and clear are this person's plans and work tasks?",
          choices: [
            {
              text: "I frequently not know what you are working on, please work with me to raise visibility.",
              value: 1
            },
            {
              text: "I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.",
              value: 2
            },
            {
              text: "Your plans are clear and readily available to those around you, and I always know what the next step is.",
              value: 3
            }
          ]
        },
        uuid28: {
          type: "scale",
          question:
            "How well does this person understand our business goals and roadmap?",
          scale: {
            max: 10,
            min: 1,
          }
        },
        uuid29: {
          type: "open",
          question:
            "Is there anything else you'd like to share with this person?",
          skippable: true,
        },
        uuid1: {
          type: "scale",
          question:
            "How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?",
          scale: {
            max: 6,
            min: 1,
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
        uuid20: {
          type: "open",
          question: "Do you have any other feedback for this person?"
        }
      }
    }
  },
  feedback: {}
};
