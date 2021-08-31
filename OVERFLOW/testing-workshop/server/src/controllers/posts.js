import db from '../utils/db'

async function authorize(req, res, next) {
  const {authorId} = await db.getPost(req.params.id)
  if (req.user.id === authorId) {
    return next()
  } else {
    return res.status(403).send()
  }
}

async function getPosts(req, res) {
  const posts = await db.getPosts()
  if (posts) {
    return res.json({posts})
  } else {
    return res.status(404).send()
  }
}

async function getPost(req, res) {
  const post = await db.getPost(req.params.id)
  if (post) {
    return res.json({post})
  } else {
    return res.status(404).send()
  }
}

async function createPost(req, res) {
  const post = await db.insertPost(req.body)
  if (post) {
    return res.json({post})
  } else {
    return res.status(404).send()
  }
}

async function updatePost(req, res) {
  const post = await db.getPost(req.params.id)
  if (!post) {
    return res.status(404).send()
  }
  if (!req.user || req.user.id !== post.authorId) {
    return res.status(403).send()
  }
  const updatedPost = await db.updatePost(req.params.id, req.body)
  if (updatedPost) {
    return res.json({post: updatedPost})
  } else {
    // TODO: come up with a better status code...
    return res.status(500).send()
  }
}

async function deletePost(req, res) {
  const post = await db.getPost(req.params.id)
  if (!post) {
    return res.status(404).send()
  }
  if (!req.user || req.user.id !== post.authorId) {
    return res.status(403).send()
  }
  const deletedPost = await db.deletePost(req.params.id)
  return res.json({post: deletedPost})
}

export {authorize, getPosts, getPost, createPost, updatePost, deletePost}
