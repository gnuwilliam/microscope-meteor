// check that the userId specified owns the document
ownsDocument = function (userId, doc) {
  return doc && doc.userId == userId;
}
