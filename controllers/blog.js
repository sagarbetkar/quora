const Blog = require('../models/blog');

exports.postNewBlog = (req, res) => {
  let {
    title,
    userId,
    author,
    description,
    createdAt,
    updatedAt,
    topic
  } = req.body;

  var blog = new Blog({
    title,
    userId,
    author,
    description,
    createdAt,
    updatedAt,
    topic
  });
  blog.save().then((blog) => {
    console.log('Added successfully');
    res.json({
      message: "Added successfully",
      status: 200
    });
  }).catch(function(err) {
    if (err) {
      console.log(err);
      res.json({
        message: 'Server error',
        status: 500
      });
    }
  });
};

exports.getAllBlogs = (req, res) => {
  Blog.find({}, (error, blogs) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (blogs) {
      res.json({
        data: blogs,
        message: "All blogs fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.getBlogById = (req, res) => {
  Blog.findById(req.params.id, (err, blogs) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (blogs) {
      res.json({
        data: blogs,
        message: "Blog data fetched successfully",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.updateBlogById = (req, res) => {
  console.log(req.body);
  const {
    title,
    userId,
    author,
    description,
    topic
  } = req.body;
  Blog.update({
    _id: req.params.id
  }, {
    title,
    userId,
    author,
    description,
    topic
  }, {}, (error, blog) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(blog);
  });
};

exports.deleteBlogById = (req, res) => {
  Blog.findOneAndDelete({
    _id: req.params.id
  }, (error, deleteId) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    res.json({
      message: "Deleted successfully"
    });
  });
};
