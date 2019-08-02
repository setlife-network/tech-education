
// query language that allows the client to describe the data it needs and its shape

const courses = [
  {
    id: "1",
    title: "Fundamentals of Software",
    description: "blablabla",
    current_version: 1.0,
    youtube_link: "www.youtube.com",
  },

];


/**
 * This typeDefs variable holds our GraphQL Schema. Same as DDBB??
 */
const typeDefs = `
  type Courses {
    id: ID!
    title: String!
    description: String
    current_version: Int
    youtube_link: String
  }
  type Feedback {
    id: ID!
    topic_id: int!
    user_id: int!
    text: Varchar
    date_creation: Datetime
    adapter_direction: Varchar   
  }
  type Topics {
    id: Int!
    title: Varchar
    order: Int
    rich_text_content: Longtext
    course_id: Int
  }
  type Users {
    id: Int!
    email: Varchar
    hashed_password: Varchar
    date_registered: Timestamp
    google_id: Char
  }
`;

const resolvers = {
  Topics: {
    allTopics: (root, args, context) => {
      return Topics;
    },
  },
  User: {
    studio: (root, args, context) => {
      return users.find(user => {
        return user.email.find(movieId => movieId === root.id);
      });
    },
  }
};

const server = new ApolloServer({ //graphql server??
  typeDefs,
  resolvers
});

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});