db.users.insertMany([
  {
    username: "zineb",
    bio: "Full stack developer passionate about React and Node.js",
    socialLinks: {
      github: "github.com/zineb",
      linkedin: "linkedin.com/in/zineb",
      twitter: "twitter.com/zineb_dev"
    }
  },
  {
    username: "yassine",
    bio: "Backend developer and MongoDB enthusiast",
    socialLinks: {
      github: "github.com/yassine",
      linkedin: "linkedin.com/in/yassine",
      twitter: "twitter.com/yassine_dev"
    }
  },
  {
    username: "sophia",
    bio: "UI/UX designer and frontend developer",
    socialLinks: {
      github: "github.com/sophia",
      linkedin: "linkedin.com/in/sophia",
      twitter: "twitter.com/sophia_design"
    }
  }
]);

//=>Result
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('69a965d9e52b2865b82305af'),
//     '1': ObjectId('69a965d9e52b2865b82305b0'),
//     '2': ObjectId('69a965d9e52b2865b82305b1')
//   }
// }

db.posts.insertOne({
  title: "Why I Love MongoDB",
  body: "Schema flexibility is a game changer...",
  authorId: ObjectId("69a965d9e52b2865b82305b1"),
  tags: ["NoSQL", "Database", "Tech"],
  comments: [
    {
      user: "CodeMaster",
      text: "Great article! Very clear.",
      date: new Date()
    }
  ]
})

//=>Result
// {
//   acknowledged: true,
//   insertedId: ObjectId('69a96657e52b2865b82305b2')
// }