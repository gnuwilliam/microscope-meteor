var postsData = [
  { title: 'Introducing Microscope', author: 'Sacha Greif', url: 'http://google.com' },
  { title: 'Introducing Woot', author: 'William Oliveira', url: 'http://testing.com' },
  { title: 'Introducing the Emperium', author: 'Darth Vader', url: 'http://lol.com' },
  { title: 'Introducing wtf', author: 'Han Solo', url: 'http://what.com' }  
];

Template.postsList.helpers({
  posts: postsData
});
